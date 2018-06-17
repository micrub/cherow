import * as t from 'assert';
import { pass, fail } from '../../test-utils';
import { Context } from '../../../src/common';
import { parseSource } from '../../../src/parser/parser'

describe('Statements - Label', () => {

  describe('Failure', () => {

    const invalidSyntax = [
      `do { test262: { continue test262;} } while (false)`,
      'label: async function f() {}',
      `label: async function* g() {}`,
      `label: class C {}`,
      `label: const x = null;`,
      'yi\\u0065ld: 1;',
      //'aw\\u0061it: 1;',
      'while (false) class C {}',
      'while (false) let x = 1;',
      'while (false) async function f() {}',
      'while 0 break;',
      'while true break;',
      'while "hood" break;',
      'while ( false ) Label: continue Label;',
      `while '' break;`,
      `"use strict"; label: function g() {}`,
      `label: let x;`,
  ];


  for (const arg of invalidSyntax) {
      it(`${arg}`, () => {
          t.throws(() => {
              parseSource(`${arg}`, undefined, Context.Empty);
          });
      });
  }

      fail('label: async;', Context.Strict, {
           source: 'label: async;',
      });
  });

  describe('Pass', () => {

      pass(`L: let\nx`, Context.OptionsRanges | Context.OptionsLoc | Context.OptionsRaw, {
          source: `L: let\nx`,
          expected: {
              body: [{
                      body: {
                          end: 6,
                          expression: {
                              end: 6,
                              loc: {
                                  end: {
                                      column: 6,
                                      line: 1,
                                  },
                                  start: {
                                      column: 3,
                                      line: 1,
                                  }
                              },
                              name: 'let',
                              start: 3,
                              type: 'Identifier'
                          },
                          loc: {
                              end: {
                                  column: 6,
                                  line: 1,
                              },
                              start: {
                                  column: 3,
                                  line: 1,
                              }
                          },
                          start: 3,
                          type: 'ExpressionStatement'
                      },
                      end: 6,
                      label: {
                          end: 1,
                          loc: {
                              end: {
                                  column: 1,
                                  line: 1,
                              },
                              start: {
                                  column: 0,
                                  line: 1,
                              }
                          },
                          name: 'L',
                          start: 0,
                          type: 'Identifier'
                      },
                      loc: {
                          end: {
                              column: 6,
                              line: 1,
                          },
                          start: {
                              column: 0,
                              line: 1,
                          },
                      },
                      start: 0,
                      type: 'LabeledStatement',
                  },
                  {
                      end: 8,
                      expression: {
                          end: 8,
                          loc: {
                              end: {
                                  column: 1,
                                  line: 2,
                              },
                              start: {
                                  column: 0,
                                  line: 2,
                              },
                          },
                          name: 'x',
                          start: 7,
                          type: 'Identifier',
                      },
                      loc: {
                          end: {
                              column: 1,
                              line: 2,
                          },
                          start: {
                              column: 0,
                              line: 2,
                          }
                      },
                      start: 7,
                      type: 'ExpressionStatement',
                  },
              ],
              end: 8,
              loc: {
                  end: {
                      column: 1,
                      line: 2
                  },
                  start: {
                      column: 0,
                      line: 1,
                  },
              },
              sourceType: 'script',
              start: 0,
              type: 'Program'
          }
      });


      // Only allowed in sloppy mode (AnnexB)
      pass('label: function() {}', Context.Empty, {
          source: 'label: function a() {}',
          expected: {
              "type": "Program",
              "sourceType": "script",
              "body": [{
                  "type": "LabeledStatement",
                  "label": {
                      "type": "Identifier",
                      "name": "label"
                  },
                  "body": {
                      "type": "FunctionDeclaration",
                      "params": [],
                      "body": {
                          "type": "BlockStatement",
                          "body": []
                      },
                      "async": false,
                      "generator": false,
                      "expression": false,
                      "id": {
                          "type": "Identifier",
                          "name": "a"
                      }
                  }
              }]
          }
      });

      pass('foo: bar;', Context.Empty, {
          source: 'foo: bar;',
          expected: {
              "type": "Program",
              "sourceType": "script",
              "body": [{
                  "type": "LabeledStatement",
                  "label": {
                      "type": "Identifier",
                      "name": "foo"
                  },
                  "body": {
                      "type": "ExpressionStatement",
                      "expression": {
                          "type": "Identifier",
                          "name": "bar"
                      }
                  }
              }]
          }
      });

      pass(`start: while (true) break start`, Context.OptionsRanges | Context.OptionsLoc | Context.OptionsRaw, {
          source: `start: while (true) break start`,
          expected: {
              type: 'Program',
              start: 0,
              end: 31,
              loc: {
                  start: {
                      line: 1,
                      column: 0
                  },
                  end: {
                      line: 1,
                      column: 31
                  }
              },
              body: [{
                  type: 'LabeledStatement',
                  start: 0,
                  end: 31,
                  loc: {
                      start: {
                          line: 1,
                          column: 0
                      },
                      end: {
                          line: 1,
                          column: 31
                      }
                  },
                  body: {
                      type: 'WhileStatement',
                      start: 7,
                      end: 31,
                      loc: {
                          start: {
                              line: 1,
                              column: 7
                          },
                          end: {
                              line: 1,
                              column: 31
                          }
                      },
                      test: {
                          type: 'Literal',
                          start: 14,
                          end: 18,
                          loc: {
                              start: {
                                  line: 1,
                                  column: 14
                              },
                              end: {
                                  line: 1,
                                  column: 18
                              }
                          },
                          value: true,
                      },
                      body: {
                          type: 'BreakStatement',
                          start: 20,
                          end: 31,
                          loc: {
                              start: {
                                  line: 1,
                                  column: 20
                              },
                              end: {
                                  line: 1,
                                  column: 31
                              }
                          },
                          label: {
                              type: 'Identifier',
                              start: 26,
                              end: 31,
                              loc: {
                                  start: {
                                      line: 1,
                                      column: 26
                                  },
                                  end: {
                                      line: 1,
                                      column: 31
                                  }
                              },
                              name: 'start'
                          }
                      }
                  },
                  label: {
                      type: 'Identifier',
                      start: 0,
                      end: 5,
                      loc: {
                          start: {
                              line: 1,
                              column: 0
                          },
                          end: {
                              line: 1,
                              column: 5
                          }
                      },
                      name: 'start'
                  }
              }],
              sourceType: 'script'
          }
      });

      pass(`__proto__: test`, Context.OptionsRanges | Context.OptionsLoc | Context.OptionsRaw, {
          source: `__proto__: test`,
          expected: {
              type: 'Program',
              start: 0,
              end: 15,
              loc: {
                  start: {
                      line: 1,
                      column: 0
                  },
                  end: {
                      line: 1,
                      column: 15
                  }
              },
              body: [{
                  type: 'LabeledStatement',
                  start: 0,
                  end: 15,
                  loc: {
                      start: {
                          line: 1,
                          column: 0
                      },
                      end: {
                          line: 1,
                          column: 15
                      }
                  },
                  body: {
                      type: 'ExpressionStatement',
                      start: 11,
                      end: 15,
                      loc: {
                          start: {
                              line: 1,
                              column: 11
                          },
                          end: {
                              line: 1,
                              column: 15
                          }
                      },
                      expression: {
                          type: 'Identifier',
                          start: 11,
                          end: 15,
                          loc: {
                              start: {
                                  line: 1,
                                  column: 11
                              },
                              end: {
                                  line: 1,
                                  column: 15
                              }
                          },
                          name: 'test'
                      }
                  },
                  label: {
                      type: 'Identifier',
                      start: 0,
                      end: 9,
                      loc: {
                          start: {
                              line: 1,
                              column: 0
                          },
                          end: {
                              line: 1,
                              column: 9
                          }
                      },
                      name: '__proto__'
                  }
              }],
              sourceType: 'script'
          }
      });

      pass(`__proto__: while (true) { break __proto__; }`, Context.OptionsRanges | Context.OptionsLoc | Context.OptionsRaw, {
          source: `__proto__: while (true) { break __proto__; }`,
          expected: {
              type: 'Program',
              start: 0,
              end: 44,
              loc: {
                  start: {
                      line: 1,
                      column: 0
                  },
                  end: {
                      line: 1,
                      column: 44
                  }
              },
              body: [{
                  type: 'LabeledStatement',
                  start: 0,
                  end: 44,
                  loc: {
                      start: {
                          line: 1,
                          column: 0
                      },
                      end: {
                          line: 1,
                          column: 44
                      }
                  },
                  body: {
                      type: 'WhileStatement',
                      start: 11,
                      end: 44,
                      loc: {
                          start: {
                              line: 1,
                              column: 11
                          },
                          end: {
                              line: 1,
                              column: 44
                          }
                      },
                      test: {
                          type: 'Literal',
                          start: 18,
                          end: 22,
                          loc: {
                              start: {
                                  line: 1,
                                  column: 18
                              },
                              end: {
                                  line: 1,
                                  column: 22
                              }
                          },
                          value: true,
                      },
                      body: {
                          type: 'BlockStatement',
                          start: 24,
                          end: 44,
                          loc: {
                              start: {
                                  line: 1,
                                  column: 24
                              },
                              end: {
                                  line: 1,
                                  column: 44
                              }
                          },
                          body: [{
                              type: 'BreakStatement',
                              start: 26,
                              end: 42,
                              loc: {
                                  start: {
                                      line: 1,
                                      column: 26
                                  },
                                  end: {
                                      line: 1,
                                      column: 42
                                  }
                              },
                              label: {
                                  type: 'Identifier',
                                  start: 32,
                                  end: 41,
                                  loc: {
                                      start: {
                                          line: 1,
                                          column: 32
                                      },
                                      end: {
                                          line: 1,
                                          column: 41
                                      }
                                  },
                                  name: '__proto__'
                              }
                          }]
                      }
                  },
                  label: {
                      type: 'Identifier',
                      start: 0,
                      end: 9,
                      loc: {
                          start: {
                              line: 1,
                              column: 0
                          },
                          end: {
                              line: 1,
                              column: 9
                          }
                      },
                      name: '__proto__'
                  }
              }],
              sourceType: 'script'
          }
      });

      // ECMA allows "eval" or "arguments" as labels even in strict mode.
      pass(`"use strict"; arguments: while (true) break arguments`, Context.OptionsRanges | Context.OptionsLoc | Context.OptionsRaw, {
          source: `"use strict"; arguments: while (true) break arguments`,
          expected: {
              type: 'Program',
              sourceType: 'script',
              body: [{
                      type: 'ExpressionStatement',
                      directive: 'use strict',
                      expression: {
                          type: 'Literal',
                          value: 'use strict',
                          start: 0,
                          end: 12,
                          loc: {
                              start: {
                                  line: 1,
                                  column: 0
                              },
                              end: {
                                  line: 1,
                                  column: 12
                              }
                          },
                          raw: '"use strict"',
                      },
                      start: 0,
                      end: 13,
                      loc: {
                          start: {
                              line: 1,
                              column: 0
                          },
                          end: {
                              line: 1,
                              column: 13
                          }
                      }
                  },
                  {
                      type: 'LabeledStatement',
                      label: {
                          type: 'Identifier',
                          name: 'arguments',
                          start: 14,
                          end: 23,
                          loc: {
                              start: {
                                  line: 1,
                                  column: 14
                              },
                              end: {
                                  line: 1,
                                  column: 23
                              }
                          }
                      },
                      body: {
                          type: 'WhileStatement',
                          test: {
                              type: 'Literal',
                              value: true,
                              start: 32,
                              end: 36,
                              loc: {
                                  start: {
                                      line: 1,
                                      column: 32
                                  },
                                  end: {
                                      line: 1,
                                      column: 36
                                  }
                              },
                          },
                          body: {
                              type: 'BreakStatement',
                              label: {
                                  type: 'Identifier',
                                  name: 'arguments',
                                  start: 44,
                                  end: 53,
                                  loc: {
                                      start: {
                                          line: 1,
                                          column: 44
                                      },
                                      end: {
                                          line: 1,
                                          column: 53
                                      }
                                  }
                              },
                              start: 38,
                              end: 53,
                              loc: {
                                  start: {
                                      line: 1,
                                      column: 38
                                  },
                                  end: {
                                      line: 1,
                                      column: 53
                                  }
                              }
                          },
                          start: 25,
                          end: 53,
                          loc: {
                              start: {
                                  line: 1,
                                  column: 25
                              },
                              end: {
                                  line: 1,
                                  column: 53
                              }
                          }
                      },
                      start: 14,
                      end: 53,
                      loc: {
                          start: {
                              line: 1,
                              column: 14
                          },
                          end: {
                              line: 1,
                              column: 53
                          }
                      }
                  }
              ],
              start: 0,
              end: 53,
              loc: {
                  start: {
                      line: 1,
                      column: 0
                  },
                  end: {
                      line: 1,
                      column: 53
                  }
              }
          }
      });

      pass(`a: function foo() {}`, Context.OptionsRanges | Context.OptionsLoc | Context.OptionsRaw, {
          source: `a: function foo() {}`,
          expected: {
              type: 'Program',
              start: 0,
              end: 20,
              loc: {
                  start: {
                      line: 1,
                      column: 0
                  },
                  end: {
                      line: 1,
                      column: 20
                  }
              },
              body: [{
                  type: 'LabeledStatement',
                  start: 0,
                  end: 20,
                  loc: {
                      start: {
                          line: 1,
                          column: 0
                      },
                      end: {
                          line: 1,
                          column: 20
                      }
                  },
                  body: {
                      type: 'FunctionDeclaration',
                      start: 3,
                      end: 20,
                      loc: {
                          start: {
                              line: 1,
                              column: 3
                          },
                          end: {
                              line: 1,
                              column: 20
                          }
                      },
                      id: {
                          type: 'Identifier',
                          start: 12,
                          end: 15,
                          loc: {
                              start: {
                                  line: 1,
                                  column: 12
                              },
                              end: {
                                  line: 1,
                                  column: 15
                              }
                          },
                          name: 'foo'
                      },
                      generator: false,
                      expression: false,
                      async: false,
                      params: [],
                      body: {
                          type: 'BlockStatement',
                          start: 18,
                          end: 20,
                          loc: {
                              start: {
                                  line: 1,
                                  column: 18
                              },
                              end: {
                                  line: 1,
                                  column: 20
                              }
                          },
                          body: []
                      }
                  },
                  label: {
                      type: 'Identifier',
                      start: 0,
                      end: 1,
                      loc: {
                          start: {
                              line: 1,
                              column: 0
                          },
                          end: {
                              line: 1,
                              column: 1
                          }
                      },
                      name: 'a'
                  }
              }],
              sourceType: 'script'
          }
      });

      pass(`a:{break a;}`, Context.OptionsRanges | Context.OptionsLoc | Context.OptionsRaw, {
          source: `a:{break a;}`,
          expected: {
              type: 'Program',
              start: 0,
              end: 12,
              loc: {
                  start: {
                      line: 1,
                      column: 0
                  },
                  end: {
                      line: 1,
                      column: 12
                  }
              },
              body: [{
                  type: 'LabeledStatement',
                  start: 0,
                  end: 12,
                  loc: {
                      start: {
                          line: 1,
                          column: 0
                      },
                      end: {
                          line: 1,
                          column: 12
                      }
                  },
                  body: {
                      type: 'BlockStatement',
                      start: 2,
                      end: 12,
                      loc: {
                          start: {
                              line: 1,
                              column: 2
                          },
                          end: {
                              line: 1,
                              column: 12
                          }
                      },
                      body: [{
                          type: 'BreakStatement',
                          start: 3,
                          end: 11,
                          loc: {
                              start: {
                                  line: 1,
                                  column: 3
                              },
                              end: {
                                  line: 1,
                                  column: 11
                              }
                          },
                          label: {
                              type: 'Identifier',
                              start: 9,
                              end: 10,
                              loc: {
                                  start: {
                                      line: 1,
                                      column: 9
                                  },
                                  end: {
                                      line: 1,
                                      column: 10
                                  }
                              },
                              name: 'a'
                          }
                      }]
                  },
                  label: {
                      type: 'Identifier',
                      start: 0,
                      end: 1,
                      loc: {
                          start: {
                              line: 1,
                              column: 0
                          },
                          end: {
                              line: 1,
                              column: 1
                          }
                      },
                      name: 'a'
                  }
              }],
              sourceType: 'script'
          }
      });

  });
});
