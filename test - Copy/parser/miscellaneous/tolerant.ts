import { parseScript } from '../../../src/cherow';
import * as t from 'assert';

describe('Miscellaneous - Tolerant mode', () => {

    const tolerantSyntax = [
        '/* /* if(foo) {}',
        '/* var fo0 = 1;',
        '"use strict"; delete x',
        '"use strict"; var arguments;',
        '"use strict"; function arguments() {};',
        '"use strict"; function interface() {};',
        '"use strict"; (function eval() {});',
        '"use strict"; (function arguments() {});',
        '"use strict"; (function interface() {});',
        '"use strict"; function f(foo,  foo) {};',
        '"use strict"; (function f(eval) {});',
        '"use strict"; (function f(arguments) {});',
        '"use strict"; x = { set f(eval) {} }',
        '"\\1"; "use strict";',
        'function hello() { "octal directive\\1"; "use strict"; }',
        'foo("bar") = baz',
        '1 = 2',
        '--4',
        'var x = /[P QR]/\g',
        '3++',
        '"use strict"; ++arguments;',
        '"use strict"; var eval;',
        '(function () { "use strict"; 021 }())',
        '(function () { "use strict"; with (i); }())',
        'return',
        '/* foo ',
        'var foo = 1; /* ',
        '"use strict"; let eval;',
        '/* ',
        `'use strict'; delete ((a));`,
        `function* a(){ function* b(c = yield d){} }`,
        `!{ set a(eval){ 'use strict'; } };`,
        `(([]) => {"use strict";})`,
        `function a([]){"use strict";}`,
        `function* a(){ function* b(c = d + b(yield)){} }`,
        `function* g(){ function* f([a = yield]){} }`,
        `function* g(){ function* f(a = yield){} }`,
        `class A extends B { constructor() { function f(){ super(); } } }`,
        `function f(a = super()){}`,
        `var i\\u006E;`,
        `function* g(){ (a = yield* b) => 0; }`,
        `function* g(){ ({a = yield}) => 0; }`,
        `for(a in b) d: function c(){}`,
        `class A extends B { a() { function f(){ super.b(); } } }`,
        `[...new a] = 0;`,
        '({ a = 0 });',
        '(...a)',
        '(a, ...b)',
        '(((...a)))',
        '(((a, ...b)))',
        '0++',
        '0--',
        '++0',
        '--0',
        '({a: 0} = 0);',
        '({get a(){}} = 0)',
        '({set a(b){}} = 0)',
        '({a(b){}} = 0)',
        '[0] = 0;',
        '0 = 0;',
        '({a}) = 0;',
        '([a]) = 0;',
        '({a} += 0);',
        '[a] *= 0;',
        '0 /= 0;',
        '[...{a: 0}] = 0;',
        '[...[0]] = 0;',
        '[...0] = 0;',
        '[...new a] = 0;',
        'for({a: 0} in 0);',
        'for([0] in 0);',
        'for({a: 0} of 0);',
        'for([0] of 0);',
        'for(0 in 0);',
        'for(0 of 0);',
        'for(({a: 0}) in 0);',
        'for(([0]) in 0);',
        'for(({a: 0}) of 0);',
        'for(([0]) of 0);',
        'for((0) in 0);',
        'for((0) of 0);',
        '"use strict"; var eval;',
        '"use strict"; let [eval] = 0;',
        '"use strict"; const {a: eval} = 0;',
        '"use strict"; function f(eval){}',
        '"use strict"; !function f(eval){}',
        'function f(eval) { "use strict";}',
        'function *f(eval) { "use strict";}',
        '!function *f(eval) { "use strict";}',
        'class A { f(eval){} };',
        'class A { *f(eval){} };',
        'class A { set f(eval){} };',
        '"use strict"; +let;',
        'var eval',
        'var arguments',
        'var foo, eval;',
        'var foo, arguments;',
        'try { } catch (eval) { }',
        'try { } catch (arguments) { }',
        'function eval() { }',
        'function arguments() { }',
        'function foo(eval) { }',
        'function foo(arguments) { }',
        'function foo(bar, eval) { }',
        'function foo(bar, arguments) { }',
        'eval => icefapper', // evil?
        '(eval) => { }',
        '(eval) => { }',
        '(arguments) => { }',
        '(foo, eval) => { }',
        '(foo, arguments) => { }',
        'eval = 1;',
        'arguments = 1;',
        '[ arguments = 0 ]',
        'var foo = eval = 1;',
        'var foo = arguments = 1;',
        '++eval;',
        '++arguments;',
        'eval++;',
        'arguments++;',
        '--arguments;',
        '[ ...(eval = 0) ]',
        '{ eval = 0 }',
        '{ arguments = 0 }',
        '[ eval = 0 ]',
        '[ arguments = 0 ]',
        '[ (eval = 0) ]',
        '[ (arguments = 0) ]',
        '[ (eval) = 0 ]',
        '[ (arguments) = 0 ]',
        '[ ...(arguments = 0) ]',
        '[ ...(eval) = 0 ]',
        '[ ...(arguments) = 0 ]',
        '[x] += 0',
        '[...x, ] = 0;',
        '[, x, ...y,] = 0',
        '[...x, ...y] = 0',
        '[...x, y] = 0',
        '[0,{a=0}] = 0',
        '({a = 0});',
        '({a} += 0);',
        '({a,,} = 0)',
        'var y; ({x:y--} = {});',
        'var y; ({x:y+1} = {});',
        'let x; ([...{x} = {}] = [{}]);',
        'for(const a = 0;;) label: function f(){}',
        'for(let a;;) label: function f(){}',
        'for(a in b) label: function f(){}',
        'for(var a in b) label: function f(){}',
        'for(let a in b) label: function f(){}',
        'for(const a in b) label: function f(){}',
        'for(a of b) label: function f(){}',
        'for(var a of b) label: function f(){}',
        'for(let a of b) label: function f(){}',
        'for(const a of b) label: function f(){}',
        'for(;;) labelA: labelB: labelC: function f(){}',
        'for(let let in 0);',
        'for(const let in 0);',
        'for(let let of 0);',
        'for(const let of 0);',
        '{ continue; }',
        'continue',
        'if(0) continue;',
        'while(0) !function(){ continue; };',
        'while(0) { function f(){ continue; } }',
        'label: continue label;',
        'label: { continue label; }',
        'label: if(0) continue label;',
        'label: while(0) !function(){ continue label; };',
        'label: while(0) { function f(){ continue label; } }',
        '(new.target) = 1',
        '{ x : y * 2 }',
        '{ x: y() }',
        '{ this }',
        '{ x: this }',
        '{ x: this = 1 }',
        '{ super }',
        '{ x: super }',
        '{ x: super = 1 }',
        '{ new.target }',
        '{ x: new.target }',
        '[x--]',
    ];

    for (const arg of tolerantSyntax) {

        it(`${arg}`, () => {
            t.doesNotThrow(() => {
                parseScript(`${arg}`, {
                    tolerant: true
                });
            });
        });

    }
});