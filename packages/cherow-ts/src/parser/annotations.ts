import { Parser, Location } from '../../../cherow/src/types';
import { report, Errors } from '../../../cherow/src/errors';
import { Token, tokenDesc } from '../../../cherow/src/token';
import { parseLiteral } from '../../../cherow/src/parser/expressions';
import { parseIdentifier } from './/expressions';
import { keywordTypeFromName } from '../utilities';
import * as ESTree from '../estree';
import {
  Context,
  Flags,
  getLocation,
  consume,
  finishNode,
  expect,
  consumeSemicolon,
  nextToken
} from '../../../cherow/src/utilities';

// AST from Babylon / ESLint

/**
 * Parses mapped type parameter
 *
 * @param {Parser} parser object
 * @param {Context} context Context masks
 * @returns {*}
 */
function parseMappedTypeParameter(parser: Parser, context: Context): any {
  const pos = getLocation(parser);
  const name = parseIdentifier(parser, context);
  expect(parser, context, Token.InKeyword);
  const constraint = parseType(parser, context);
  return finishNode(context, parser, pos, {
      type: 'TypeParameter',
      name
  });
}

/*
* Parser TS intersection types
*
* @param {Parser} parser Parser object
* @param {Context} context Context masks
* @returns {*}
*/

function parseIntersectionType(parser: Parser, context: Context): any {
  const pos = getLocation(parser);
  const type = parseTypeOperator(parser, context);

  if (parser.token !== Token.BitwiseAnd) return type;
  const types = [type];
  while (consume(parser, context, Token.BitwiseAnd)) {
      types.push(parseTypeOperator(parser, context));
  }
  return finishNode(context, parser, pos, {
      type: 'TSIntersectionType',
      types
  });
}

/*
* Parse TS union types
*
* @param parser Parser object
* @param context Context masks
*/
function parseUnionType(parser: Parser, context: Context): any {
  const pos = getLocation(parser);

  const type = parseIntersectionType(parser, context);

  if (parser.token !== Token.BitwiseOr) return type;

  const types = [type];

  while (consume(parser, context, Token.BitwiseOr)) {
      types.push(parseIntersectionType(parser, context));
  }

  return finishNode(context, parser, pos, {
      type: 'TSUnionType',
      types
  });
}

function parseType(parser: Parser, context: Context): any {
  return parseUnionType(parser, context);
}

function parseBindingList(parser: Parser, context: Context): any {
  return parseIdentifier(parser, context);
}

function parseMappedType(parser: Parser, context: Context, pos: Location): any {
  const readonly = consume(parser, context, Token.ReadOnlyKeyword);
  expect(parser, context, Token.LeftBracket);
  const typeParameter = parseMappedTypeParameter(parser, context);
  expect(parser, context, Token.RightBracket);
  const optional = consume(parser, context, Token.QuestionMark);
  let typeAnnotation;
  if (consume(parser, context, Token.Colon)) typeAnnotation = parseType(parser, context);
  consumeSemicolon(parser, context);
  expect(parser, context, Token.RightBrace);

  return finishNode(context, parser, pos, {
      type: 'TSMappedType',
      readonly,
      typeParameter,
      optional,
      typeAnnotation
  });
}

function parseIdentifierTypedNode(parser: Parser, context: Context): any {
  const pos = getLocation(parser);
  const type: any = keywordTypeFromName(parser.tokenValue);
  if (type) {
      expect(parser, context, Token.Identifier);
      return finishNode(context, parser, pos, {
          type: keywordTypeFromName(parser.tokenValue),
      });
  }
  return parseTypeReference(parser, context);
}

function parseEntityName(parser: Parser, context: Context): any {
  const pos = getLocation(parser);
  let entity = parseIdentifier(parser, context);

  while (consume(parser, context, Token.Period)) {
      entity = finishNode(context, parser, pos, {
          type: 'TSQualifiedName',
          left: entity,
          right: parseIdentifier(parser, context)
      });
  }

  return entity;
}

