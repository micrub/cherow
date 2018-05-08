import { Parser, Location, Token, ESTree, Context, ObjectState } from 'cherow';
export declare function parseExpression(parser: Parser, context: Context): ESTree.Expression;
export declare function parseSequenceExpression(parser: Parser, context: Context, left: ESTree.Expression, pos: Location): ESTree.SequenceExpression;
export declare function parseAssignmentExpression(parser: Parser, context: Context): ESTree.Expression;
export declare function parseRestElement(parser: Parser, context: Context, args?: string[]): any;
export declare function parseLeftHandSideExpression(parser: Parser, context: Context, pos: Location): ESTree.Expression;
export declare function parsePrimaryExpression(parser: Parser, context: Context): any;
export declare function parseIdentifier(parser: Parser, context: Context): ESTree.Identifier;
export declare function parseLiteral(parser: Parser, context: Context): ESTree.Literal;
export declare function parseBigIntLiteral(parser: Parser, context: Context): ESTree.Literal;
export declare function parseIdentifierName(parser: Parser, context: Context, t: Token): ESTree.Identifier;
export declare function parseFunctionExpression(parser: Parser, context: Context): ESTree.FunctionExpression;
export declare function parseAsyncFunctionOrAsyncGeneratorExpression(parser: Parser, context: Context): ESTree.FunctionExpression;
export declare function parsePropertyName(parser: Parser, context: Context): ESTree.Expression;
export declare function parseObjectLiteral(parser: Parser, context: Context): ESTree.ObjectExpression;
export declare function parseFormalListAndBody(parser: Parser, context: Context, state: ObjectState): {
    params: ESTree.Identifier[];
    body: ESTree.BlockStatement;
};
export declare function parseFunctionBody(parser: Parser, context: Context, params: any): ESTree.BlockStatement;
export declare function parseFormalParameters(parser: Parser, context: Context, state: ObjectState): {
    params: ESTree.Identifier[];
    args: string[];
};
export declare function parseFormalParameterList(parser: Parser, context: Context, args: string[]): any;
export declare function parseClassBodyAndElementList(parser: Parser, context: Context, state: ObjectState): ESTree.ClassBody;
export declare function parseClassElement(parser: Parser, context: Context, state: ObjectState, decorators: ESTree.Decorator[]): ESTree.MethodDefinition | ESTree.FieldDefinition;
export declare function parseDecorators(parser: Parser, context: Context): ESTree.Decorator[];
