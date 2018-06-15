import { Parser, Location } from '../types';
import { Token } from '../token';
import * as ESTree from '../estree';
import { parseClassBodyAndElementList, parseLeftHandSideExpression, parseFormalListAndBody } from './expressions';
import { Context, BindingType, BindingOrigin, ModifierState, expect, consume, swapContext, finishNode, getLocation } from '../common';
import { parseDelimitedBindingList, parseBindingIdentifier } from './pattern';
import { recordErrors, Errors } from '../errors';

// Declarations

/**
 * Parses class declaration
 *
 * @see [Link](https://tc39.github.io/ecma262/#prod-ClassDeclaration)
 *
 * @param parser  Parser object
 * @param context Context masks
 */
export function parseClassDeclaration(parser: Parser, context: Context): ESTree.ClassDeclaration {
    const pos = getLocation(parser);
    context = context | Context.Strict;
    expect(parser, context, Token.ClassKeyword);
    let id: ESTree.Identifier | null = null;
    if ((parser.token & Token.Identifier) === Token.Identifier || parser.token & Token.Keyword && parser.token !== Token.ExtendsKeyword) {
        id = parseBindingIdentifier(parser, context);
    } else if (!(context & Context.RequireIdentifier)) recordErrors(parser, context, Errors.UnNamedFunctionDecl);
    let superClass: ESTree.Expression | null = null;
    if (consume(parser, context, Token.ExtendsKeyword)) {
        superClass = parseLeftHandSideExpression(parser, context | Context.Strict, pos);
    }

    const body = parseClassBodyAndElementList(parser, context);

    return finishNode(parser, context, pos, {
        type: 'ClassDeclaration',
        id,
        superClass,
        body
    });
}

/**
 * Parses function declaration
 *
 * @see [Link](https://tc39.github.io/ecma262/#prod-FunctionDeclaration)
 *
 * @param parser  Parser object
 * @param context Context masks
 */
export function parseFunctionDeclaration(
    parser: Parser,
    context: Context,
    state: ModifierState = ModifierState.None
): ESTree.FunctionDeclaration {
    const pos = getLocation(parser);
    expect(parser, context, Token.FunctionKeyword);
    if (consume(parser, context, Token.Multiply)) state |= ModifierState.Generator;
    let id: ESTree.Identifier | null = null;
    if (parser.token !== Token.LeftParen) {
        id = parseBindingIdentifier(parser, context);
    } else if (!(context & Context.RequireIdentifier)) recordErrors(parser, context, Errors.UnNamedFunctionDecl);
    context = swapContext(context, state);
    const { params, body } = parseFormalListAndBody(parser, context);
    return finishNode(parser, context, pos, {
        type: 'FunctionDeclaration',
        body,
        params,
        async: !!(state & ModifierState.Async),
        generator: !!(state & ModifierState.Generator),
        expression: false,
        id
    });
}

/**
 * VariableDeclaration :
 *   BindingIdentifier Initializeropt
 *   BindingPattern Initializer
 *
 * VariableDeclarationNoIn :
 *   BindingIdentifier InitializerNoInopt
 *   BindingPattern InitializerNoIn
 *
 *
 * @see [Link](https://tc39.github.io/ecma262/#prod-VariableDeclaration)
 *
 * @param parser  Parser object
 * @param context Context masks
 */
export function parseVariableDeclaration(
    parser: Parser,
    context: Context,
    id: any,
    init: any
): ESTree.VariableDeclarator {
    const pos = getLocation(parser);
    return finishNode(parser, context, pos, {
        type: 'VariableDeclarator',
        init,
        id,
    });
}

export function parseVariableDeclarationList(
    parser: Parser,
    context: Context,
    type: BindingType,
    origin: BindingOrigin
): any {
    const list: ESTree.VariableDeclarator[] = [];
    parseDelimitedBindingList(parser, context, type, origin, list);
    return list;
}
