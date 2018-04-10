import * as ESTree from '../estree';
import { Token } from '../token';
import {  Options, Delegate, Location, Parser } from '../types';
import { parseStatementListItem } from './statements';
import { parseModuleItemList } from './module';
import {
    Context,
    Flags,
    nextToken,
    isPrologueDirective,
    parseDirective
} from '../utilities';

/**
 * Creates the parser object
 * 
 * @param source The source coode to parser
 * @param sourceFile Optional source file info to be attached in every node
 * @param delegate  Optional callback function to be invoked for each syntax node (as the node is constructed)
 */
export function createParserObj(source: string, sourceFile: string | void, delegate: Delegate | void): Parser {
    return {
        // The source code to parse
        source: source,
        // Current position
        index: 0,
        // Current line
        line: 1,
        // Current column
        column: 0,
        // Start position  before current token
        startIndex: 0,
        // Start position column before current token
        startColumn: 0,
        // Start position line before current token
        startLine: 1,
        // End position after parsing after current token
        lastIndex: 0,
        // End column position after current token
        lastColumn: 0,
        // End line position after current token
        lastLine: 0,
        // Pending cover grammar errors
        pendingExpressionError: undefined,
        // Mutable parser flags. Allows destructuring by default.
        flags: Flags.AllowDestructuring,
        // The tokens
        token: Token.EndOfSource,
        tokenRaw: '',
        lastValue: 0,
        comments: [],
        sourceFile: sourceFile,
        tokenRegExp: undefined,
        tokenValue: undefined,
        labelSet: undefined,
        errorLocation: undefined,
        delegate: delegate,
        errors: [],
    }
}

/**
 * Creating the parser
 * 
 * @param source The source coode to parser
 * @param options The parser options
 * @param context Context masks
 */

export function parse(source: string, options: Options | void, context: Context): ESTree.Program {

    let sourceFile: string = '';
    let delegate;

    if (!!options) {
        if (options.next) context |= Context.OptionsNext;
        if (options.jsx) context |= Context.OptionsJSX;
        if (options.ranges) context |= Context.OptionsRanges;
        if (options.loc) context |= Context.OptionsLoc;
        if (options.raw) context |= Context.OptionsRaw;
        if (options.delegate) context |= Context.OptionsDelegate;
        if (options.globalReturn) context |= Context.OptionsGlobalReturn;
        if (options.globalAwait) context |= Context.OptionsGlobalAwait;
        if (options.skipShebang) context |= Context.OptionsShebang;
        if (options.rawIdentifier) context |= Context.OptionsRawidentifiers;
        if (options.tolerant) context |= Context.OptionsTolerant;
        if (!!options.source) sourceFile = options.source;
        if (!!options.comments) context |= Context.OptionsComments;

        if (options.impliedStrict) context |= Context.OptionsImpliedStrict

        delegate = (typeof options.delegate === 'function') ? options.delegate : undefined;

        if (delegate) context |= Context.OptionsDelegate;
    }

    const parser = createParserObj(source, sourceFile, delegate);

    const body = context & Context.Module ? parseModuleItemList(parser, context) : parseStatementList(parser, context);

    const node: ESTree.Program = {
        type: 'Program',
        sourceType: context & Context.Module ? 'module' : 'script',
        body,
    };

    if (context & Context.OptionsRanges) {
        node.start = 0;
        node.end = source.length;
    }

    if (context & Context.OptionsLoc) {

        node.loc = {
            start: {
                line: 1,
                column: 0,
            },
            end: {
                line: parser.line,
                column: parser.column
            }
        };

        if (sourceFile) {
            node.loc.source = sourceFile;
        }
    }

    if (context & Context.OptionsComments) {
        node.comments = parser.comments;
    }

    if (context & Context.OptionsTolerant) {
        node.errors = parser.errors;
    }

    return node;
}

/**
 * Parse statement list
 *
 * @see [Link](https://tc39.github.io/ecma262/#prod-StatementList)
 *
 * @param {Parser} Parser instance
 * @param {context} Context masks
 */

export function parseStatementList(parser: Parser, context: Context): ESTree.Statement[] {
    const statements: ESTree.Statement[] = [];

    nextToken(parser, context);

    while (parser.token === Token.StringLiteral) {
        const item: ESTree.Statement = parseDirective(parser, context);
        statements.push(item);

        if (!isPrologueDirective(item)) break;

        if (item.expression.value === 'use strict') {

            context |= Context.Strict;
        }
    }
    while (parser.token !== Token.EndOfSource) {
        statements.push(parseStatementListItem(parser, context));
    }

    return statements;
}