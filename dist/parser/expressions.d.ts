import { ParserState, Location } from './../types';
import * as ESTree from '../estree';
import { Context } from '../common';
export declare function parseExpression(state: ParserState, context: Context): any;
export declare function parseSequenceExpression(state: ParserState, context: Context, left: ESTree.Expression, pos: Location): ESTree.SequenceExpression;
export declare function parseAssignmentExpression(state: ParserState, context: Context): any;
export declare function parseLeftHandSideExpression(state: ParserState, context: Context, pos: Location): any;
export declare function parseNewTargetExpression(state: ParserState, context: Context, id: ESTree.Identifier, pos: Location): any;
export declare function parseNewOrMemberExpression(state: ParserState, context: Context): any;
export declare function parsePrimaryExpression(state: ParserState, context: Context, pos: Location): any;
export declare function parseBigIntLiteral(state: ParserState, context: Context): ESTree.BigIntLiteral;
export declare function parseIdentifier(state: ParserState, context: Context): ESTree.Identifier;
export declare function parseLiteral(state: ParserState, context: Context): ESTree.Literal;
export declare function parseFunctionExpression(state: ParserState, context: Context, pos: Location, isAsync: boolean): ESTree.FunctionExpression;
export declare function parseFormalParameters(state: ParserState, context: Context): any;
export declare function parseFormalParameterList(state: ParserState, context: Context): ESTree.Identifier | ESTree.ObjectPattern | ESTree.ArrayPattern | ESTree.RestElement;
export declare function parseFunctionBody(state: ParserState, context: Context): ESTree.BlockStatement;
export declare function parseClassExpression(state: ParserState, context: Context): ESTree.ClassExpression;
export declare function parseClassBodyAndElementList(state: ParserState, context: Context): ESTree.ClassBody;
export declare function parseClassElement(state: ParserState, context: Context): ESTree.ClassBody;
export declare function parsePropertyName(state: ParserState, context: Context): ESTree.Expression;
export declare function parseRestElement(state: ParserState, context: Context): ESTree.RestElement;
//# sourceMappingURL=expressions.d.ts.map