function parseTypeArgumentElements(parser: Parser, context: Context): any {
  const params: any = [];
  expect(parser, context, Token.LessThan);

  while (parser.token !== Token.GreaterThan) {
      params.push(parseType(parser, context));
  }

  expect(parser, context, Token.GreaterThan);
  return params;
}

function parseTypeArguments(parser: Parser, context: Context): any {
  const pos = getLocation(parser);
  const params = parseTypeArgumentElements(parser, context);

  return finishNode(context, parser, pos, {
      type: 'TypeParameterInstantiation',
      params
  });
}

function parseTypeReference(parser: Parser, context: Context): any {
  const pos = getLocation(parser);
  const typeName = parseEntityName(parser, context);
  let typeParameters: any = [];

  if (!(parser.flags & Flags.NewLine) && parser.token === Token.LessThan) {
      typeParameters = parseTypeArguments(parser, context);
  }
  return finishNode(context, parser, pos, {
      type: 'TSTypeReference',
      typeName,
      typeParameters
  });
}

function parseNullTypedNode(parser: Parser, context: Context): any {
  const pos = getLocation(parser);
  expect(parser, context, Token.NullKeyword);
  return finishNode(context, parser, pos, {
      type: 'TSNullKeyword',
  });
}

function parseSubtractTypeNode(parser: Parser, context: Context): any {
  const pos = getLocation(parser);
  expect(parser, context, Token.Subtract);
  // has to be followed by a numeric value
  if (parser.token !== Token.NumericLiteral) report(parser, Errors.Unexpected);

  return finishNode(context, parser, pos, {
      type: 'TSLiteralType',
      literal: parseLiteral(parser, context)
  });
}

function parseThisTypeNode(parser: Parser, context: Context): any {
  const pos = getLocation(parser);
  expect(parser, context, Token.ThisKeyword);
  return finishNode(context, parser, pos, {
      type: 'TSThisType',
      literal: parseLiteral(parser, context)
  });
}

function parseThisTypePredicate(parser: Parser, context: Context, parameterName: any): any {
  const pos = getLocation(parser);
  nextToken(parser, context);
  return finishNode(context, parser, pos, {
      type: 'TSTypePredicate',
      parameterName,
      typeAnnotation: parseTypeAnnotation(parser, context, /* consumeColon */ false)
  });
}

export function parseTypeAnnotation(parser: Parser, context: Context, consumeColon: boolean = true): any {
  const pos = getLocation(parser);
  if (consumeColon) expect(parser, context, Token.Colon);
  return finishNode(context, parser, pos, {
      type: 'TypeAnnotation',
      typeAnnotation: parseType(parser, context)
  });
}

function parseVoidTypedNode(parser: Parser, context: Context): any {
  const pos = getLocation(parser);
  expect(parser, context, Token.VoidKeyword);
  return finishNode(context, parser, pos, {
      type: 'TSVoidKeyword',
  });
}

function parseLiteralTypedNode(parser: Parser, context: Context): any {
  const pos = getLocation(parser);
  let literal: any;
  switch (parser.token) {
      case Token.StringLiteral:
      case Token.NumericLiteral:
          literal = parseLiteral(parser, context);
          break;
      case Token.TrueKeyword:
          literal = {
              type: 'Literal',
              value: false
          };
          break;
      case Token.FalseKeyword:
          literal = {
              type: 'Literal',
              value: false
          };
          break;
      default:
          report(parser, Errors.Unexpected);
  }

  return finishNode(context, parser, pos, {
      type: 'TSLiteralType',
      literal
  });
}

