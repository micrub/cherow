import { pass, fail } from '../utils';

describe('Miscellaneous - AnnexB', () => {

    describe('Numeric (B1.1)', () => {

        pass(`004`, {
            source: `004`,
            loc: true,
            ranges: true,
            raw: true,
            expected: {
                "type": "Program",
                "body": [
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "Literal",
                            "value": 4,
                            "start": 0,
                            "end": 3,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 0
                                },
                                "end": {
                                    "line": 1,
                                    "column": 3
                                }
                            },
                            "raw": "004"
                        },
                        "start": 0,
                        "end": 3,
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 0
                            },
                            "end": {
                                "line": 1,
                                "column": 3
                            }
                        }
                    }
                ],
                "sourceType": "script",
                "start": 0,
                "end": 3,
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 0
                    },
                    "end": {
                        "line": 1,
                        "column": 3
                    }
                }
            }
        });

        pass(`076`, {
            source: `076`,
            loc: true,
            ranges: true,
            raw: true,
            expected: {
                "type": "Program",
                "body": [
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "Literal",
                            "value": 62,
                            "start": 0,
                            "end": 3,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 0
                                },
                                "end": {
                                    "line": 1,
                                    "column": 3
                                }
                            },
                            "raw": "076"
                        },
                        "start": 0,
                        "end": 3,
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 0
                            },
                            "end": {
                                "line": 1,
                                "column": 3
                            }
                        }
                    }
                ],
                "sourceType": "script",
                "start": 0,
                "end": 3,
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 0
                    },
                    "end": {
                        "line": 1,
                        "column": 3
                    }
                }
            }
        });
                pass(`02`, {
                    source: `02`,
                    loc: true,
                    ranges: true,
                    raw: true,
                    expected: {
                        "type": "Program",
                        "body": [
                            {
                                "type": "ExpressionStatement",
                                "expression": {
                                    "type": "Literal",
                                    "value": 2,
                                    "start": 0,
                                    "end": 2,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 0
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 2
                                        }
                                    },
                                    "raw": "02"
                                },
                                "start": 0,
                                "end": 2,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 0
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 2
                                    }
                                }
                            }
                        ],
                        "sourceType": "script",
                        "start": 0,
                        "end": 2,
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 0
                            },
                            "end": {
                                "line": 1,
                                "column": 2
                            }
                        }
                    }
                });

            });

    describe('Comments (B3.1)', () => {

        pass(`multiline HTML close`, {
            source: `/*
            */--> foo`,
            loc: true,
            ranges: true,
            raw: true,
            expected: {
                  "body": [],
                  "end": 24,
                  "loc": {
                    "end": {
                      "column": 21,
                      "line": 2,
                    },
                    "start": {
                      "column": 0,
                      "line": 1,
                    }
                  },
                  "sourceType": "script",
                  "start": 0,
                  "type": "Program"
                }
        });

        pass(`multiline HTML close ASI`, {
            source: `var foo = [23]
            -->[0];`,
            loc: true,
            ranges: true,
            raw: true,
            expected: {
                "type": "Program",
                "body": [
                    {
                        "type": "VariableDeclaration",
                        "declarations": [
                            {
                                "type": "VariableDeclarator",
                                "init": {
                                    "type": "ArrayExpression",
                                    "elements": [
                                        {
                                            "type": "Literal",
                                            "value": 23,
                                            "start": 11,
                                            "end": 13,
                                            "loc": {
                                                "start": {
                                                    "line": 1,
                                                    "column": 11
                                                },
                                                "end": {
                                                    "line": 1,
                                                    "column": 13
                                                }
                                            },
                                            "raw": "23"
                                        }
                                    ],
                                    "start": 10,
                                    "end": 14,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 10
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 14
                                        }
                                    }
                                },
                                "id": {
                                    "type": "Identifier",
                                    "name": "foo",
                                    "start": 4,
                                    "end": 7,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 4
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 7
                                        }
                                    }
                                },
                                "start": 4,
                                "end": 14,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 4
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 14
                                    }
                                }
                            }
                        ],
                        "kind": "var",
                        "start": 0,
                        "end": 14,
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 0
                            },
                            "end": {
                                "line": 1,
                                "column": 14
                            }
                        }
                    }
                ],
                "sourceType": "script",
                "start": 0,
                "end": 34,
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 0
                    },
                    "end": {
                        "line": 2,
                        "column": 19
                    }
                }
            }
        });

        pass(`single line HTML open`, {
            source: `var x = 0;
            x = -1 <!--x;`,
            loc: true,
            ranges: true,
            raw: true,
            expected: {
                "type": "Program",
                "body": [
                    {
                        "type": "VariableDeclaration",
                        "declarations": [
                            {
                                "type": "VariableDeclarator",
                                "init": {
                                    "type": "Literal",
                                    "value": 0,
                                    "start": 8,
                                    "end": 9,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 8
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 9
                                        }
                                    },
                                    "raw": "0"
                                },
                                "id": {
                                    "type": "Identifier",
                                    "name": "x",
                                    "start": 4,
                                    "end": 5,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 4
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 5
                                        }
                                    }
                                },
                                "start": 4,
                                "end": 9,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 4
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 9
                                    }
                                }
                            }
                        ],
                        "kind": "var",
                        "start": 0,
                        "end": 10,
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 0
                            },
                            "end": {
                                "line": 1,
                                "column": 10
                            }
                        }
                    },
                    {
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "AssignmentExpression",
                            "left": {
                                "type": "Identifier",
                                "name": "x",
                                "start": 23,
                                "end": 24,
                                "loc": {
                                    "start": {
                                        "line": 2,
                                        "column": 12
                                    },
                                    "end": {
                                        "line": 2,
                                        "column": 13
                                    }
                                }
                            },
                            "operator": "=",
                            "right": {
                                "type": "UnaryExpression",
                                "operator": "-",
                                "argument": {
                                    "type": "Literal",
                                    "value": 1,
                                    "start": 28,
                                    "end": 29,
                                    "loc": {
                                        "start": {
                                            "line": 2,
                                            "column": 17
                                        },
                                        "end": {
                                            "line": 2,
                                            "column": 18
                                        }
                                    },
                                    "raw": "1"
                                },
                                "prefix": true,
                                "start": 27,
                                "end": 29,
                                "loc": {
                                    "start": {
                                        "line": 2,
                                        "column": 16
                                    },
                                    "end": {
                                        "line": 2,
                                        "column": 18
                                    }
                                }
                            },
                            "start": 23,
                            "end": 29,
                            "loc": {
                                "start": {
                                    "line": 2,
                                    "column": 12
                                },
                                "end": {
                                    "line": 2,
                                    "column": 18
                                }
                            }
                        },
                        "start": 23,
                        "end": 29,
                        "loc": {
                            "start": {
                                "line": 2,
                                "column": 12
                            },
                            "end": {
                                "line": 2,
                                "column": 18
                            }
                        }
                    }
                ],
                "sourceType": "script",
                "start": 0,
                "end": 36,
                "loc": {
                    "start": {
                        "line": 1,
                        "column": 0
                    },
                    "end": {
                        "line": 2,
                        "column": 25
                    }
                }
            }
        });        
                pass(`simgle line HTML close`, {
                    source: '-->the comment extends to these characters',
                    loc: true,
                    ranges: true,
                    raw: true,
                    expected: {
                          "body": [],
                          "end": 42,
                          "loc": {
                            "end": {
                              "column": 42,
                              "line": 1,
                            },
                            "start": {
                              "column": 0,
                              "line": 1,
                            }
                          },
                          "sourceType": "script",
                          "start": 0,
                          "type": "Program"
                        }
                });
        });
    
        describe('Function code', () => {
    
            pass(`try {  throw null; } catch (f) { if (true) function f() { return 123; } else function _f() {} }`, {
                source: 'try {  throw null; } catch (f) { if (true) function f() { return 123; } else function _f() {} }',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    "type": "Program",
                    "body": [{
                        "type": "TryStatement",
                        "block": {
                            "type": "BlockStatement",
                            "body": [{
                                "type": "ThrowStatement",
                                "argument": {
                                    "type": "Literal",
                                    "value": null,
                                    "start": 13,
                                    "end": 17,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 13
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 17
                                        }
                                    },
                                    "raw": "null"
                                },
                                "start": 7,
                                "end": 18,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 7
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 18
                                    }
                                }
                            }],
                            "start": 4,
                            "end": 20,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 4
                                },
                                "end": {
                                    "line": 1,
                                    "column": 20
                                }
                            }
                        },
                        "handler": {
                            "type": "CatchClause",
                            "param": {
                                "type": "Identifier",
                                "name": "f",
                                "start": 28,
                                "end": 29,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 28
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 29
                                    }
                                }
                            },
                            "body": {
                                "type": "BlockStatement",
                                "body": [{
                                    "type": "IfStatement",
                                    "test": {
                                        "type": "Literal",
                                        "value": true,
                                        "start": 37,
                                        "end": 41,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 37
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 41
                                            }
                                        },
                                        "raw": "true"
                                    },
                                    "alternate": {
                                        "type": "FunctionDeclaration",
                                        "params": [],
                                        "body": {
                                            "type": "BlockStatement",
                                            "body": [],
                                            "start": 91,
                                            "end": 93,
                                            "loc": {
                                                "start": {
                                                    "line": 1,
                                                    "column": 91
                                                },
                                                "end": {
                                                    "line": 1,
                                                    "column": 93
                                                }
                                            }
                                        },
                                        "async": false,
                                        "generator": false,
                                        "expression": false,
                                        "id": {
                                            "type": "Identifier",
                                            "name": "_f",
                                            "start": 86,
                                            "end": 88,
                                            "loc": {
                                                "start": {
                                                    "line": 1,
                                                    "column": 86
                                                },
                                                "end": {
                                                    "line": 1,
                                                    "column": 88
                                                }
                                            }
                                        },
                                        "start": 77,
                                        "end": 93,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 77
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 93
                                            }
                                        }
                                    },
                                    "consequent": {
                                        "type": "FunctionDeclaration",
                                        "params": [],
                                        "body": {
                                            "type": "BlockStatement",
                                            "body": [{
                                                "type": "ReturnStatement",
                                                "argument": {
                                                    "type": "Literal",
                                                    "value": 123,
                                                    "start": 65,
                                                    "end": 68,
                                                    "loc": {
                                                        "start": {
                                                            "line": 1,
                                                            "column": 65
                                                        },
                                                        "end": {
                                                            "line": 1,
                                                            "column": 68
                                                        }
                                                    },
                                                    "raw": "123"
                                                },
                                                "start": 58,
                                                "end": 69,
                                                "loc": {
                                                    "start": {
                                                        "line": 1,
                                                        "column": 58
                                                    },
                                                    "end": {
                                                        "line": 1,
                                                        "column": 69
                                                    }
                                                }
                                            }],
                                            "start": 56,
                                            "end": 71,
                                            "loc": {
                                                "start": {
                                                    "line": 1,
                                                    "column": 56
                                                },
                                                "end": {
                                                    "line": 1,
                                                    "column": 71
                                                }
                                            }
                                        },
                                        "async": false,
                                        "generator": false,
                                        "expression": false,
                                        "id": {
                                            "type": "Identifier",
                                            "name": "f",
                                            "start": 52,
                                            "end": 53,
                                            "loc": {
                                                "start": {
                                                    "line": 1,
                                                    "column": 52
                                                },
                                                "end": {
                                                    "line": 1,
                                                    "column": 53
                                                }
                                            }
                                        },
                                        "start": 43,
                                        "end": 71,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 43
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 71
                                            }
                                        }
                                    },
                                    "start": 33,
                                    "end": 93,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 33
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 93
                                        }
                                    }
                                }],
                                "start": 31,
                                "end": 95,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 31
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 95
                                    }
                                }
                            },
                            "start": 21,
                            "end": 95,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 21
                                },
                                "end": {
                                    "line": 1,
                                    "column": 95
                                }
                            }
                        },
                        "finalizer": null,
                        "start": 0,
                        "end": 95,
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 0
                            },
                            "end": {
                                "line": 1,
                                "column": 95
                            }
                        }
                    }],
                    "sourceType": "script",
                    "start": 0,
                    "end": 95,
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 0
                        },
                        "end": {
                            "line": 1,
                            "column": 95
                        }
                    }
                }
            });
    
            pass(` { let f = 123;  if (false) function _f() {} else function f() {  }  }`, {
                source: '{ let f = 123;  if (false) function _f() {} else function f() {  }  }',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    "type": "Program",
                    "body": [{
                        "type": "BlockStatement",
                        "body": [{
                                "type": "VariableDeclaration",
                                "declarations": [{
                                    "type": "VariableDeclarator",
                                    "init": {
                                        "type": "Literal",
                                        "value": 123,
                                        "start": 10,
                                        "end": 13,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 10
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 13
                                            }
                                        },
                                        "raw": "123"
                                    },
                                    "id": {
                                        "type": "Identifier",
                                        "name": "f",
                                        "start": 6,
                                        "end": 7,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 6
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 7
                                            }
                                        }
                                    },
                                    "start": 6,
                                    "end": 13,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 6
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 13
                                        }
                                    }
                                }],
                                "kind": "let",
                                "start": 2,
                                "end": 14,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 2
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 14
                                    }
                                }
                            },
                            {
                                "type": "IfStatement",
                                "test": {
                                    "type": "Literal",
                                    "value": false,
                                    "start": 20,
                                    "end": 25,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 20
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 25
                                        }
                                    },
                                    "raw": "false"
                                },
                                "alternate": {
                                    "type": "FunctionDeclaration",
                                    "params": [],
                                    "body": {
                                        "type": "BlockStatement",
                                        "body": [],
                                        "start": 62,
                                        "end": 66,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 62
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 66
                                            }
                                        }
                                    },
                                    "async": false,
                                    "generator": false,
                                    "expression": false,
                                    "id": {
                                        "type": "Identifier",
                                        "name": "f",
                                        "start": 58,
                                        "end": 59,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 58
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 59
                                            }
                                        }
                                    },
                                    "start": 49,
                                    "end": 66,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 49
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 66
                                        }
                                    }
                                },
                                "consequent": {
                                    "type": "FunctionDeclaration",
                                    "params": [],
                                    "body": {
                                        "type": "BlockStatement",
                                        "body": [],
                                        "start": 41,
                                        "end": 43,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 41
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 43
                                            }
                                        }
                                    },
                                    "async": false,
                                    "generator": false,
                                    "expression": false,
                                    "id": {
                                        "type": "Identifier",
                                        "name": "_f",
                                        "start": 36,
                                        "end": 38,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 36
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 38
                                            }
                                        }
                                    },
                                    "start": 27,
                                    "end": 43,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 27
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 43
                                        }
                                    }
                                },
                                "start": 16,
                                "end": 66,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 16
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 66
                                    }
                                }
                            }
                        ],
                        "start": 0,
                        "end": 69,
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 0
                            },
                            "end": {
                                "line": 1,
                                "column": 69
                            }
                        }
                    }],
                    "sourceType": "script",
                    "start": 0,
                    "end": 69,
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 0
                        },
                        "end": {
                            "line": 1,
                            "column": 69
                        }
                    }
                }
            });
    
            pass(` switch (0) { default:  let f;  if (true) function f() {  } else ;  }`, {
                source: 'switch (0) { default:  let f;  if (true) function f() {  } else ;  }',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    "type": "Program",
                    "body": [{
                        "type": "SwitchStatement",
                        "discriminant": {
                            "type": "Literal",
                            "value": 0,
                            "start": 8,
                            "end": 9,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 8
                                },
                                "end": {
                                    "line": 1,
                                    "column": 9
                                }
                            },
                            "raw": "0"
                        },
                        "cases": [{
                            "type": "SwitchCase",
                            "test": null,
                            "consequent": [{
                                    "type": "VariableDeclaration",
                                    "declarations": [{
                                        "type": "VariableDeclarator",
                                        "init": null,
                                        "id": {
                                            "type": "Identifier",
                                            "name": "f",
                                            "start": 27,
                                            "end": 28,
                                            "loc": {
                                                "start": {
                                                    "line": 1,
                                                    "column": 27
                                                },
                                                "end": {
                                                    "line": 1,
                                                    "column": 28
                                                }
                                            }
                                        },
                                        "start": 27,
                                        "end": 28,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 27
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 28
                                            }
                                        }
                                    }],
                                    "kind": "let",
                                    "start": 23,
                                    "end": 29,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 23
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 29
                                        }
                                    }
                                },
                                {
                                    "type": "IfStatement",
                                    "test": {
                                        "type": "Literal",
                                        "value": true,
                                        "start": 35,
                                        "end": 39,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 35
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 39
                                            }
                                        },
                                        "raw": "true"
                                    },
                                    "alternate": {
                                        "type": "EmptyStatement",
                                        "start": 64,
                                        "end": 65,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 64
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 65
                                            }
                                        }
                                    },
                                    "consequent": {
                                        "type": "FunctionDeclaration",
                                        "params": [],
                                        "body": {
                                            "type": "BlockStatement",
                                            "body": [],
                                            "start": 54,
                                            "end": 58,
                                            "loc": {
                                                "start": {
                                                    "line": 1,
                                                    "column": 54
                                                },
                                                "end": {
                                                    "line": 1,
                                                    "column": 58
                                                }
                                            }
                                        },
                                        "async": false,
                                        "generator": false,
                                        "expression": false,
                                        "id": {
                                            "type": "Identifier",
                                            "name": "f",
                                            "start": 50,
                                            "end": 51,
                                            "loc": {
                                                "start": {
                                                    "line": 1,
                                                    "column": 50
                                                },
                                                "end": {
                                                    "line": 1,
                                                    "column": 51
                                                }
                                            }
                                        },
                                        "start": 41,
                                        "end": 58,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 41
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 58
                                            }
                                        }
                                    },
                                    "start": 31,
                                    "end": 65,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 31
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 65
                                        }
                                    }
                                }
                            ],
                            "start": 13,
                            "end": 65,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 13
                                },
                                "end": {
                                    "line": 1,
                                    "column": 65
                                }
                            }
                        }],
                        "start": 0,
                        "end": 68,
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 0
                            },
                            "end": {
                                "line": 1,
                                "column": 68
                            }
                        }
                    }],
                    "sourceType": "script",
                    "start": 0,
                    "end": 68,
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 0
                        },
                        "end": {
                            "line": 1,
                            "column": 68
                        }
                    }
                }
            });
    
            pass(`var init = f;  if (true) function f() {  } else ;`, {
                source: 'var init = f;  if (true) function f() {  } else ;',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    "type": "Program",
                    "body": [{
                            "type": "VariableDeclaration",
                            "declarations": [{
                                "type": "VariableDeclarator",
                                "init": {
                                    "type": "Identifier",
                                    "name": "f",
                                    "start": 11,
                                    "end": 12,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 11
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 12
                                        }
                                    }
                                },
                                "id": {
                                    "type": "Identifier",
                                    "name": "init",
                                    "start": 4,
                                    "end": 8,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 4
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 8
                                        }
                                    }
                                },
                                "start": 4,
                                "end": 12,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 4
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 12
                                    }
                                }
                            }],
                            "kind": "var",
                            "start": 0,
                            "end": 13,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 0
                                },
                                "end": {
                                    "line": 1,
                                    "column": 13
                                }
                            }
                        },
                        {
                            "type": "IfStatement",
                            "test": {
                                "type": "Literal",
                                "value": true,
                                "start": 19,
                                "end": 23,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 19
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 23
                                    }
                                },
                                "raw": "true"
                            },
                            "alternate": {
                                "type": "EmptyStatement",
                                "start": 48,
                                "end": 49,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 48
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 49
                                    }
                                }
                            },
                            "consequent": {
                                "type": "FunctionDeclaration",
                                "params": [],
                                "body": {
                                    "type": "BlockStatement",
                                    "body": [],
                                    "start": 38,
                                    "end": 42,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 38
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 42
                                        }
                                    }
                                },
                                "async": false,
                                "generator": false,
                                "expression": false,
                                "id": {
                                    "type": "Identifier",
                                    "name": "f",
                                    "start": 34,
                                    "end": 35,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 34
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 35
                                        }
                                    }
                                },
                                "start": 25,
                                "end": 42,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 25
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 42
                                    }
                                }
                            },
                            "start": 15,
                            "end": 49,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 15
                                },
                                "end": {
                                    "line": 1,
                                    "column": 49
                                }
                            }
                        }
                    ],
                    "sourceType": "script",
                    "start": 0,
                    "end": 49,
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 0
                        },
                        "end": {
                            "line": 1,
                            "column": 49
                        }
                    }
                }
            });
    
            pass(`if (true) function f() { initialBV = f; f = 123; currentBV = f; return 'decl'; }`, {
                source: 'if (true) function f() { initialBV = f; f = 123; currentBV = f; return "decl"; }',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    "type": "Program",
                    "body": [{
                        "type": "IfStatement",
                        "test": {
                            "type": "Literal",
                            "value": true,
                            "start": 4,
                            "end": 8,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 4
                                },
                                "end": {
                                    "line": 1,
                                    "column": 8
                                }
                            },
                            "raw": "true"
                        },
                        "alternate": null,
                        "consequent": {
                            "type": "FunctionDeclaration",
                            "params": [],
                            "body": {
                                "type": "BlockStatement",
                                "body": [{
                                        "type": "ExpressionStatement",
                                        "expression": {
                                            "type": "AssignmentExpression",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "initialBV",
                                                "start": 25,
                                                "end": 34,
                                                "loc": {
                                                    "start": {
                                                        "line": 1,
                                                        "column": 25
                                                    },
                                                    "end": {
                                                        "line": 1,
                                                        "column": 34
                                                    }
                                                }
                                            },
                                            "operator": "=",
                                            "right": {
                                                "type": "Identifier",
                                                "name": "f",
                                                "start": 37,
                                                "end": 38,
                                                "loc": {
                                                    "start": {
                                                        "line": 1,
                                                        "column": 37
                                                    },
                                                    "end": {
                                                        "line": 1,
                                                        "column": 38
                                                    }
                                                }
                                            },
                                            "start": 25,
                                            "end": 38,
                                            "loc": {
                                                "start": {
                                                    "line": 1,
                                                    "column": 25
                                                },
                                                "end": {
                                                    "line": 1,
                                                    "column": 38
                                                }
                                            }
                                        },
                                        "start": 25,
                                        "end": 39,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 25
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 39
                                            }
                                        }
                                    },
                                    {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                            "type": "AssignmentExpression",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "f",
                                                "start": 40,
                                                "end": 41,
                                                "loc": {
                                                    "start": {
                                                        "line": 1,
                                                        "column": 40
                                                    },
                                                    "end": {
                                                        "line": 1,
                                                        "column": 41
                                                    }
                                                }
                                            },
                                            "operator": "=",
                                            "right": {
                                                "type": "Literal",
                                                "value": 123,
                                                "start": 44,
                                                "end": 47,
                                                "loc": {
                                                    "start": {
                                                        "line": 1,
                                                        "column": 44
                                                    },
                                                    "end": {
                                                        "line": 1,
                                                        "column": 47
                                                    }
                                                },
                                                "raw": "123"
                                            },
                                            "start": 40,
                                            "end": 47,
                                            "loc": {
                                                "start": {
                                                    "line": 1,
                                                    "column": 40
                                                },
                                                "end": {
                                                    "line": 1,
                                                    "column": 47
                                                }
                                            }
                                        },
                                        "start": 40,
                                        "end": 48,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 40
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 48
                                            }
                                        }
                                    },
                                    {
                                        "type": "ExpressionStatement",
                                        "expression": {
                                            "type": "AssignmentExpression",
                                            "left": {
                                                "type": "Identifier",
                                                "name": "currentBV",
                                                "start": 49,
                                                "end": 58,
                                                "loc": {
                                                    "start": {
                                                        "line": 1,
                                                        "column": 49
                                                    },
                                                    "end": {
                                                        "line": 1,
                                                        "column": 58
                                                    }
                                                }
                                            },
                                            "operator": "=",
                                            "right": {
                                                "type": "Identifier",
                                                "name": "f",
                                                "start": 61,
                                                "end": 62,
                                                "loc": {
                                                    "start": {
                                                        "line": 1,
                                                        "column": 61
                                                    },
                                                    "end": {
                                                        "line": 1,
                                                        "column": 62
                                                    }
                                                }
                                            },
                                            "start": 49,
                                            "end": 62,
                                            "loc": {
                                                "start": {
                                                    "line": 1,
                                                    "column": 49
                                                },
                                                "end": {
                                                    "line": 1,
                                                    "column": 62
                                                }
                                            }
                                        },
                                        "start": 49,
                                        "end": 63,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 49
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 63
                                            }
                                        }
                                    },
                                    {
                                        "type": "ReturnStatement",
                                        "argument": {
                                            "type": "Literal",
                                            "value": "decl",
                                            "start": 71,
                                            "end": 77,
                                            "loc": {
                                                "start": {
                                                    "line": 1,
                                                    "column": 71
                                                },
                                                "end": {
                                                    "line": 1,
                                                    "column": 77
                                                }
                                            },
                                            "raw": "\"decl\""
                                        },
                                        "start": 64,
                                        "end": 78,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 64
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 78
                                            }
                                        }
                                    }
                                ],
                                "start": 23,
                                "end": 80,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 23
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 80
                                    }
                                }
                            },
                            "async": false,
                            "generator": false,
                            "expression": false,
                            "id": {
                                "type": "Identifier",
                                "name": "f",
                                "start": 19,
                                "end": 20,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 19
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 20
                                    }
                                }
                            },
                            "start": 10,
                            "end": 80,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 10
                                },
                                "end": {
                                    "line": 1,
                                    "column": 80
                                }
                            }
                        },
                        "start": 0,
                        "end": 80,
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 0
                            },
                            "end": {
                                "line": 1,
                                "column": 80
                            }
                        }
                    }],
                    "sourceType": "script",
                    "start": 0,
                    "end": 80,
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 0
                        },
                        "end": {
                            "line": 1,
                            "column": 80
                        }
                    }
                }
            });
    
            pass(`try {  throw {};  } catch ({ f }) {  if (true) function f() {  } else ;  }`, {
                source: 'try {  throw {};  } catch ({ f }) {  if (true) function f() {  } else ;  }',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    "type": "Program",
                    "body": [{
                        "type": "TryStatement",
                        "block": {
                            "type": "BlockStatement",
                            "body": [{
                                "type": "ThrowStatement",
                                "argument": {
                                    "type": "ObjectExpression",
                                    "properties": [],
                                    "start": 13,
                                    "end": 15,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 13
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 15
                                        }
                                    }
                                },
                                "start": 7,
                                "end": 16,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 7
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 16
                                    }
                                }
                            }],
                            "start": 4,
                            "end": 19,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 4
                                },
                                "end": {
                                    "line": 1,
                                    "column": 19
                                }
                            }
                        },
                        "handler": {
                            "type": "CatchClause",
                            "param": {
                                "type": "ObjectPattern",
                                "properties": [{
                                    "type": "Property",
                                    "kind": "init",
                                    "key": {
                                        "type": "Identifier",
                                        "name": "f",
                                        "start": 29,
                                        "end": 30,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 29
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 30
                                            }
                                        }
                                    },
                                    "computed": false,
                                    "value": {
                                        "type": "Identifier",
                                        "name": "f",
                                        "start": 29,
                                        "end": 30,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 29
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 30
                                            }
                                        }
                                    },
                                    "method": false,
                                    "shorthand": true,
                                    "start": 29,
                                    "end": 30,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 29
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 30
                                        }
                                    }
                                }],
                                "start": 27,
                                "end": 32,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 27
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 32
                                    }
                                }
                            },
                            "body": {
                                "type": "BlockStatement",
                                "body": [{
                                    "type": "IfStatement",
                                    "test": {
                                        "type": "Literal",
                                        "value": true,
                                        "start": 41,
                                        "end": 45,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 41
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 45
                                            }
                                        },
                                        "raw": "true"
                                    },
                                    "alternate": {
                                        "type": "EmptyStatement",
                                        "start": 70,
                                        "end": 71,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 70
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 71
                                            }
                                        }
                                    },
                                    "consequent": {
                                        "type": "FunctionDeclaration",
                                        "params": [],
                                        "body": {
                                            "type": "BlockStatement",
                                            "body": [],
                                            "start": 60,
                                            "end": 64,
                                            "loc": {
                                                "start": {
                                                    "line": 1,
                                                    "column": 60
                                                },
                                                "end": {
                                                    "line": 1,
                                                    "column": 64
                                                }
                                            }
                                        },
                                        "async": false,
                                        "generator": false,
                                        "expression": false,
                                        "id": {
                                            "type": "Identifier",
                                            "name": "f",
                                            "start": 56,
                                            "end": 57,
                                            "loc": {
                                                "start": {
                                                    "line": 1,
                                                    "column": 56
                                                },
                                                "end": {
                                                    "line": 1,
                                                    "column": 57
                                                }
                                            }
                                        },
                                        "start": 47,
                                        "end": 64,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 47
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 64
                                            }
                                        }
                                    },
                                    "start": 37,
                                    "end": 71,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 37
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 71
                                        }
                                    }
                                }],
                                "start": 34,
                                "end": 74,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 34
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 74
                                    }
                                }
                            },
                            "start": 20,
                            "end": 74,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 20
                                },
                                "end": {
                                    "line": 1,
                                    "column": 74
                                }
                            }
                        },
                        "finalizer": null,
                        "start": 0,
                        "end": 74,
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 0
                            },
                            "end": {
                                "line": 1,
                                "column": 74
                            }
                        }
                    }],
                    "sourceType": "script",
                    "start": 0,
                    "end": 74,
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 0
                        },
                        "end": {
                            "line": 1,
                            "column": 74
                        }
                    }
                }
            });
    
            pass(` switch (0) { default:  let f; if (true) function f() {  }  }`, {
                source: 'switch (0) { default:  let f; if (true) function f() {  }  }',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    "type": "Program",
                    "body": [{
                        "type": "SwitchStatement",
                        "discriminant": {
                            "type": "Literal",
                            "value": 0,
                            "start": 8,
                            "end": 9,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 8
                                },
                                "end": {
                                    "line": 1,
                                    "column": 9
                                }
                            },
                            "raw": "0"
                        },
                        "cases": [{
                            "type": "SwitchCase",
                            "test": null,
                            "consequent": [{
                                    "type": "VariableDeclaration",
                                    "declarations": [{
                                        "type": "VariableDeclarator",
                                        "init": null,
                                        "id": {
                                            "type": "Identifier",
                                            "name": "f",
                                            "start": 27,
                                            "end": 28,
                                            "loc": {
                                                "start": {
                                                    "line": 1,
                                                    "column": 27
                                                },
                                                "end": {
                                                    "line": 1,
                                                    "column": 28
                                                }
                                            }
                                        },
                                        "start": 27,
                                        "end": 28,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 27
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 28
                                            }
                                        }
                                    }],
                                    "kind": "let",
                                    "start": 23,
                                    "end": 29,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 23
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 29
                                        }
                                    }
                                },
                                {
                                    "type": "IfStatement",
                                    "test": {
                                        "type": "Literal",
                                        "value": true,
                                        "start": 34,
                                        "end": 38,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 34
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 38
                                            }
                                        },
                                        "raw": "true"
                                    },
                                    "alternate": null,
                                    "consequent": {
                                        "type": "FunctionDeclaration",
                                        "params": [],
                                        "body": {
                                            "type": "BlockStatement",
                                            "body": [],
                                            "start": 53,
                                            "end": 57,
                                            "loc": {
                                                "start": {
                                                    "line": 1,
                                                    "column": 53
                                                },
                                                "end": {
                                                    "line": 1,
                                                    "column": 57
                                                }
                                            }
                                        },
                                        "async": false,
                                        "generator": false,
                                        "expression": false,
                                        "id": {
                                            "type": "Identifier",
                                            "name": "f",
                                            "start": 49,
                                            "end": 50,
                                            "loc": {
                                                "start": {
                                                    "line": 1,
                                                    "column": 49
                                                },
                                                "end": {
                                                    "line": 1,
                                                    "column": 50
                                                }
                                            }
                                        },
                                        "start": 40,
                                        "end": 57,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 40
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 57
                                            }
                                        }
                                    },
                                    "start": 30,
                                    "end": 57,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 30
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 57
                                        }
                                    }
                                }
                            ],
                            "start": 13,
                            "end": 57,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 13
                                },
                                "end": {
                                    "line": 1,
                                    "column": 57
                                }
                            }
                        }],
                        "start": 0,
                        "end": 60,
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 0
                            },
                            "end": {
                                "line": 1,
                                "column": 60
                            }
                        }
                    }],
                    "sourceType": "script",
                    "start": 0,
                    "end": 60,
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 0
                        },
                        "end": {
                            "line": 1,
                            "column": 60
                        }
                    }
                }
            });
    
            pass(`try {  throw {};  } catch ({ f }) {  if (true) function f() {  }  }`, {
                source: '  try {  throw {};  } catch ({ f }) {  if (true) function f() {  }  }',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    "type": "Program",
                    "body": [{
                        "type": "TryStatement",
                        "block": {
                            "type": "BlockStatement",
                            "body": [{
                                "type": "ThrowStatement",
                                "argument": {
                                    "type": "ObjectExpression",
                                    "properties": [],
                                    "start": 15,
                                    "end": 17,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 15
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 17
                                        }
                                    }
                                },
                                "start": 9,
                                "end": 18,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 9
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 18
                                    }
                                }
                            }],
                            "start": 6,
                            "end": 21,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 6
                                },
                                "end": {
                                    "line": 1,
                                    "column": 21
                                }
                            }
                        },
                        "handler": {
                            "type": "CatchClause",
                            "param": {
                                "type": "ObjectPattern",
                                "properties": [{
                                    "type": "Property",
                                    "kind": "init",
                                    "key": {
                                        "type": "Identifier",
                                        "name": "f",
                                        "start": 31,
                                        "end": 32,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 31
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 32
                                            }
                                        }
                                    },
                                    "computed": false,
                                    "value": {
                                        "type": "Identifier",
                                        "name": "f",
                                        "start": 31,
                                        "end": 32,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 31
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 32
                                            }
                                        }
                                    },
                                    "method": false,
                                    "shorthand": true,
                                    "start": 31,
                                    "end": 32,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 31
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 32
                                        }
                                    }
                                }],
                                "start": 29,
                                "end": 34,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 29
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 34
                                    }
                                }
                            },
                            "body": {
                                "type": "BlockStatement",
                                "body": [{
                                    "type": "IfStatement",
                                    "test": {
                                        "type": "Literal",
                                        "value": true,
                                        "start": 43,
                                        "end": 47,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 43
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 47
                                            }
                                        },
                                        "raw": "true"
                                    },
                                    "alternate": null,
                                    "consequent": {
                                        "type": "FunctionDeclaration",
                                        "params": [],
                                        "body": {
                                            "type": "BlockStatement",
                                            "body": [],
                                            "start": 62,
                                            "end": 66,
                                            "loc": {
                                                "start": {
                                                    "line": 1,
                                                    "column": 62
                                                },
                                                "end": {
                                                    "line": 1,
                                                    "column": 66
                                                }
                                            }
                                        },
                                        "async": false,
                                        "generator": false,
                                        "expression": false,
                                        "id": {
                                            "type": "Identifier",
                                            "name": "f",
                                            "start": 58,
                                            "end": 59,
                                            "loc": {
                                                "start": {
                                                    "line": 1,
                                                    "column": 58
                                                },
                                                "end": {
                                                    "line": 1,
                                                    "column": 59
                                                }
                                            }
                                        },
                                        "start": 49,
                                        "end": 66,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 49
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 66
                                            }
                                        }
                                    },
                                    "start": 39,
                                    "end": 66,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 39
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 66
                                        }
                                    }
                                }],
                                "start": 36,
                                "end": 69,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 36
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 69
                                    }
                                }
                            },
                            "start": 22,
                            "end": 69,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 22
                                },
                                "end": {
                                    "line": 1,
                                    "column": 69
                                }
                            }
                        },
                        "finalizer": null,
                        "start": 2,
                        "end": 69,
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 2
                            },
                            "end": {
                                "line": 1,
                                "column": 69
                            }
                        }
                    }],
                    "sourceType": "script",
                    "start": 0,
                    "end": 69,
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 0
                        },
                        "end": {
                            "line": 1,
                            "column": 69
                        }
                    }
                }
            });
    
            pass(`{  let f = 123;  if (false) ; else function f() {  }  }`, {
                source: '{  let f = 123;  if (false) ; else function f() {  }  }',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    "type": "Program",
                    "body": [{
                        "type": "BlockStatement",
                        "body": [{
                                "type": "VariableDeclaration",
                                "declarations": [{
                                    "type": "VariableDeclarator",
                                    "init": {
                                        "type": "Literal",
                                        "value": 123,
                                        "start": 11,
                                        "end": 14,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 11
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 14
                                            }
                                        },
                                        "raw": "123"
                                    },
                                    "id": {
                                        "type": "Identifier",
                                        "name": "f",
                                        "start": 7,
                                        "end": 8,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 7
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 8
                                            }
                                        }
                                    },
                                    "start": 7,
                                    "end": 14,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 7
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 14
                                        }
                                    }
                                }],
                                "kind": "let",
                                "start": 3,
                                "end": 15,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 3
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 15
                                    }
                                }
                            },
                            {
                                "type": "IfStatement",
                                "test": {
                                    "type": "Literal",
                                    "value": false,
                                    "start": 21,
                                    "end": 26,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 21
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 26
                                        }
                                    },
                                    "raw": "false"
                                },
                                "alternate": {
                                    "type": "FunctionDeclaration",
                                    "params": [],
                                    "body": {
                                        "type": "BlockStatement",
                                        "body": [],
                                        "start": 48,
                                        "end": 52,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 48
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 52
                                            }
                                        }
                                    },
                                    "async": false,
                                    "generator": false,
                                    "expression": false,
                                    "id": {
                                        "type": "Identifier",
                                        "name": "f",
                                        "start": 44,
                                        "end": 45,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 44
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 45
                                            }
                                        }
                                    },
                                    "start": 35,
                                    "end": 52,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 35
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 52
                                        }
                                    }
                                },
                                "consequent": {
                                    "type": "EmptyStatement",
                                    "start": 28,
                                    "end": 29,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 28
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 29
                                        }
                                    }
                                },
                                "start": 17,
                                "end": 52,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 17
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 52
                                    }
                                }
                            }
                        ],
                        "start": 0,
                        "end": 55,
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 0
                            },
                            "end": {
                                "line": 1,
                                "column": 55
                            }
                        }
                    }],
                    "sourceType": "script",
                    "start": 0,
                    "end": 55,
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 0
                        },
                        "end": {
                            "line": 1,
                            "column": 55
                        }
                    }
                }
            });
    
            pass(` switch (0) { default:  let f; switch (1) {  case 1:   function f() {  }  }  }`, {
                source: 'switch (0) { default:  let f; switch (1) {  case 1:   function f() {  }  }  }',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    "type": "Program",
                    "body": [{
                        "type": "SwitchStatement",
                        "discriminant": {
                            "type": "Literal",
                            "value": 0,
                            "start": 8,
                            "end": 9,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 8
                                },
                                "end": {
                                    "line": 1,
                                    "column": 9
                                }
                            },
                            "raw": "0"
                        },
                        "cases": [{
                            "type": "SwitchCase",
                            "test": null,
                            "consequent": [{
                                    "type": "VariableDeclaration",
                                    "declarations": [{
                                        "type": "VariableDeclarator",
                                        "init": null,
                                        "id": {
                                            "type": "Identifier",
                                            "name": "f",
                                            "start": 27,
                                            "end": 28,
                                            "loc": {
                                                "start": {
                                                    "line": 1,
                                                    "column": 27
                                                },
                                                "end": {
                                                    "line": 1,
                                                    "column": 28
                                                }
                                            }
                                        },
                                        "start": 27,
                                        "end": 28,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 27
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 28
                                            }
                                        }
                                    }],
                                    "kind": "let",
                                    "start": 23,
                                    "end": 29,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 23
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 29
                                        }
                                    }
                                },
                                {
                                    "type": "SwitchStatement",
                                    "discriminant": {
                                        "type": "Literal",
                                        "value": 1,
                                        "start": 38,
                                        "end": 39,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 38
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 39
                                            }
                                        },
                                        "raw": "1"
                                    },
                                    "cases": [{
                                        "type": "SwitchCase",
                                        "test": {
                                            "type": "Literal",
                                            "value": 1,
                                            "start": 49,
                                            "end": 50,
                                            "loc": {
                                                "start": {
                                                    "line": 1,
                                                    "column": 49
                                                },
                                                "end": {
                                                    "line": 1,
                                                    "column": 50
                                                }
                                            },
                                            "raw": "1"
                                        },
                                        "consequent": [{
                                            "type": "FunctionDeclaration",
                                            "params": [],
                                            "body": {
                                                "type": "BlockStatement",
                                                "body": [],
                                                "start": 67,
                                                "end": 71,
                                                "loc": {
                                                    "start": {
                                                        "line": 1,
                                                        "column": 67
                                                    },
                                                    "end": {
                                                        "line": 1,
                                                        "column": 71
                                                    }
                                                }
                                            },
                                            "async": false,
                                            "generator": false,
                                            "expression": false,
                                            "id": {
                                                "type": "Identifier",
                                                "name": "f",
                                                "start": 63,
                                                "end": 64,
                                                "loc": {
                                                    "start": {
                                                        "line": 1,
                                                        "column": 63
                                                    },
                                                    "end": {
                                                        "line": 1,
                                                        "column": 64
                                                    }
                                                }
                                            },
                                            "start": 54,
                                            "end": 71,
                                            "loc": {
                                                "start": {
                                                    "line": 1,
                                                    "column": 54
                                                },
                                                "end": {
                                                    "line": 1,
                                                    "column": 71
                                                }
                                            }
                                        }],
                                        "start": 44,
                                        "end": 71,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 44
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 71
                                            }
                                        }
                                    }],
                                    "start": 30,
                                    "end": 74,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 30
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 74
                                        }
                                    }
                                }
                            ],
                            "start": 13,
                            "end": 74,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 13
                                },
                                "end": {
                                    "line": 1,
                                    "column": 74
                                }
                            }
                        }],
                        "start": 0,
                        "end": 77,
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 0
                            },
                            "end": {
                                "line": 1,
                                "column": 77
                            }
                        }
                    }],
                    "sourceType": "script",
                    "start": 0,
                    "end": 77,
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 0
                        },
                        "end": {
                            "line": 1,
                            "column": 77
                        }
                    }
                }
            });
    
            pass(` try {  throw {};  } catch ({ f }) {  switch (1) {  case 1:  function f() {  }  }  }`, {
                source: 'try {  throw {};  } catch ({ f }) {  switch (1) {  case 1:  function f() {  }  }  }',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    "type": "Program",
                    "body": [{
                        "type": "TryStatement",
                        "block": {
                            "type": "BlockStatement",
                            "body": [{
                                "type": "ThrowStatement",
                                "argument": {
                                    "type": "ObjectExpression",
                                    "properties": [],
                                    "start": 13,
                                    "end": 15,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 13
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 15
                                        }
                                    }
                                },
                                "start": 7,
                                "end": 16,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 7
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 16
                                    }
                                }
                            }],
                            "start": 4,
                            "end": 19,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 4
                                },
                                "end": {
                                    "line": 1,
                                    "column": 19
                                }
                            }
                        },
                        "handler": {
                            "type": "CatchClause",
                            "param": {
                                "type": "ObjectPattern",
                                "properties": [{
                                    "type": "Property",
                                    "kind": "init",
                                    "key": {
                                        "type": "Identifier",
                                        "name": "f",
                                        "start": 29,
                                        "end": 30,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 29
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 30
                                            }
                                        }
                                    },
                                    "computed": false,
                                    "value": {
                                        "type": "Identifier",
                                        "name": "f",
                                        "start": 29,
                                        "end": 30,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 29
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 30
                                            }
                                        }
                                    },
                                    "method": false,
                                    "shorthand": true,
                                    "start": 29,
                                    "end": 30,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 29
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 30
                                        }
                                    }
                                }],
                                "start": 27,
                                "end": 32,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 27
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 32
                                    }
                                }
                            },
                            "body": {
                                "type": "BlockStatement",
                                "body": [{
                                    "type": "SwitchStatement",
                                    "discriminant": {
                                        "type": "Literal",
                                        "value": 1,
                                        "start": 45,
                                        "end": 46,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 45
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 46
                                            }
                                        },
                                        "raw": "1"
                                    },
                                    "cases": [{
                                        "type": "SwitchCase",
                                        "test": {
                                            "type": "Literal",
                                            "value": 1,
                                            "start": 56,
                                            "end": 57,
                                            "loc": {
                                                "start": {
                                                    "line": 1,
                                                    "column": 56
                                                },
                                                "end": {
                                                    "line": 1,
                                                    "column": 57
                                                }
                                            },
                                            "raw": "1"
                                        },
                                        "consequent": [{
                                            "type": "FunctionDeclaration",
                                            "params": [],
                                            "body": {
                                                "type": "BlockStatement",
                                                "body": [],
                                                "start": 73,
                                                "end": 77,
                                                "loc": {
                                                    "start": {
                                                        "line": 1,
                                                        "column": 73
                                                    },
                                                    "end": {
                                                        "line": 1,
                                                        "column": 77
                                                    }
                                                }
                                            },
                                            "async": false,
                                            "generator": false,
                                            "expression": false,
                                            "id": {
                                                "type": "Identifier",
                                                "name": "f",
                                                "start": 69,
                                                "end": 70,
                                                "loc": {
                                                    "start": {
                                                        "line": 1,
                                                        "column": 69
                                                    },
                                                    "end": {
                                                        "line": 1,
                                                        "column": 70
                                                    }
                                                }
                                            },
                                            "start": 60,
                                            "end": 77,
                                            "loc": {
                                                "start": {
                                                    "line": 1,
                                                    "column": 60
                                                },
                                                "end": {
                                                    "line": 1,
                                                    "column": 77
                                                }
                                            }
                                        }],
                                        "start": 51,
                                        "end": 77,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 51
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 77
                                            }
                                        }
                                    }],
                                    "start": 37,
                                    "end": 80,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 37
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 80
                                        }
                                    }
                                }],
                                "start": 34,
                                "end": 83,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 34
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 83
                                    }
                                }
                            },
                            "start": 20,
                            "end": 83,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 20
                                },
                                "end": {
                                    "line": 1,
                                    "column": 83
                                }
                            }
                        },
                        "finalizer": null,
                        "start": 0,
                        "end": 83,
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 0
                            },
                            "end": {
                                "line": 1,
                                "column": 83
                            }
                        }
                    }],
                    "sourceType": "script",
                    "start": 0,
                    "end": 83,
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 0
                        },
                        "end": {
                            "line": 1,
                            "column": 83
                        }
                    }
                }
            });
    
            pass(`try { throw null;} catch (f) {switch (1) { default: function f() { return 123; } } }`, {
                source: 'try { throw null;} catch (f) {switch (1) { default: function f() { return 123; } } }',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    "type": "Program",
                    "body": [{
                        "type": "TryStatement",
                        "block": {
                            "type": "BlockStatement",
                            "body": [{
                                "type": "ThrowStatement",
                                "argument": {
                                    "type": "Literal",
                                    "value": null,
                                    "start": 12,
                                    "end": 16,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 12
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 16
                                        }
                                    },
                                    "raw": "null"
                                },
                                "start": 6,
                                "end": 17,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 6
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 17
                                    }
                                }
                            }],
                            "start": 4,
                            "end": 18,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 4
                                },
                                "end": {
                                    "line": 1,
                                    "column": 18
                                }
                            }
                        },
                        "handler": {
                            "type": "CatchClause",
                            "param": {
                                "type": "Identifier",
                                "name": "f",
                                "start": 26,
                                "end": 27,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 26
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 27
                                    }
                                }
                            },
                            "body": {
                                "type": "BlockStatement",
                                "body": [{
                                    "type": "SwitchStatement",
                                    "discriminant": {
                                        "type": "Literal",
                                        "value": 1,
                                        "start": 38,
                                        "end": 39,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 38
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 39
                                            }
                                        },
                                        "raw": "1"
                                    },
                                    "cases": [{
                                        "type": "SwitchCase",
                                        "test": null,
                                        "consequent": [{
                                            "type": "FunctionDeclaration",
                                            "params": [],
                                            "body": {
                                                "type": "BlockStatement",
                                                "body": [{
                                                    "type": "ReturnStatement",
                                                    "argument": {
                                                        "type": "Literal",
                                                        "value": 123,
                                                        "start": 74,
                                                        "end": 77,
                                                        "loc": {
                                                            "start": {
                                                                "line": 1,
                                                                "column": 74
                                                            },
                                                            "end": {
                                                                "line": 1,
                                                                "column": 77
                                                            }
                                                        },
                                                        "raw": "123"
                                                    },
                                                    "start": 67,
                                                    "end": 78,
                                                    "loc": {
                                                        "start": {
                                                            "line": 1,
                                                            "column": 67
                                                        },
                                                        "end": {
                                                            "line": 1,
                                                            "column": 78
                                                        }
                                                    }
                                                }],
                                                "start": 65,
                                                "end": 80,
                                                "loc": {
                                                    "start": {
                                                        "line": 1,
                                                        "column": 65
                                                    },
                                                    "end": {
                                                        "line": 1,
                                                        "column": 80
                                                    }
                                                }
                                            },
                                            "async": false,
                                            "generator": false,
                                            "expression": false,
                                            "id": {
                                                "type": "Identifier",
                                                "name": "f",
                                                "start": 61,
                                                "end": 62,
                                                "loc": {
                                                    "start": {
                                                        "line": 1,
                                                        "column": 61
                                                    },
                                                    "end": {
                                                        "line": 1,
                                                        "column": 62
                                                    }
                                                }
                                            },
                                            "start": 52,
                                            "end": 80,
                                            "loc": {
                                                "start": {
                                                    "line": 1,
                                                    "column": 52
                                                },
                                                "end": {
                                                    "line": 1,
                                                    "column": 80
                                                }
                                            }
                                        }],
                                        "start": 43,
                                        "end": 80,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 43
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 80
                                            }
                                        }
                                    }],
                                    "start": 30,
                                    "end": 82,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 30
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 82
                                        }
                                    }
                                }],
                                "start": 29,
                                "end": 84,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 29
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 84
                                    }
                                }
                            },
                            "start": 19,
                            "end": 84,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 19
                                },
                                "end": {
                                    "line": 1,
                                    "column": 84
                                }
                            }
                        },
                        "finalizer": null,
                        "start": 0,
                        "end": 84,
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 0
                            },
                            "end": {
                                "line": 1,
                                "column": 84
                            }
                        }
                    }],
                    "sourceType": "script",
                    "start": 0,
                    "end": 84,
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 0
                        },
                        "end": {
                            "line": 1,
                            "column": 84
                        }
                    }
                }
            });
    
            pass(`let f = 123; switch (1) { default: function f() {  } }`, {
                source: 'let f = 123; switch (1) { default: function f() {  } }',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    "type": "Program",
                    "body": [{
                            "type": "VariableDeclaration",
                            "declarations": [{
                                "type": "VariableDeclarator",
                                "init": {
                                    "type": "Literal",
                                    "value": 123,
                                    "start": 8,
                                    "end": 11,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 8
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 11
                                        }
                                    },
                                    "raw": "123"
                                },
                                "id": {
                                    "type": "Identifier",
                                    "name": "f",
                                    "start": 4,
                                    "end": 5,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 4
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 5
                                        }
                                    }
                                },
                                "start": 4,
                                "end": 11,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 4
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 11
                                    }
                                }
                            }],
                            "kind": "let",
                            "start": 0,
                            "end": 12,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 0
                                },
                                "end": {
                                    "line": 1,
                                    "column": 12
                                }
                            }
                        },
                        {
                            "type": "SwitchStatement",
                            "discriminant": {
                                "type": "Literal",
                                "value": 1,
                                "start": 21,
                                "end": 22,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 21
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 22
                                    }
                                },
                                "raw": "1"
                            },
                            "cases": [{
                                "type": "SwitchCase",
                                "test": null,
                                "consequent": [{
                                    "type": "FunctionDeclaration",
                                    "params": [],
                                    "body": {
                                        "type": "BlockStatement",
                                        "body": [],
                                        "start": 48,
                                        "end": 52,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 48
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 52
                                            }
                                        }
                                    },
                                    "async": false,
                                    "generator": false,
                                    "expression": false,
                                    "id": {
                                        "type": "Identifier",
                                        "name": "f",
                                        "start": 44,
                                        "end": 45,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 44
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 45
                                            }
                                        }
                                    },
                                    "start": 35,
                                    "end": 52,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 35
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 52
                                        }
                                    }
                                }],
                                "start": 26,
                                "end": 52,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 26
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 52
                                    }
                                }
                            }],
                            "start": 13,
                            "end": 54,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 13
                                },
                                "end": {
                                    "line": 1,
                                    "column": 54
                                }
                            }
                        }
                    ],
                    "sourceType": "script",
                    "start": 0,
                    "end": 54,
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 0
                        },
                        "end": {
                            "line": 1,
                            "column": 54
                        }
                    }
                }
            });
    
            pass(`var init = f;  switch (1) { default:   function f() {  }  }`, {
                source: 'var init = f;  switch (1) { default:   function f() {  }  }',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    "type": "Program",
                    "body": [{
                            "type": "VariableDeclaration",
                            "declarations": [{
                                "type": "VariableDeclarator",
                                "init": {
                                    "type": "Identifier",
                                    "name": "f",
                                    "start": 11,
                                    "end": 12,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 11
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 12
                                        }
                                    }
                                },
                                "id": {
                                    "type": "Identifier",
                                    "name": "init",
                                    "start": 4,
                                    "end": 8,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 4
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 8
                                        }
                                    }
                                },
                                "start": 4,
                                "end": 12,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 4
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 12
                                    }
                                }
                            }],
                            "kind": "var",
                            "start": 0,
                            "end": 13,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 0
                                },
                                "end": {
                                    "line": 1,
                                    "column": 13
                                }
                            }
                        },
                        {
                            "type": "SwitchStatement",
                            "discriminant": {
                                "type": "Literal",
                                "value": 1,
                                "start": 23,
                                "end": 24,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 23
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 24
                                    }
                                },
                                "raw": "1"
                            },
                            "cases": [{
                                "type": "SwitchCase",
                                "test": null,
                                "consequent": [{
                                    "type": "FunctionDeclaration",
                                    "params": [],
                                    "body": {
                                        "type": "BlockStatement",
                                        "body": [],
                                        "start": 52,
                                        "end": 56,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 52
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 56
                                            }
                                        }
                                    },
                                    "async": false,
                                    "generator": false,
                                    "expression": false,
                                    "id": {
                                        "type": "Identifier",
                                        "name": "f",
                                        "start": 48,
                                        "end": 49,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 48
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 49
                                            }
                                        }
                                    },
                                    "start": 39,
                                    "end": 56,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 39
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 56
                                        }
                                    }
                                }],
                                "start": 28,
                                "end": 56,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 28
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 56
                                    }
                                }
                            }],
                            "start": 15,
                            "end": 59,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 15
                                },
                                "end": {
                                    "line": 1,
                                    "column": 59
                                }
                            }
                        }
                    ],
                    "sourceType": "script",
                    "start": 0,
                    "end": 59,
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 0
                        },
                        "end": {
                            "line": 1,
                            "column": 59
                        }
                    }
                }
            });
    
            pass(`var init = f; if (false) function _f() {} else function f() {  }`, {
                source: 'var init = f; if (false) function _f() {} else function f() {  }',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    "type": "Program",
                    "body": [{
                            "type": "VariableDeclaration",
                            "declarations": [{
                                "type": "VariableDeclarator",
                                "init": {
                                    "type": "Identifier",
                                    "name": "f",
                                    "start": 11,
                                    "end": 12,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 11
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 12
                                        }
                                    }
                                },
                                "id": {
                                    "type": "Identifier",
                                    "name": "init",
                                    "start": 4,
                                    "end": 8,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 4
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 8
                                        }
                                    }
                                },
                                "start": 4,
                                "end": 12,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 4
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 12
                                    }
                                }
                            }],
                            "kind": "var",
                            "start": 0,
                            "end": 13,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 0
                                },
                                "end": {
                                    "line": 1,
                                    "column": 13
                                }
                            }
                        },
                        {
                            "type": "IfStatement",
                            "test": {
                                "type": "Literal",
                                "value": false,
                                "start": 18,
                                "end": 23,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 18
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 23
                                    }
                                },
                                "raw": "false"
                            },
                            "alternate": {
                                "type": "FunctionDeclaration",
                                "params": [],
                                "body": {
                                    "type": "BlockStatement",
                                    "body": [],
                                    "start": 60,
                                    "end": 64,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 60
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 64
                                        }
                                    }
                                },
                                "async": false,
                                "generator": false,
                                "expression": false,
                                "id": {
                                    "type": "Identifier",
                                    "name": "f",
                                    "start": 56,
                                    "end": 57,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 56
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 57
                                        }
                                    }
                                },
                                "start": 47,
                                "end": 64,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 47
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 64
                                    }
                                }
                            },
                            "consequent": {
                                "type": "FunctionDeclaration",
                                "params": [],
                                "body": {
                                    "type": "BlockStatement",
                                    "body": [],
                                    "start": 39,
                                    "end": 41,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 39
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 41
                                        }
                                    }
                                },
                                "async": false,
                                "generator": false,
                                "expression": false,
                                "id": {
                                    "type": "Identifier",
                                    "name": "_f",
                                    "start": 34,
                                    "end": 36,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 34
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 36
                                        }
                                    }
                                },
                                "start": 25,
                                "end": 41,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 25
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 41
                                    }
                                }
                            },
                            "start": 14,
                            "end": 64,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 14
                                },
                                "end": {
                                    "line": 1,
                                    "column": 64
                                }
                            }
                        }
                    ],
                    "sourceType": "script",
                    "start": 0,
                    "end": 64,
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 0
                        },
                        "end": {
                            "line": 1,
                            "column": 64
                        }
                    }
                }
            });
    
            pass(` {  let f = 123; if (false) function _f() {} else function f() {  }  }`, {
                source: '{  let f = 123; if (false) function _f() {} else function f() {  }  }',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    "type": "Program",
                    "body": [{
                        "type": "BlockStatement",
                        "body": [{
                                "type": "VariableDeclaration",
                                "declarations": [{
                                    "type": "VariableDeclarator",
                                    "init": {
                                        "type": "Literal",
                                        "value": 123,
                                        "start": 11,
                                        "end": 14,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 11
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 14
                                            }
                                        },
                                        "raw": "123"
                                    },
                                    "id": {
                                        "type": "Identifier",
                                        "name": "f",
                                        "start": 7,
                                        "end": 8,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 7
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 8
                                            }
                                        }
                                    },
                                    "start": 7,
                                    "end": 14,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 7
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 14
                                        }
                                    }
                                }],
                                "kind": "let",
                                "start": 3,
                                "end": 15,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 3
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 15
                                    }
                                }
                            },
                            {
                                "type": "IfStatement",
                                "test": {
                                    "type": "Literal",
                                    "value": false,
                                    "start": 20,
                                    "end": 25,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 20
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 25
                                        }
                                    },
                                    "raw": "false"
                                },
                                "alternate": {
                                    "type": "FunctionDeclaration",
                                    "params": [],
                                    "body": {
                                        "type": "BlockStatement",
                                        "body": [],
                                        "start": 62,
                                        "end": 66,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 62
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 66
                                            }
                                        }
                                    },
                                    "async": false,
                                    "generator": false,
                                    "expression": false,
                                    "id": {
                                        "type": "Identifier",
                                        "name": "f",
                                        "start": 58,
                                        "end": 59,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 58
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 59
                                            }
                                        }
                                    },
                                    "start": 49,
                                    "end": 66,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 49
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 66
                                        }
                                    }
                                },
                                "consequent": {
                                    "type": "FunctionDeclaration",
                                    "params": [],
                                    "body": {
                                        "type": "BlockStatement",
                                        "body": [],
                                        "start": 41,
                                        "end": 43,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 41
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 43
                                            }
                                        }
                                    },
                                    "async": false,
                                    "generator": false,
                                    "expression": false,
                                    "id": {
                                        "type": "Identifier",
                                        "name": "_f",
                                        "start": 36,
                                        "end": 38,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 36
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 38
                                            }
                                        }
                                    },
                                    "start": 27,
                                    "end": 43,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 27
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 43
                                        }
                                    }
                                },
                                "start": 16,
                                "end": 66,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 16
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 66
                                    }
                                }
                            }
                        ],
                        "start": 0,
                        "end": 69,
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 0
                            },
                            "end": {
                                "line": 1,
                                "column": 69
                            }
                        }
                    }],
                    "sourceType": "script",
                    "start": 0,
                    "end": 69,
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 0
                        },
                        "end": {
                            "line": 1,
                            "column": 69
                        }
                    }
                }
            });
    
            pass(`function arguments() {}`, {
                source: 'function arguments() {}',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    "type": "Program",
                    "body": [{
                        "type": "FunctionDeclaration",
                        "params": [],
                        "body": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 21,
                            "end": 23,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 21
                                },
                                "end": {
                                    "line": 1,
                                    "column": 23
                                }
                            }
                        },
                        "async": false,
                        "generator": false,
                        "expression": false,
                        "id": {
                            "type": "Identifier",
                            "name": "arguments",
                            "start": 9,
                            "end": 18,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 9
                                },
                                "end": {
                                    "line": 1,
                                    "column": 18
                                }
                            }
                        },
                        "start": 0,
                        "end": 23,
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 0
                            },
                            "end": {
                                "line": 1,
                                "column": 23
                            }
                        }
                    }],
                    "sourceType": "script",
                    "start": 0,
                    "end": 23,
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 0
                        },
                        "end": {
                            "line": 1,
                            "column": 23
                        }
                    }
                }
            });
    
            pass(`try {  throw null;  } catch (f) {  {   function f() { return 123; }  }  }`, {
                source: 'try {  throw null;  } catch (f) {  {   function f() { return 123; }  }  }',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    "type": "Program",
                    "body": [{
                        "type": "TryStatement",
                        "block": {
                            "type": "BlockStatement",
                            "body": [{
                                "type": "ThrowStatement",
                                "argument": {
                                    "type": "Literal",
                                    "value": null,
                                    "start": 13,
                                    "end": 17,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 13
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 17
                                        }
                                    },
                                    "raw": "null"
                                },
                                "start": 7,
                                "end": 18,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 7
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 18
                                    }
                                }
                            }],
                            "start": 4,
                            "end": 21,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 4
                                },
                                "end": {
                                    "line": 1,
                                    "column": 21
                                }
                            }
                        },
                        "handler": {
                            "type": "CatchClause",
                            "param": {
                                "type": "Identifier",
                                "name": "f",
                                "start": 29,
                                "end": 30,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 29
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 30
                                    }
                                }
                            },
                            "body": {
                                "type": "BlockStatement",
                                "body": [{
                                    "type": "BlockStatement",
                                    "body": [{
                                        "type": "FunctionDeclaration",
                                        "params": [],
                                        "body": {
                                            "type": "BlockStatement",
                                            "body": [{
                                                "type": "ReturnStatement",
                                                "argument": {
                                                    "type": "Literal",
                                                    "value": 123,
                                                    "start": 61,
                                                    "end": 64,
                                                    "loc": {
                                                        "start": {
                                                            "line": 1,
                                                            "column": 61
                                                        },
                                                        "end": {
                                                            "line": 1,
                                                            "column": 64
                                                        }
                                                    },
                                                    "raw": "123"
                                                },
                                                "start": 54,
                                                "end": 65,
                                                "loc": {
                                                    "start": {
                                                        "line": 1,
                                                        "column": 54
                                                    },
                                                    "end": {
                                                        "line": 1,
                                                        "column": 65
                                                    }
                                                }
                                            }],
                                            "start": 52,
                                            "end": 67,
                                            "loc": {
                                                "start": {
                                                    "line": 1,
                                                    "column": 52
                                                },
                                                "end": {
                                                    "line": 1,
                                                    "column": 67
                                                }
                                            }
                                        },
                                        "async": false,
                                        "generator": false,
                                        "expression": false,
                                        "id": {
                                            "type": "Identifier",
                                            "name": "f",
                                            "start": 48,
                                            "end": 49,
                                            "loc": {
                                                "start": {
                                                    "line": 1,
                                                    "column": 48
                                                },
                                                "end": {
                                                    "line": 1,
                                                    "column": 49
                                                }
                                            }
                                        },
                                        "start": 39,
                                        "end": 67,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 39
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 67
                                            }
                                        }
                                    }],
                                    "start": 35,
                                    "end": 70,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 35
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 70
                                        }
                                    }
                                }],
                                "start": 32,
                                "end": 73,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 32
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 73
                                    }
                                }
                            },
                            "start": 22,
                            "end": 73,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 22
                                },
                                "end": {
                                    "line": 1,
                                    "column": 73
                                }
                            }
                        },
                        "finalizer": null,
                        "start": 0,
                        "end": 73,
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 0
                            },
                            "end": {
                                "line": 1,
                                "column": 73
                            }
                        }
                    }],
                    "sourceType": "script",
                    "start": 0,
                    "end": 73,
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 0
                        },
                        "end": {
                            "line": 1,
                            "column": 73
                        }
                    }
                }
            });
        });
        
        describe('Expressions - Yield', () => {
    
            pass(`var outer = (function*() { yield* iter; })();`, {
                source: 'var outer = (function*() { yield* iter; })();',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    "type": "Program",
                    "body": [{
                        "type": "VariableDeclaration",
                        "declarations": [{
                            "type": "VariableDeclarator",
                            "init": {
                                "type": "CallExpression",
                                "callee": {
                                    "type": "FunctionExpression",
                                    "params": [],
                                    "body": {
                                        "type": "BlockStatement",
                                        "body": [{
                                            "type": "ExpressionStatement",
                                            "expression": {
                                                "type": "YieldExpression",
                                                "argument": {
                                                    "type": "Identifier",
                                                    "name": "iter",
                                                    "start": 34,
                                                    "end": 38,
                                                    "loc": {
                                                        "start": {
                                                            "line": 1,
                                                            "column": 34
                                                        },
                                                        "end": {
                                                            "line": 1,
                                                            "column": 38
                                                        }
                                                    }
                                                },
                                                "delegate": true,
                                                "start": 27,
                                                "end": 38,
                                                "loc": {
                                                    "start": {
                                                        "line": 1,
                                                        "column": 27
                                                    },
                                                    "end": {
                                                        "line": 1,
                                                        "column": 38
                                                    }
                                                }
                                            },
                                            "start": 27,
                                            "end": 39,
                                            "loc": {
                                                "start": {
                                                    "line": 1,
                                                    "column": 27
                                                },
                                                "end": {
                                                    "line": 1,
                                                    "column": 39
                                                }
                                            }
                                        }],
                                        "start": 25,
                                        "end": 41,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 25
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 41
                                            }
                                        }
                                    },
                                    "async": false,
                                    "generator": true,
                                    "expression": false,
                                    "id": null,
                                    "start": 13,
                                    "end": 41,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 13
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 41
                                        }
                                    }
                                },
                                "arguments": [],
                                "start": 12,
                                "end": 44,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 12
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 44
                                    }
                                }
                            },
                            "id": {
                                "type": "Identifier",
                                "name": "outer",
                                "start": 4,
                                "end": 9,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 4
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 9
                                    }
                                }
                            },
                            "start": 4,
                            "end": 44,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 4
                                },
                                "end": {
                                    "line": 1,
                                    "column": 44
                                }
                            }
                        }],
                        "kind": "var",
                        "start": 0,
                        "end": 45,
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 0
                            },
                            "end": {
                                "line": 1,
                                "column": 45
                            }
                        }
                    }],
                    "sourceType": "script",
                    "start": 0,
                    "end": 45,
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 0
                        },
                        "end": {
                            "line": 1,
                            "column": 45
                        }
                    }
                }
            });
        });
    
        describe('Expressions - Object', () => {
    
            // fail(`({  __proto__: null,  other: null,  '__proto__': null });`, {
            //  source: `({  __proto__: null,  other: null,  '__proto__': null });`,
            //  });
    
            pass(`o = { __proto__: function() {} };`, {
                source: 'o = { __proto__: function() {} };',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    "type": "Program",
                    "body": [{
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "AssignmentExpression",
                            "left": {
                                "type": "Identifier",
                                "name": "o",
                                "start": 0,
                                "end": 1,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 0
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 1
                                    }
                                }
                            },
                            "operator": "=",
                            "right": {
                                "type": "ObjectExpression",
                                "properties": [{
                                    "type": "Property",
                                    "key": {
                                        "type": "Identifier",
                                        "name": "__proto__",
                                        "start": 6,
                                        "end": 15,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 6
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 15
                                            }
                                        }
                                    },
                                    "value": {
                                        "type": "FunctionExpression",
                                        "params": [],
                                        "body": {
                                            "type": "BlockStatement",
                                            "body": [],
                                            "start": 28,
                                            "end": 30,
                                            "loc": {
                                                "start": {
                                                    "line": 1,
                                                    "column": 28
                                                },
                                                "end": {
                                                    "line": 1,
                                                    "column": 30
                                                }
                                            }
                                        },
                                        "async": false,
                                        "generator": false,
                                        "expression": false,
                                        "id": null,
                                        "start": 17,
                                        "end": 30,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 17
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 30
                                            }
                                        }
                                    },
                                    "kind": "init",
                                    "computed": false,
                                    "method": false,
                                    "shorthand": false,
                                    "start": 6,
                                    "end": 30,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 6
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 30
                                        }
                                    }
                                }],
                                "start": 4,
                                "end": 32,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 4
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 32
                                    }
                                }
                            },
                            "start": 0,
                            "end": 32,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 0
                                },
                                "end": {
                                    "line": 1,
                                    "column": 32
                                }
                            }
                        },
                        "start": 0,
                        "end": 33,
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 0
                            },
                            "end": {
                                "line": 1,
                                "column": 33
                            }
                        }
                    }],
                    "sourceType": "script",
                    "start": 0,
                    "end": 33,
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 0
                        },
                        "end": {
                            "line": 1,
                            "column": 33
                        }
                    }
                }
            });
    
            pass(`obj = {  __proto__: proto,   ["__proto__"]: {},   ["__proto__"]: ownProp };`, {
                source: 'obj = {  __proto__: proto,   ["__proto__"]: {},   ["__proto__"]: ownProp };',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    "type": "Program",
                    "body": [{
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "AssignmentExpression",
                            "left": {
                                "type": "Identifier",
                                "name": "obj",
                                "start": 0,
                                "end": 3,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 0
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 3
                                    }
                                }
                            },
                            "operator": "=",
                            "right": {
                                "type": "ObjectExpression",
                                "properties": [{
                                        "type": "Property",
                                        "key": {
                                            "type": "Identifier",
                                            "name": "__proto__",
                                            "start": 9,
                                            "end": 18,
                                            "loc": {
                                                "start": {
                                                    "line": 1,
                                                    "column": 9
                                                },
                                                "end": {
                                                    "line": 1,
                                                    "column": 18
                                                }
                                            }
                                        },
                                        "value": {
                                            "type": "Identifier",
                                            "name": "proto",
                                            "start": 20,
                                            "end": 25,
                                            "loc": {
                                                "start": {
                                                    "line": 1,
                                                    "column": 20
                                                },
                                                "end": {
                                                    "line": 1,
                                                    "column": 25
                                                }
                                            }
                                        },
                                        "kind": "init",
                                        "computed": false,
                                        "method": false,
                                        "shorthand": false,
                                        "start": 9,
                                        "end": 25,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 9
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 25
                                            }
                                        }
                                    },
                                    {
                                        "type": "Property",
                                        "key": {
                                            "type": "Literal",
                                            "value": "__proto__",
                                            "start": 30,
                                            "end": 41,
                                            "loc": {
                                                "start": {
                                                    "line": 1,
                                                    "column": 30
                                                },
                                                "end": {
                                                    "line": 1,
                                                    "column": 41
                                                }
                                            },
                                            "raw": "\"__proto__\""
                                        },
                                        "value": {
                                            "type": "ObjectExpression",
                                            "properties": [],
                                            "start": 44,
                                            "end": 46,
                                            "loc": {
                                                "start": {
                                                    "line": 1,
                                                    "column": 44
                                                },
                                                "end": {
                                                    "line": 1,
                                                    "column": 46
                                                }
                                            }
                                        },
                                        "kind": "init",
                                        "computed": true,
                                        "method": false,
                                        "shorthand": false,
                                        "start": 29,
                                        "end": 46,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 29
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 46
                                            }
                                        }
                                    },
                                    {
                                        "type": "Property",
                                        "key": {
                                            "type": "Literal",
                                            "value": "__proto__",
                                            "start": 51,
                                            "end": 62,
                                            "loc": {
                                                "start": {
                                                    "line": 1,
                                                    "column": 51
                                                },
                                                "end": {
                                                    "line": 1,
                                                    "column": 62
                                                }
                                            },
                                            "raw": "\"__proto__\""
                                        },
                                        "value": {
                                            "type": "Identifier",
                                            "name": "ownProp",
                                            "start": 65,
                                            "end": 72,
                                            "loc": {
                                                "start": {
                                                    "line": 1,
                                                    "column": 65
                                                },
                                                "end": {
                                                    "line": 1,
                                                    "column": 72
                                                }
                                            }
                                        },
                                        "kind": "init",
                                        "computed": true,
                                        "method": false,
                                        "shorthand": false,
                                        "start": 50,
                                        "end": 72,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 50
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 72
                                            }
                                        }
                                    }
                                ],
                                "start": 6,
                                "end": 74,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 6
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 74
                                    }
                                }
                            },
                            "start": 0,
                            "end": 74,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 0
                                },
                                "end": {
                                    "line": 1,
                                    "column": 74
                                }
                            }
                        },
                        "start": 0,
                        "end": 75,
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 0
                            },
                            "end": {
                                "line": 1,
                                "column": 75
                            }
                        }
                    }],
                    "sourceType": "script",
                    "start": 0,
                    "end": 75,
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 0
                        },
                        "end": {
                            "line": 1,
                            "column": 75
                        }
                    }
                }
            });
    
            pass(`o = { __proto__: undefined };`, {
                source: 'o = { __proto__: undefined };',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    "type": "Program",
                    "body": [{
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "AssignmentExpression",
                            "left": {
                                "type": "Identifier",
                                "name": "o",
                                "start": 0,
                                "end": 1,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 0
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 1
                                    }
                                }
                            },
                            "operator": "=",
                            "right": {
                                "type": "ObjectExpression",
                                "properties": [{
                                    "type": "Property",
                                    "key": {
                                        "type": "Identifier",
                                        "name": "__proto__",
                                        "start": 6,
                                        "end": 15,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 6
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 15
                                            }
                                        }
                                    },
                                    "value": {
                                        "type": "Identifier",
                                        "name": "undefined",
                                        "start": 17,
                                        "end": 26,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 17
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 26
                                            }
                                        }
                                    },
                                    "kind": "init",
                                    "computed": false,
                                    "method": false,
                                    "shorthand": false,
                                    "start": 6,
                                    "end": 26,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 6
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 26
                                        }
                                    }
                                }],
                                "start": 4,
                                "end": 28,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 4
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 28
                                    }
                                }
                            },
                            "start": 0,
                            "end": 28,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 0
                                },
                                "end": {
                                    "line": 1,
                                    "column": 28
                                }
                            }
                        },
                        "start": 0,
                        "end": 29,
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 0
                            },
                            "end": {
                                "line": 1,
                                "column": 29
                            }
                        }
                    }],
                    "sourceType": "script",
                    "start": 0,
                    "end": 29,
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 0
                        },
                        "end": {
                            "line": 1,
                            "column": 29
                        }
                    }
                }
            });
    
            pass(`o = { __proto__: 1 };`, {
                source: 'o = { __proto__: 1 };',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    "type": "Program",
                    "body": [{
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "AssignmentExpression",
                            "left": {
                                "type": "Identifier",
                                "name": "o",
                                "start": 0,
                                "end": 1,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 0
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 1
                                    }
                                }
                            },
                            "operator": "=",
                            "right": {
                                "type": "ObjectExpression",
                                "properties": [{
                                    "type": "Property",
                                    "key": {
                                        "type": "Identifier",
                                        "name": "__proto__",
                                        "start": 6,
                                        "end": 15,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 6
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 15
                                            }
                                        }
                                    },
                                    "value": {
                                        "type": "Literal",
                                        "value": 1,
                                        "start": 17,
                                        "end": 18,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 17
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 18
                                            }
                                        },
                                        "raw": "1"
                                    },
                                    "kind": "init",
                                    "computed": false,
                                    "method": false,
                                    "shorthand": false,
                                    "start": 6,
                                    "end": 18,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 6
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 18
                                        }
                                    }
                                }],
                                "start": 4,
                                "end": 20,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 4
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 20
                                    }
                                }
                            },
                            "start": 0,
                            "end": 20,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 0
                                },
                                "end": {
                                    "line": 1,
                                    "column": 20
                                }
                            }
                        },
                        "start": 0,
                        "end": 21,
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 0
                            },
                            "end": {
                                "line": 1,
                                "column": 21
                            }
                        }
                    }],
                    "sourceType": "script",
                    "start": 0,
                    "end": 21,
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 0
                        },
                        "end": {
                            "line": 1,
                            "column": 21
                        }
                    }
                }
            });
    
            pass(`o = {  __proto__: proto };`, {
                source: 'o = {  __proto__: proto };',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    "type": "Program",
                    "body": [{
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "AssignmentExpression",
                            "left": {
                                "type": "Identifier",
                                "name": "o",
                                "start": 0,
                                "end": 1,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 0
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 1
                                    }
                                }
                            },
                            "operator": "=",
                            "right": {
                                "type": "ObjectExpression",
                                "properties": [{
                                    "type": "Property",
                                    "key": {
                                        "type": "Identifier",
                                        "name": "__proto__",
                                        "start": 7,
                                        "end": 16,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 7
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 16
                                            }
                                        }
                                    },
                                    "value": {
                                        "type": "Identifier",
                                        "name": "proto",
                                        "start": 18,
                                        "end": 23,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 18
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 23
                                            }
                                        }
                                    },
                                    "kind": "init",
                                    "computed": false,
                                    "method": false,
                                    "shorthand": false,
                                    "start": 7,
                                    "end": 23,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 7
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 23
                                        }
                                    }
                                }],
                                "start": 4,
                                "end": 25,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 4
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 25
                                    }
                                }
                            },
                            "start": 0,
                            "end": 25,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 0
                                },
                                "end": {
                                    "line": 1,
                                    "column": 25
                                }
                            }
                        },
                        "start": 0,
                        "end": 26,
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 0
                            },
                            "end": {
                                "line": 1,
                                "column": 26
                            }
                        }
                    }],
                    "sourceType": "script",
                    "start": 0,
                    "end": 26,
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 0
                        },
                        "end": {
                            "line": 1,
                            "column": 26
                        }
                    }
                }
            });
    
            pass(`o = { __proto__: null };`, {
                source: 'o = { __proto__: null };',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    "type": "Program",
                    "body": [{
                        "type": "ExpressionStatement",
                        "expression": {
                            "type": "AssignmentExpression",
                            "left": {
                                "type": "Identifier",
                                "name": "o",
                                "start": 0,
                                "end": 1,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 0
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 1
                                    }
                                }
                            },
                            "operator": "=",
                            "right": {
                                "type": "ObjectExpression",
                                "properties": [{
                                    "type": "Property",
                                    "key": {
                                        "type": "Identifier",
                                        "name": "__proto__",
                                        "start": 6,
                                        "end": 15,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 6
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 15
                                            }
                                        }
                                    },
                                    "value": {
                                        "type": "Literal",
                                        "value": null,
                                        "start": 17,
                                        "end": 21,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 17
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 21
                                            }
                                        },
                                        "raw": "null"
                                    },
                                    "kind": "init",
                                    "computed": false,
                                    "method": false,
                                    "shorthand": false,
                                    "start": 6,
                                    "end": 21,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 6
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 21
                                        }
                                    }
                                }],
                                "start": 4,
                                "end": 23,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 4
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 23
                                    }
                                }
                            },
                            "start": 0,
                            "end": 23,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 0
                                },
                                "end": {
                                    "line": 1,
                                    "column": 23
                                }
                            }
                        },
                        "start": 0,
                        "end": 24,
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 0
                            },
                            "end": {
                                "line": 1,
                                "column": 24
                            }
                        }
                    }],
                    "sourceType": "script",
                    "start": 0,
                    "end": 24,
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 0
                        },
                        "end": {
                            "line": 1,
                            "column": 24
                        }
                    }
                }
            });
        });
    
        describe('B.3.2', () => {
    
            fail(`"use strict"; label: function f(){}`, {
                source: `"use strict"; label: function f(){}`,
            });
        });
    
        describe('B.3.4', () => {
            //        fail('for(;;) function a(){}', 'for(;;) function a(){}');
            //        fail('for(a in b) function c(){}', 'for(a in b) function c(){}');
    
            fail(`"use strict"; if (0) function f(){}`, {
                source: `"use strict"; if (0) function f(){}`,
            });
    
            fail(`"use strict";  if (0) function f(){} else;`, {
                source: `"use strict";  if (0) function f(){} else;`,
            });
    
            fail(`"use strict"; if (0); else function f(){}`, {
                source: `"use strict"; if (0); else function f(){}`,
            });

            fail(`"use strict"; if (0); else function f(){}`, {
                source: `"use strict"; label foo: function f(){}`,
            });
    
            fail(`while(true) function a(){}`, {
                source: `while(true) function a(){}`,
            });
    
            fail(`with(true) function a(){}`, {
                source: `with(true) function a(){}`,
            });
        });
    
        describe('Statements - If', () => {
            fail(`try {} catch(e) { let e; }`, {
                source: `try {} catch(e) { let e; }`,
            });
        });
    
        describe('B.3.5', () => {
    
           // fail(`try {} catch(e) { for(var e of 0); }`, {
             //   source: `try {} catch(e) { for(var e of 0); }`,
           // });
    
            fail(`try {} catch(e) { let e; }`, {
                source: `try {} catch(e) { let e; }`,
            });
    
            fail(`try {} catch (foo) { let foo; }`, {
                source: `try {} catch (foo) { let foo; }`,
            });
    
            fail(`try {} catch (foo) { let foo; }`, {
                source: `try {} catch (foo) { let foo; }`,
            });
    
            fail(`try { } catch (x) { let x; }`, {
                source: `try { } catch (x) { let x; }`,
            });
    
            fail(`let foo; try {} catch (foo) {} let foo;`, {
                source: `let foo; try {} catch (foo) {} let foo;`,
            });
    
           // fail(`try {} catch(e) { for(var e of 0); }`, {
             //   source: `try {} catch(e) { for(var e of 0); }`,
            //});
    
            fail(`try {} catch(e) { function e(){} }`, {
                source: `try {} catch(e) { function e(){} }`,
            });
    
            // fail(`try {} catch (foo) { var foo; }`, {
               //  source: `try {} catch (foo) { var foo; }`,
            // });
    
            fail(`try {} catch(e) { function e(){} }`, {
                source: `try {} catch(e) { function e(){} }`,
            });
    
            // fail(`try {} catch ({ a: foo, b: { c: [foo] } }) {}`, {
            //     source: `try {} catch ({ a: foo, b: { c: [foo] } }) {}`,
            // });
    
            fail(`try {} catch (foo) { function foo() {} }`, {
                source: `try {} catch (foo) { function foo() {} }`,
            });
    
            // fail(`try { } catch ([x, x]) {}`, {
               //  source: `try { } catch ([x, x]) {}`,
            // });
    
            pass(`try {} catch ({ foo }) { var foo; }`, {
                source: 'try {} catch ({ foo }) { var foo; }',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    "type": "Program",
                    "body": [{
                        "type": "TryStatement",
                        "block": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 4,
                            "end": 6,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 4
                                },
                                "end": {
                                    "line": 1,
                                    "column": 6
                                }
                            }
                        },
                        "handler": {
                            "type": "CatchClause",
                            "param": {
                                "type": "ObjectPattern",
                                "properties": [{
                                    "type": "Property",
                                    "kind": "init",
                                    "key": {
                                        "type": "Identifier",
                                        "name": "foo",
                                        "start": 16,
                                        "end": 19,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 16
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 19
                                            }
                                        }
                                    },
                                    "computed": false,
                                    "value": {
                                        "type": "Identifier",
                                        "name": "foo",
                                        "start": 16,
                                        "end": 19,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 16
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 19
                                            }
                                        }
                                    },
                                    "method": false,
                                    "shorthand": true,
                                    "start": 16,
                                    "end": 19,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 16
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 19
                                        }
                                    }
                                }],
                                "start": 14,
                                "end": 21,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 14
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 21
                                    }
                                }
                            },
                            "body": {
                                "type": "BlockStatement",
                                "body": [{
                                    "type": "VariableDeclaration",
                                    "declarations": [{
                                        "type": "VariableDeclarator",
                                        "init": null,
                                        "id": {
                                            "type": "Identifier",
                                            "name": "foo",
                                            "start": 29,
                                            "end": 32,
                                            "loc": {
                                                "start": {
                                                    "line": 1,
                                                    "column": 29
                                                },
                                                "end": {
                                                    "line": 1,
                                                    "column": 32
                                                }
                                            }
                                        },
                                        "start": 29,
                                        "end": 32,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 29
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 32
                                            }
                                        }
                                    }],
                                    "kind": "var",
                                    "start": 25,
                                    "end": 33,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 25
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 33
                                        }
                                    }
                                }],
                                "start": 23,
                                "end": 35,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 23
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 35
                                    }
                                }
                            },
                            "start": 7,
                            "end": 35,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 7
                                },
                                "end": {
                                    "line": 1,
                                    "column": 35
                                }
                            }
                        },
                        "finalizer": null,
                        "start": 0,
                        "end": 35,
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 0
                            },
                            "end": {
                                "line": 1,
                                "column": 35
                            }
                        }
                    }],
                    "sourceType": "script",
                    "start": 0,
                    "end": 35,
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 0
                        },
                        "end": {
                            "line": 1,
                            "column": 35
                        }
                    }
                }
            });
    
            pass(`try { throw null; } catch (f) { { function f() { return 123; } } }`, {
                source: 'try { throw null; } catch (f) { { function f() { return 123; } } }',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    "type": "Program",
                    "body": [{
                        "type": "TryStatement",
                        "block": {
                            "type": "BlockStatement",
                            "body": [{
                                "type": "ThrowStatement",
                                "argument": {
                                    "type": "Literal",
                                    "value": null,
                                    "start": 12,
                                    "end": 16,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 12
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 16
                                        }
                                    },
                                    "raw": "null"
                                },
                                "start": 6,
                                "end": 17,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 6
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 17
                                    }
                                }
                            }],
                            "start": 4,
                            "end": 19,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 4
                                },
                                "end": {
                                    "line": 1,
                                    "column": 19
                                }
                            }
                        },
                        "handler": {
                            "type": "CatchClause",
                            "param": {
                                "type": "Identifier",
                                "name": "f",
                                "start": 27,
                                "end": 28,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 27
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 28
                                    }
                                }
                            },
                            "body": {
                                "type": "BlockStatement",
                                "body": [{
                                    "type": "BlockStatement",
                                    "body": [{
                                        "type": "FunctionDeclaration",
                                        "params": [],
                                        "body": {
                                            "type": "BlockStatement",
                                            "body": [{
                                                "type": "ReturnStatement",
                                                "argument": {
                                                    "type": "Literal",
                                                    "value": 123,
                                                    "start": 56,
                                                    "end": 59,
                                                    "loc": {
                                                        "start": {
                                                            "line": 1,
                                                            "column": 56
                                                        },
                                                        "end": {
                                                            "line": 1,
                                                            "column": 59
                                                        }
                                                    },
                                                    "raw": "123"
                                                },
                                                "start": 49,
                                                "end": 60,
                                                "loc": {
                                                    "start": {
                                                        "line": 1,
                                                        "column": 49
                                                    },
                                                    "end": {
                                                        "line": 1,
                                                        "column": 60
                                                    }
                                                }
                                            }],
                                            "start": 47,
                                            "end": 62,
                                            "loc": {
                                                "start": {
                                                    "line": 1,
                                                    "column": 47
                                                },
                                                "end": {
                                                    "line": 1,
                                                    "column": 62
                                                }
                                            }
                                        },
                                        "async": false,
                                        "generator": false,
                                        "expression": false,
                                        "id": {
                                            "type": "Identifier",
                                            "name": "f",
                                            "start": 43,
                                            "end": 44,
                                            "loc": {
                                                "start": {
                                                    "line": 1,
                                                    "column": 43
                                                },
                                                "end": {
                                                    "line": 1,
                                                    "column": 44
                                                }
                                            }
                                        },
                                        "start": 34,
                                        "end": 62,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 34
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 62
                                            }
                                        }
                                    }],
                                    "start": 32,
                                    "end": 64,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 32
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 64
                                        }
                                    }
                                }],
                                "start": 30,
                                "end": 66,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 30
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 66
                                    }
                                }
                            },
                            "start": 20,
                            "end": 66,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 20
                                },
                                "end": {
                                    "line": 1,
                                    "column": 66
                                }
                            }
                        },
                        "finalizer": null,
                        "start": 0,
                        "end": 66,
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 0
                            },
                            "end": {
                                "line": 1,
                                "column": 66
                            }
                        }
                    }],
                    "sourceType": "script",
                    "start": 0,
                    "end": 66,
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 0
                        },
                        "end": {
                            "line": 1,
                            "column": 66
                        }
                    }
                }
            }); 
    
            pass(`try {} catch (a) { if(1) function a(){} }`, {
                source: 'try {} catch (a) { if(1) function a(){} }',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    "type": "Program",
                    "body": [{
                        "type": "TryStatement",
                        "block": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 4,
                            "end": 6,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 4
                                },
                                "end": {
                                    "line": 1,
                                    "column": 6
                                }
                            }
                        },
                        "handler": {
                            "type": "CatchClause",
                            "param": {
                                "type": "Identifier",
                                "name": "a",
                                "start": 14,
                                "end": 15,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 14
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 15
                                    }
                                }
                            },
                            "body": {
                                "type": "BlockStatement",
                                "body": [{
                                    "type": "IfStatement",
                                    "test": {
                                        "type": "Literal",
                                        "value": 1,
                                        "start": 22,
                                        "end": 23,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 22
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 23
                                            }
                                        },
                                        "raw": "1"
                                    },
                                    "alternate": null,
                                    "consequent": {
                                        "type": "FunctionDeclaration",
                                        "params": [],
                                        "body": {
                                            "type": "BlockStatement",
                                            "body": [],
                                            "start": 37,
                                            "end": 39,
                                            "loc": {
                                                "start": {
                                                    "line": 1,
                                                    "column": 37
                                                },
                                                "end": {
                                                    "line": 1,
                                                    "column": 39
                                                }
                                            }
                                        },
                                        "async": false,
                                        "generator": false,
                                        "expression": false,
                                        "id": {
                                            "type": "Identifier",
                                            "name": "a",
                                            "start": 34,
                                            "end": 35,
                                            "loc": {
                                                "start": {
                                                    "line": 1,
                                                    "column": 34
                                                },
                                                "end": {
                                                    "line": 1,
                                                    "column": 35
                                                }
                                            }
                                        },
                                        "start": 25,
                                        "end": 39,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 25
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 39
                                            }
                                        }
                                    },
                                    "start": 19,
                                    "end": 39,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 19
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 39
                                        }
                                    }
                                }],
                                "start": 17,
                                "end": 41,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 17
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 41
                                    }
                                }
                            },
                            "start": 7,
                            "end": 41,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 7
                                },
                                "end": {
                                    "line": 1,
                                    "column": 41
                                }
                            }
                        },
                        "finalizer": null,
                        "start": 0,
                        "end": 41,
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 0
                            },
                            "end": {
                                "line": 1,
                                "column": 41
                            }
                        }
                    }],
                    "sourceType": "script",
                    "start": 0,
                    "end": 41,
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 0
                        },
                        "end": {
                            "line": 1,
                            "column": 41
                        }
                    }
                }
            });
    
            pass(` { function f() {  return 'first declaration';   } }  {  function f() { return 'second declaration'; } }`, {
                source: '{ function f() {  return "first declaration";   } }  {  function f() { return "second declaration"; } }',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    "type": "Program",
                    "body": [{
                            "type": "BlockStatement",
                            "body": [{
                                "type": "FunctionDeclaration",
                                "params": [],
                                "body": {
                                    "type": "BlockStatement",
                                    "body": [{
                                        "type": "ReturnStatement",
                                        "argument": {
                                            "type": "Literal",
                                            "value": "first declaration",
                                            "start": 25,
                                            "end": 44,
                                            "loc": {
                                                "start": {
                                                    "line": 1,
                                                    "column": 25
                                                },
                                                "end": {
                                                    "line": 1,
                                                    "column": 44
                                                }
                                            },
                                            "raw": "\"first declaration\""
                                        },
                                        "start": 18,
                                        "end": 45,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 18
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 45
                                            }
                                        }
                                    }],
                                    "start": 15,
                                    "end": 49,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 15
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 49
                                        }
                                    }
                                },
                                "async": false,
                                "generator": false,
                                "expression": false,
                                "id": {
                                    "type": "Identifier",
                                    "name": "f",
                                    "start": 11,
                                    "end": 12,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 11
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 12
                                        }
                                    }
                                },
                                "start": 2,
                                "end": 49,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 2
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 49
                                    }
                                }
                            }],
                            "start": 0,
                            "end": 51,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 0
                                },
                                "end": {
                                    "line": 1,
                                    "column": 51
                                }
                            }
                        },
                        {
                            "type": "BlockStatement",
                            "body": [{
                                "type": "FunctionDeclaration",
                                "params": [],
                                "body": {
                                    "type": "BlockStatement",
                                    "body": [{
                                        "type": "ReturnStatement",
                                        "argument": {
                                            "type": "Literal",
                                            "value": "second declaration",
                                            "start": 78,
                                            "end": 98,
                                            "loc": {
                                                "start": {
                                                    "line": 1,
                                                    "column": 78
                                                },
                                                "end": {
                                                    "line": 1,
                                                    "column": 98
                                                }
                                            },
                                            "raw": "\"second declaration\""
                                        },
                                        "start": 71,
                                        "end": 99,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 71
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 99
                                            }
                                        }
                                    }],
                                    "start": 69,
                                    "end": 101,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 69
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 101
                                        }
                                    }
                                },
                                "async": false,
                                "generator": false,
                                "expression": false,
                                "id": {
                                    "type": "Identifier",
                                    "name": "f",
                                    "start": 65,
                                    "end": 66,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 65
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 66
                                        }
                                    }
                                },
                                "start": 56,
                                "end": 101,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 56
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 101
                                    }
                                }
                            }],
                            "start": 53,
                            "end": 103,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 53
                                },
                                "end": {
                                    "line": 1,
                                    "column": 103
                                }
                            }
                        }
                    ],
                    "sourceType": "script",
                    "start": 0,
                    "end": 103,
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 0
                        },
                        "end": {
                            "line": 1,
                            "column": 103
                        }
                    }
                }
            });
    
            pass(`{  function f() { return 'function declaration'; }  }  after = f;  var f = 123;`, {
                source: '{  function f() { return "function declaration"; }  }  after = f;  var f = 123;',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    "type": "Program",
                    "body": [{
                            "type": "BlockStatement",
                            "body": [{
                                "type": "FunctionDeclaration",
                                "params": [],
                                "body": {
                                    "type": "BlockStatement",
                                    "body": [{
                                        "type": "ReturnStatement",
                                        "argument": {
                                            "type": "Literal",
                                            "value": "function declaration",
                                            "start": 25,
                                            "end": 47,
                                            "loc": {
                                                "start": {
                                                    "line": 1,
                                                    "column": 25
                                                },
                                                "end": {
                                                    "line": 1,
                                                    "column": 47
                                                }
                                            },
                                            "raw": "\"function declaration\""
                                        },
                                        "start": 18,
                                        "end": 48,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 18
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 48
                                            }
                                        }
                                    }],
                                    "start": 16,
                                    "end": 50,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 16
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 50
                                        }
                                    }
                                },
                                "async": false,
                                "generator": false,
                                "expression": false,
                                "id": {
                                    "type": "Identifier",
                                    "name": "f",
                                    "start": 12,
                                    "end": 13,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 12
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 13
                                        }
                                    }
                                },
                                "start": 3,
                                "end": 50,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 3
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 50
                                    }
                                }
                            }],
                            "start": 0,
                            "end": 53,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 0
                                },
                                "end": {
                                    "line": 1,
                                    "column": 53
                                }
                            }
                        },
                        {
                            "type": "ExpressionStatement",
                            "expression": {
                                "type": "AssignmentExpression",
                                "left": {
                                    "type": "Identifier",
                                    "name": "after",
                                    "start": 55,
                                    "end": 60,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 55
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 60
                                        }
                                    }
                                },
                                "operator": "=",
                                "right": {
                                    "type": "Identifier",
                                    "name": "f",
                                    "start": 63,
                                    "end": 64,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 63
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 64
                                        }
                                    }
                                },
                                "start": 55,
                                "end": 64,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 55
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 64
                                    }
                                }
                            },
                            "start": 55,
                            "end": 65,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 55
                                },
                                "end": {
                                    "line": 1,
                                    "column": 65
                                }
                            }
                        },
                        {
                            "type": "VariableDeclaration",
                            "declarations": [{
                                "type": "VariableDeclarator",
                                "init": {
                                    "type": "Literal",
                                    "value": 123,
                                    "start": 75,
                                    "end": 78,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 75
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 78
                                        }
                                    },
                                    "raw": "123"
                                },
                                "id": {
                                    "type": "Identifier",
                                    "name": "f",
                                    "start": 71,
                                    "end": 72,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 71
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 72
                                        }
                                    }
                                },
                                "start": 71,
                                "end": 78,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 71
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 78
                                    }
                                }
                            }],
                            "kind": "var",
                            "start": 67,
                            "end": 79,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 67
                                },
                                "end": {
                                    "line": 1,
                                    "column": 79
                                }
                            }
                        }
                    ],
                    "sourceType": "script",
                    "start": 0,
                    "end": 79,
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 0
                        },
                        "end": {
                            "line": 1,
                            "column": 79
                        }
                    }
                }
            });
    
            pass(` try {  throw null;  } catch (f) {  if (false) function _f() {} else function f() { return 123; }  }`, {
                source: ' try {  throw null;  } catch (f) {  if (false) function _f() {} else function f() { return 123; }  }',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    "type": "Program",
                    "body": [{
                        "type": "TryStatement",
                        "block": {
                            "type": "BlockStatement",
                            "body": [{
                                "type": "ThrowStatement",
                                "argument": {
                                    "type": "Literal",
                                    "value": null,
                                    "start": 14,
                                    "end": 18,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 14
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 18
                                        }
                                    },
                                    "raw": "null"
                                },
                                "start": 8,
                                "end": 19,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 8
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 19
                                    }
                                }
                            }],
                            "start": 5,
                            "end": 22,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 5
                                },
                                "end": {
                                    "line": 1,
                                    "column": 22
                                }
                            }
                        },
                        "handler": {
                            "type": "CatchClause",
                            "param": {
                                "type": "Identifier",
                                "name": "f",
                                "start": 30,
                                "end": 31,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 30
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 31
                                    }
                                }
                            },
                            "body": {
                                "type": "BlockStatement",
                                "body": [{
                                    "type": "IfStatement",
                                    "test": {
                                        "type": "Literal",
                                        "value": false,
                                        "start": 40,
                                        "end": 45,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 40
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 45
                                            }
                                        },
                                        "raw": "false"
                                    },
                                    "alternate": {
                                        "type": "FunctionDeclaration",
                                        "params": [],
                                        "body": {
                                            "type": "BlockStatement",
                                            "body": [{
                                                "type": "ReturnStatement",
                                                "argument": {
                                                    "type": "Literal",
                                                    "value": 123,
                                                    "start": 91,
                                                    "end": 94,
                                                    "loc": {
                                                        "start": {
                                                            "line": 1,
                                                            "column": 91
                                                        },
                                                        "end": {
                                                            "line": 1,
                                                            "column": 94
                                                        }
                                                    },
                                                    "raw": "123"
                                                },
                                                "start": 84,
                                                "end": 95,
                                                "loc": {
                                                    "start": {
                                                        "line": 1,
                                                        "column": 84
                                                    },
                                                    "end": {
                                                        "line": 1,
                                                        "column": 95
                                                    }
                                                }
                                            }],
                                            "start": 82,
                                            "end": 97,
                                            "loc": {
                                                "start": {
                                                    "line": 1,
                                                    "column": 82
                                                },
                                                "end": {
                                                    "line": 1,
                                                    "column": 97
                                                }
                                            }
                                        },
                                        "async": false,
                                        "generator": false,
                                        "expression": false,
                                        "id": {
                                            "type": "Identifier",
                                            "name": "f",
                                            "start": 78,
                                            "end": 79,
                                            "loc": {
                                                "start": {
                                                    "line": 1,
                                                    "column": 78
                                                },
                                                "end": {
                                                    "line": 1,
                                                    "column": 79
                                                }
                                            }
                                        },
                                        "start": 69,
                                        "end": 97,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 69
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 97
                                            }
                                        }
                                    },
                                    "consequent": {
                                        "type": "FunctionDeclaration",
                                        "params": [],
                                        "body": {
                                            "type": "BlockStatement",
                                            "body": [],
                                            "start": 61,
                                            "end": 63,
                                            "loc": {
                                                "start": {
                                                    "line": 1,
                                                    "column": 61
                                                },
                                                "end": {
                                                    "line": 1,
                                                    "column": 63
                                                }
                                            }
                                        },
                                        "async": false,
                                        "generator": false,
                                        "expression": false,
                                        "id": {
                                            "type": "Identifier",
                                            "name": "_f",
                                            "start": 56,
                                            "end": 58,
                                            "loc": {
                                                "start": {
                                                    "line": 1,
                                                    "column": 56
                                                },
                                                "end": {
                                                    "line": 1,
                                                    "column": 58
                                                }
                                            }
                                        },
                                        "start": 47,
                                        "end": 63,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 47
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 63
                                            }
                                        }
                                    },
                                    "start": 36,
                                    "end": 97,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 36
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 97
                                        }
                                    }
                                }],
                                "start": 33,
                                "end": 100,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 33
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 100
                                    }
                                }
                            },
                            "start": 23,
                            "end": 100,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 23
                                },
                                "end": {
                                    "line": 1,
                                    "column": 100
                                }
                            }
                        },
                        "finalizer": null,
                        "start": 1,
                        "end": 100,
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 1
                            },
                            "end": {
                                "line": 1,
                                "column": 100
                            }
                        }
                    }],
                    "sourceType": "script",
                    "start": 0,
                    "end": 100,
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 0
                        },
                        "end": {
                            "line": 1,
                            "column": 100
                        }
                    }
                }
            });
    
            pass(`try {} catch (foo) { try {} catch (_) { var foo; } }`, {
                source: 'try {} catch (foo) { try {} catch (_) { var foo; } }',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    "type": "Program",
                    "body": [{
                        "type": "TryStatement",
                        "block": {
                            "type": "BlockStatement",
                            "body": [],
                            "start": 4,
                            "end": 6,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 4
                                },
                                "end": {
                                    "line": 1,
                                    "column": 6
                                }
                            }
                        },
                        "handler": {
                            "type": "CatchClause",
                            "param": {
                                "type": "Identifier",
                                "name": "foo",
                                "start": 14,
                                "end": 17,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 14
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 17
                                    }
                                }
                            },
                            "body": {
                                "type": "BlockStatement",
                                "body": [{
                                    "type": "TryStatement",
                                    "block": {
                                        "type": "BlockStatement",
                                        "body": [],
                                        "start": 25,
                                        "end": 27,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 25
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 27
                                            }
                                        }
                                    },
                                    "handler": {
                                        "type": "CatchClause",
                                        "param": {
                                            "type": "Identifier",
                                            "name": "_",
                                            "start": 35,
                                            "end": 36,
                                            "loc": {
                                                "start": {
                                                    "line": 1,
                                                    "column": 35
                                                },
                                                "end": {
                                                    "line": 1,
                                                    "column": 36
                                                }
                                            }
                                        },
                                        "body": {
                                            "type": "BlockStatement",
                                            "body": [{
                                                "type": "VariableDeclaration",
                                                "declarations": [{
                                                    "type": "VariableDeclarator",
                                                    "init": null,
                                                    "id": {
                                                        "type": "Identifier",
                                                        "name": "foo",
                                                        "start": 44,
                                                        "end": 47,
                                                        "loc": {
                                                            "start": {
                                                                "line": 1,
                                                                "column": 44
                                                            },
                                                            "end": {
                                                                "line": 1,
                                                                "column": 47
                                                            }
                                                        }
                                                    },
                                                    "start": 44,
                                                    "end": 47,
                                                    "loc": {
                                                        "start": {
                                                            "line": 1,
                                                            "column": 44
                                                        },
                                                        "end": {
                                                            "line": 1,
                                                            "column": 47
                                                        }
                                                    }
                                                }],
                                                "kind": "var",
                                                "start": 40,
                                                "end": 48,
                                                "loc": {
                                                    "start": {
                                                        "line": 1,
                                                        "column": 40
                                                    },
                                                    "end": {
                                                        "line": 1,
                                                        "column": 48
                                                    }
                                                }
                                            }],
                                            "start": 38,
                                            "end": 50,
                                            "loc": {
                                                "start": {
                                                    "line": 1,
                                                    "column": 38
                                                },
                                                "end": {
                                                    "line": 1,
                                                    "column": 50
                                                }
                                            }
                                        },
                                        "start": 28,
                                        "end": 50,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 28
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 50
                                            }
                                        }
                                    },
                                    "finalizer": null,
                                    "start": 21,
                                    "end": 50,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 21
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 50
                                        }
                                    }
                                }],
                                "start": 19,
                                "end": 52,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 19
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 52
                                    }
                                }
                            },
                            "start": 7,
                            "end": 52,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 7
                                },
                                "end": {
                                    "line": 1,
                                    "column": 52
                                }
                            }
                        },
                        "finalizer": null,
                        "start": 0,
                        "end": 52,
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 0
                            },
                            "end": {
                                "line": 1,
                                "column": 52
                            }
                        }
                    }],
                    "sourceType": "script",
                    "start": 0,
                    "end": 52,
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 0
                        },
                        "end": {
                            "line": 1,
                            "column": 52
                        }
                    }
                }
            });
    
            pass(`"use strict"; let foo = function foo() {}`, {
                source: '"use strict"; let foo = function foo() {}',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    "type": "Program",
                    "body": [{
                            "type": "ExpressionStatement",
                            "expression": {
                                "type": "Literal",
                                "value": "use strict",
                                "start": 0,
                                "end": 12,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 0
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 12
                                    }
                                },
                                "raw": "\"use strict\""
                            },
                            "start": 0,
                            "end": 13,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 0
                                },
                                "end": {
                                    "line": 1,
                                    "column": 13
                                }
                            }
                        },
                        {
                            "type": "VariableDeclaration",
                            "declarations": [{
                                "type": "VariableDeclarator",
                                "init": {
                                    "type": "FunctionExpression",
                                    "params": [],
                                    "body": {
                                        "type": "BlockStatement",
                                        "body": [],
                                        "start": 39,
                                        "end": 41,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 39
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 41
                                            }
                                        }
                                    },
                                    "async": false,
                                    "generator": false,
                                    "expression": false,
                                    "id": {
                                        "type": "Identifier",
                                        "name": "foo",
                                        "start": 33,
                                        "end": 36,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 33
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 36
                                            }
                                        }
                                    },
                                    "start": 24,
                                    "end": 41,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 24
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 41
                                        }
                                    }
                                },
                                "id": {
                                    "type": "Identifier",
                                    "name": "foo",
                                    "start": 18,
                                    "end": 21,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 18
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 21
                                        }
                                    }
                                },
                                "start": 18,
                                "end": 41,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 18
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 41
                                    }
                                }
                            }],
                            "kind": "let",
                            "start": 14,
                            "end": 41,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 14
                                },
                                "end": {
                                    "line": 1,
                                    "column": 41
                                }
                            }
                        }
                    ],
                    "sourceType": "script",
                    "start": 0,
                    "end": 41,
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 0
                        },
                        "end": {
                            "line": 1,
                            "column": 41
                        }
                    }
                }
            });
    
            pass(`try {} catch (foo) { function x() { var foo; } }`, {
                source: 'try {} catch (foo) { function x() { var foo; } }',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    "type": "Program",
                    "start": 0,
                    "end": 48,
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 0
                        },
                        "end": {
                            "line": 1,
                            "column": 48
                        }
                    },
                    "body": [{
                        "type": "TryStatement",
                        "start": 0,
                        "end": 48,
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 0
                            },
                            "end": {
                                "line": 1,
                                "column": 48
                            }
                        },
                        "block": {
                            "type": "BlockStatement",
                            "start": 4,
                            "end": 6,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 4
                                },
                                "end": {
                                    "line": 1,
                                    "column": 6
                                }
                            },
                            "body": []
                        },
                        "handler": {
                            "type": "CatchClause",
                            "start": 7,
                            "end": 48,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 7
                                },
                                "end": {
                                    "line": 1,
                                    "column": 48
                                }
                            },
                            "param": {
                                "type": "Identifier",
                                "start": 14,
                                "end": 17,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 14
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 17
                                    }
                                },
                                "name": "foo"
                            },
                            "body": {
                                "type": "BlockStatement",
                                "start": 19,
                                "end": 48,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 19
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 48
                                    }
                                },
                                "body": [{
                                    "type": "FunctionDeclaration",
                                    "start": 21,
                                    "end": 46,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 21
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 46
                                        }
                                    },
                                    "id": {
                                        "type": "Identifier",
                                        "start": 30,
                                        "end": 31,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 30
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 31
                                            }
                                        },
                                        "name": "x"
                                    },
                                    "generator": false,
                                    "expression": false,
                                    "async": false,
                                    "params": [],
                                    "body": {
                                        "type": "BlockStatement",
                                        "start": 34,
                                        "end": 46,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 34
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 46
                                            }
                                        },
                                        "body": [{
                                            "type": "VariableDeclaration",
                                            "start": 36,
                                            "end": 44,
                                            "loc": {
                                                "start": {
                                                    "line": 1,
                                                    "column": 36
                                                },
                                                "end": {
                                                    "line": 1,
                                                    "column": 44
                                                }
                                            },
                                            "declarations": [{
                                                "type": "VariableDeclarator",
                                                "start": 40,
                                                "end": 43,
                                                "loc": {
                                                    "start": {
                                                        "line": 1,
                                                        "column": 40
                                                    },
                                                    "end": {
                                                        "line": 1,
                                                        "column": 43
                                                    }
                                                },
                                                "id": {
                                                    "type": "Identifier",
                                                    "start": 40,
                                                    "end": 43,
                                                    "loc": {
                                                        "start": {
                                                            "line": 1,
                                                            "column": 40
                                                        },
                                                        "end": {
                                                            "line": 1,
                                                            "column": 43
                                                        }
                                                    },
                                                    "name": "foo"
                                                },
                                                "init": null
                                            }],
                                            "kind": "var"
                                        }]
                                    }
                                }]
                            }
                        },
                        "finalizer": null
                    }],
                    "sourceType": "script"
                }
            });
    
            pass(`try {} catch (foo) { { let foo; } }`, {
                source: 'try {} catch (foo) { { let foo; } }',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    "type": "Program",
                    "start": 0,
                    "end": 35,
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 0
                        },
                        "end": {
                            "line": 1,
                            "column": 35
                        }
                    },
                    "body": [{
                        "type": "TryStatement",
                        "start": 0,
                        "end": 35,
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 0
                            },
                            "end": {
                                "line": 1,
                                "column": 35
                            }
                        },
                        "block": {
                            "type": "BlockStatement",
                            "start": 4,
                            "end": 6,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 4
                                },
                                "end": {
                                    "line": 1,
                                    "column": 6
                                }
                            },
                            "body": []
                        },
                        "handler": {
                            "type": "CatchClause",
                            "start": 7,
                            "end": 35,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 7
                                },
                                "end": {
                                    "line": 1,
                                    "column": 35
                                }
                            },
                            "param": {
                                "type": "Identifier",
                                "start": 14,
                                "end": 17,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 14
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 17
                                    }
                                },
                                "name": "foo"
                            },
                            "body": {
                                "type": "BlockStatement",
                                "start": 19,
                                "end": 35,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 19
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 35
                                    }
                                },
                                "body": [{
                                    "type": "BlockStatement",
                                    "start": 21,
                                    "end": 33,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 21
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 33
                                        }
                                    },
                                    "body": [{
                                        "type": "VariableDeclaration",
                                        "start": 23,
                                        "end": 31,
                                        "loc": {
                                            "start": {
                                                "line": 1,
                                                "column": 23
                                            },
                                            "end": {
                                                "line": 1,
                                                "column": 31
                                            }
                                        },
                                        "declarations": [{
                                            "type": "VariableDeclarator",
                                            "start": 27,
                                            "end": 30,
                                            "loc": {
                                                "start": {
                                                    "line": 1,
                                                    "column": 27
                                                },
                                                "end": {
                                                    "line": 1,
                                                    "column": 30
                                                }
                                            },
                                            "id": {
                                                "type": "Identifier",
                                                "start": 27,
                                                "end": 30,
                                                "loc": {
                                                    "start": {
                                                        "line": 1,
                                                        "column": 27
                                                    },
                                                    "end": {
                                                        "line": 1,
                                                        "column": 30
                                                    }
                                                },
                                                "name": "foo"
                                            },
                                            "init": null
                                        }],
                                        "kind": "let"
                                    }]
                                }]
                            }
                        },
                        "finalizer": null
                    }],
                    "sourceType": "script"
                }
            });
    
            pass(`try {} catch (foo) {} let foo;`, {
                source: 'try {} catch (foo) {} let foo;',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    "type": "Program",
                    "start": 0,
                    "end": 30,
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 0
                        },
                        "end": {
                            "line": 1,
                            "column": 30
                        }
                    },
                    "body": [{
                            "type": "TryStatement",
                            "start": 0,
                            "end": 21,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 0
                                },
                                "end": {
                                    "line": 1,
                                    "column": 21
                                }
                            },
                            "block": {
                                "type": "BlockStatement",
                                "start": 4,
                                "end": 6,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 4
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 6
                                    }
                                },
                                "body": []
                            },
                            "handler": {
                                "type": "CatchClause",
                                "start": 7,
                                "end": 21,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 7
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 21
                                    }
                                },
                                "param": {
                                    "type": "Identifier",
                                    "start": 14,
                                    "end": 17,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 14
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 17
                                        }
                                    },
                                    "name": "foo"
                                },
                                "body": {
                                    "type": "BlockStatement",
                                    "start": 19,
                                    "end": 21,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 19
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 21
                                        }
                                    },
                                    "body": []
                                }
                            },
                            "finalizer": null
                        },
                        {
                            "type": "VariableDeclaration",
                            "start": 22,
                            "end": 30,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 22
                                },
                                "end": {
                                    "line": 1,
                                    "column": 30
                                }
                            },
                            "declarations": [{
                                "type": "VariableDeclarator",
                                "start": 26,
                                "end": 29,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 26
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 29
                                    }
                                },
                                "id": {
                                    "type": "Identifier",
                                    "start": 26,
                                    "end": 29,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 26
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 29
                                        }
                                    },
                                    "name": "foo"
                                },
                                "init": null
                            }],
                            "kind": "let"
                        }
                    ],
                    "sourceType": "script"
                }
            });
        });
    
        describe('Function code', () => {
    
            pass(`function f() {  } function f() {  }`, {
                source: 'function f() {  } function f() {  }',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    "type": "Program",
                    "start": 0,
                    "end": 35,
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 0
                        },
                        "end": {
                            "line": 1,
                            "column": 35
                        }
                    },
                    "body": [{
                            "type": "FunctionDeclaration",
                            "start": 0,
                            "end": 17,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 0
                                },
                                "end": {
                                    "line": 1,
                                    "column": 17
                                }
                            },
                            "id": {
                                "type": "Identifier",
                                "start": 9,
                                "end": 10,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 9
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 10
                                    }
                                },
                                "name": "f"
                            },
                            "generator": false,
                            "expression": false,
                            "async": false,
                            "params": [],
                            "body": {
                                "type": "BlockStatement",
                                "start": 13,
                                "end": 17,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 13
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 17
                                    }
                                },
                                "body": []
                            }
                        },
                        {
                            "type": "FunctionDeclaration",
                            "start": 18,
                            "end": 35,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 18
                                },
                                "end": {
                                    "line": 1,
                                    "column": 35
                                }
                            },
                            "id": {
                                "type": "Identifier",
                                "start": 27,
                                "end": 28,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 27
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 28
                                    }
                                },
                                "name": "f"
                            },
                            "generator": false,
                            "expression": false,
                            "async": false,
                            "params": [],
                            "body": {
                                "type": "BlockStatement",
                                "start": 31,
                                "end": 35,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 31
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 35
                                    }
                                },
                                "body": []
                            }
                        }
                    ],
                    "sourceType": "script"
                }
            });
    
            pass(`{ function f() {  } }`, {
                source: '{ function f() {  } }',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    "type": "Program",
                    "body": [{
                        "type": "BlockStatement",
                        "body": [{
                            "type": "FunctionDeclaration",
                            "params": [],
                            "body": {
                                "type": "BlockStatement",
                                "body": [],
                                "start": 15,
                                "end": 19,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 15
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 19
                                    }
                                }
                            },
                            "async": false,
                            "generator": false,
                            "expression": false,
                            "id": {
                                "type": "Identifier",
                                "name": "f",
                                "start": 11,
                                "end": 12,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 11
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 12
                                    }
                                }
                            },
                            "start": 2,
                            "end": 19,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 2
                                },
                                "end": {
                                    "line": 1,
                                    "column": 19
                                }
                            }
                        }],
                        "start": 0,
                        "end": 21,
                        "loc": {
                            "start": {
                                "line": 1,
                                "column": 0
                            },
                            "end": {
                                "line": 1,
                                "column": 21
                            }
                        }
                    }],
                    "sourceType": "script",
                    "start": 0,
                    "end": 21,
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 0
                        },
                        "end": {
                            "line": 1,
                            "column": 21
                        }
                    }
                }
            });
    
            pass(`let f = 123; { function f() {  } } after = f;`, {
                source: `let f = 123; { function f() {  } } after = f;`,
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    "type": "Program",
                    "body": [{
                            "type": "VariableDeclaration",
                            "declarations": [{
                                "type": "VariableDeclarator",
                                "init": {
                                    "type": "Literal",
                                    "value": 123,
                                    "start": 8,
                                    "end": 11,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 8
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 11
                                        }
                                    },
                                    "raw": "123"
                                },
                                "id": {
                                    "type": "Identifier",
                                    "name": "f",
                                    "start": 4,
                                    "end": 5,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 4
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 5
                                        }
                                    }
                                },
                                "start": 4,
                                "end": 11,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 4
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 11
                                    }
                                }
                            }],
                            "kind": "let",
                            "start": 0,
                            "end": 12,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 0
                                },
                                "end": {
                                    "line": 1,
                                    "column": 12
                                }
                            }
                        },
                        {
                            "type": "BlockStatement",
                            "body": [{
                                "type": "FunctionDeclaration",
                                "params": [],
                                "body": {
                                    "type": "BlockStatement",
                                    "body": [],
                                    "start": 28,
                                    "end": 32,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 28
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 32
                                        }
                                    }
                                },
                                "async": false,
                                "generator": false,
                                "expression": false,
                                "id": {
                                    "type": "Identifier",
                                    "name": "f",
                                    "start": 24,
                                    "end": 25,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 24
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 25
                                        }
                                    }
                                },
                                "start": 15,
                                "end": 32,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 15
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 32
                                    }
                                }
                            }],
                            "start": 13,
                            "end": 34,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 13
                                },
                                "end": {
                                    "line": 1,
                                    "column": 34
                                }
                            }
                        },
                        {
                            "type": "ExpressionStatement",
                            "expression": {
                                "type": "AssignmentExpression",
                                "left": {
                                    "type": "Identifier",
                                    "name": "after",
                                    "start": 35,
                                    "end": 40,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 35
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 40
                                        }
                                    }
                                },
                                "operator": "=",
                                "right": {
                                    "type": "Identifier",
                                    "name": "f",
                                    "start": 43,
                                    "end": 44,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 43
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 44
                                        }
                                    }
                                },
                                "start": 35,
                                "end": 44,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 35
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 44
                                    }
                                }
                            },
                            "start": 35,
                            "end": 45,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 35
                                },
                                "end": {
                                    "line": 1,
                                    "column": 45
                                }
                            }
                        }
                    ],
                    "sourceType": "script",
                    "start": 0,
                    "end": 45,
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 0
                        },
                        "end": {
                            "line": 1,
                            "column": 45
                        }
                    }
                }
            });
    
            pass(`var f = 123; {  function f() {  } }`, {
                source: 'var f = 123; {  function f() {  } }',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    "type": "Program",
                    "body": [{
                            "type": "VariableDeclaration",
                            "declarations": [{
                                "type": "VariableDeclarator",
                                "init": {
                                    "type": "Literal",
                                    "value": 123,
                                    "start": 8,
                                    "end": 11,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 8
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 11
                                        }
                                    },
                                    "raw": "123"
                                },
                                "id": {
                                    "type": "Identifier",
                                    "name": "f",
                                    "start": 4,
                                    "end": 5,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 4
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 5
                                        }
                                    }
                                },
                                "start": 4,
                                "end": 11,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 4
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 11
                                    }
                                }
                            }],
                            "kind": "var",
                            "start": 0,
                            "end": 12,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 0
                                },
                                "end": {
                                    "line": 1,
                                    "column": 12
                                }
                            }
                        },
                        {
                            "type": "BlockStatement",
                            "body": [{
                                "type": "FunctionDeclaration",
                                "params": [],
                                "body": {
                                    "type": "BlockStatement",
                                    "body": [],
                                    "start": 29,
                                    "end": 33,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 29
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 33
                                        }
                                    }
                                },
                                "async": false,
                                "generator": false,
                                "expression": false,
                                "id": {
                                    "type": "Identifier",
                                    "name": "f",
                                    "start": 25,
                                    "end": 26,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 25
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 26
                                        }
                                    }
                                },
                                "start": 16,
                                "end": 33,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 16
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 33
                                    }
                                }
                            }],
                            "start": 13,
                            "end": 35,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 13
                                },
                                "end": {
                                    "line": 1,
                                    "column": 35
                                }
                            }
                        }
                    ],
                    "sourceType": "script",
                    "start": 0,
                    "end": 35,
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 0
                        },
                        "end": {
                            "line": 1,
                            "column": 35
                        }
                    }
                }
            });
    
            pass(`{ function f() {} } { function f() {} }`, {
                source: '{ function f() {} } { function f() {} }',
                loc: true,
                ranges: true,
                raw: true,
                expected: {
                    "type": "Program",
                    "body": [{
                            "type": "BlockStatement",
                            "body": [{
                                "type": "FunctionDeclaration",
                                "params": [],
                                "body": {
                                    "type": "BlockStatement",
                                    "body": [],
                                    "start": 15,
                                    "end": 17,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 15
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 17
                                        }
                                    }
                                },
                                "async": false,
                                "generator": false,
                                "expression": false,
                                "id": {
                                    "type": "Identifier",
                                    "name": "f",
                                    "start": 11,
                                    "end": 12,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 11
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 12
                                        }
                                    }
                                },
                                "start": 2,
                                "end": 17,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 2
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 17
                                    }
                                }
                            }],
                            "start": 0,
                            "end": 19,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 0
                                },
                                "end": {
                                    "line": 1,
                                    "column": 19
                                }
                            }
                        },
                        {
                            "type": "BlockStatement",
                            "body": [{
                                "type": "FunctionDeclaration",
                                "params": [],
                                "body": {
                                    "type": "BlockStatement",
                                    "body": [],
                                    "start": 35,
                                    "end": 37,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 35
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 37
                                        }
                                    }
                                },
                                "async": false,
                                "generator": false,
                                "expression": false,
                                "id": {
                                    "type": "Identifier",
                                    "name": "f",
                                    "start": 31,
                                    "end": 32,
                                    "loc": {
                                        "start": {
                                            "line": 1,
                                            "column": 31
                                        },
                                        "end": {
                                            "line": 1,
                                            "column": 32
                                        }
                                    }
                                },
                                "start": 22,
                                "end": 37,
                                "loc": {
                                    "start": {
                                        "line": 1,
                                        "column": 22
                                    },
                                    "end": {
                                        "line": 1,
                                        "column": 37
                                    }
                                }
                            }],
                            "start": 20,
                            "end": 39,
                            "loc": {
                                "start": {
                                    "line": 1,
                                    "column": 20
                                },
                                "end": {
                                    "line": 1,
                                    "column": 39
                                }
                            }
                        }
                    ],
                    "sourceType": "script",
                    "start": 0,
                    "end": 39,
                    "loc": {
                        "start": {
                            "line": 1,
                            "column": 0
                        },
                        "end": {
                            "line": 1,
                            "column": 39
                        }
                    }
                }
            });
        });
    });