function parseNonArrayType(parser: Parser, context: Context): any {
  switch (parser.token) {
      case Token.Identifier:
          return parseIdentifierTypedNode(parser, context);
      case Token.VoidKeyword:
          return parseVoidTypedNode(parser, context);
      case Token.NullKeyword:
          return parseNullTypedNode(parser, context);
      case Token.StringLiteral:
      case Token.NumericLiteral:
      case Token.TrueKeyword:
      case Token.FalseKeyword:
          return parseLiteralTypedNode(parser, context);
      case Token.Subtract:
          return parseSubtractTypeNode(parser, context);
      case Token.ThisKeyword:
          const thisType = parseThisTypeNode(parser, context);
          switch (parser.token) {
              case Token.IsKeyword:
                  if (!(parser.flags & Flags.NewLine)) return parseThisTypePredicate(parser, context, thisType);
                  // falls through
              default:
                  return thisType;
          }
      case Token.TypeofKeyword:
          return parseTypeQuery(parser, context);
      case Token.LeftBrace:
          const pos = getLocation(parser);
          expect(parser, context, Token.LeftBrace);
          if (parser.token === Token.LeftBracket || parser.token === Token.ReadOnlyKeyword) return parseMappedType(parser, context, pos);
          return parseTypeLiteral(parser, context, pos);
      case Token.LeftBracket:
          return parseTupleType(parser, context);
      case Token.LeftParen:
          return parseParenthesizedType(parser, context);
      default:
          report(parser, Errors.Unexpected);
  }
}

function parseParenthesizedType(parser: Parser, context: Context): any {
  const pos = getLocation(parser);
  expect(parser, context, Token.LeftParen);
  const typeAnnotation = parseType(parser, context);
  expect(parser, context, Token.RightParen);

  return finishNode(context, parser, pos, {
      type: 'TSParenthesizedType',
      typeAnnotation
  });
}

function parseTupleElementTypes(parser: Parser, context: Context): any {
  const pos = getLocation(parser);
  return finishNode(context, parser, pos, {
      type: 'TupleElementTypes'
  });
}

function parseTupleType(parser: Parser, context: Context): any {
  const pos = getLocation(parser);
  expect(parser, context, Token.LeftBracket);
  const elementTypes = [parseTupleElementTypes(parser, context)];

  while (parser.token === Token.RightBracket) {
      elementTypes.push(parseType(parser, context));
  }
  return finishNode(context, parser, pos, {
      type: 'TSTupleType',
      elementTypes
  });
}

function parseTypeLiteral(parser: Parser, context: Context, pos: Location): any {
  return finishNode(context, parser, pos, {
      type: 'TSTypeLiteral',
      members: parseObjectTypeMembers(parser, context)
  });
}

function parseTypeQuery(parser: Parser, context: Context): any {
  const pos = getLocation(parser);
  expect(parser, context, Token.KeyOfKeyword);
  return finishNode(context, parser, pos, {
      type: 'TSTypeQuery',
      exprName: parseEntityName(parser, context)
  });
}

function parseTypeMember(parser: Parser, context: Context): any {
  // TODO
}

function parseObjectTypeMembers(parser: Parser, context: Context): any {
  const members: any = [];
  while (parser.token !== Token.RightBrace) {
      members.push(parseTypeMember(parser, context));
  }
  expect(parser, context, Token.RightBrace);
  return members;
}

function parseArrayType(parser: Parser, context: Context): any {
  const pos = getLocation(parser);
  let type = parseNonArrayType(parser, context);

  while (!(parser.flags & Flags.NewLine) && consume(parser, context, Token.LeftBracket)) {
      if (consume(parser, context, Token.RightBracket)) {
          type = finishNode(context, parser, pos, {
              type: 'TSArrayType',
              elementType: type
          });
      } else {
          const indexType = parseType(parser, context);
          expect(parser, context, Token.RightBracket);
          type = finishNode(context, parser, pos, {
              type: 'TSIndexedAccessType',
              elementType: type,
              indexType
          });
      }
  }
  return type;
}

function parseTypeOperatorWithOperatpr(parser: Parser, context: Context, token: Token): any {
  const pos = getLocation(parser);
  expect(parser, context, token);

  return finishNode(context, parser, pos, {
      type: 'TSTypeOperator',
      operator: tokenDesc(token),
      typeAnnotation: parseTypeOperator(parser, context)
  });
}

function parseTypeOperator(parser: Parser, context: Context): any {
  return parser.token === Token.KeyOfKeyword ?
      parseTypeOperatorWithOperatpr(parser, context, Token.KeyOfKeyword) :
      parseArrayType(parser, context);
}