// var assert = require('assert');
var assert = chai.assert;

var parser = peg.generate(fswpeg.document);



describe('FSW', function () {
    describe('Sign', function () {
        it('should return qualified object', function () {
            assert.equal(
                `{
  "sorting": null,
  "sign": {
    "l": "M",
    "c": {
      "x": 518,
      "y": 533
    },
    "styling": {
      "colorize": null,
      "padding": null,
      "backgroundcolor": null,
      "colors": null,
      "symbolscolors": null,
      "signzoom": null,
      "symbolszoom": null
    },
    "symbols": [
      {
        "k": "S1870a",
        "c": {
          "x": 489,
          "y": 515
        }
      },
      {
        "k": "S18701",
        "c": {
          "x": 482,
          "y": 490
        }
      },
      {
        "k": "S20500",
        "c": {
          "x": 508,
          "y": 496
        }
      },
      {
        "k": "S2e734",
        "c": {
          "x": 500,
          "y": 468
        }
      }
    ]
  }
}`

                ,
                JSON.stringify(parser.parse("M518x533S1870a489x515S18701482x490S20500508x496S2e734500x468"), null, 2));
        });
        it('should return qualified object of sign world', function () {
            assert.equal(
                `{
  "sorting": null,
  "sign": {
    "l": "M",
    "c": {
      "x": 518,
      "y": 533
    },
    "styling": {
      "colorize": null,
      "padding": null,
      "backgroundcolor": null,
      "colors": null,
      "symbolscolors": null,
      "signzoom": null,
      "symbolszoom": null
    },
    "symbols": [
      {
        "k": "S1870a",
        "c": {
          "x": 489,
          "y": 515
        }
      },
      {
        "k": "S18701",
        "c": {
          "x": 482,
          "y": 490
        }
      },
      {
        "k": "S20500",
        "c": {
          "x": 508,
          "y": 496
        }
      },
      {
        "k": "S2e734",
        "c": {
          "x": 500,
          "y": 468
        }
      }
    ]
  }
}`

                ,
                JSON.stringify(parser.parse("M518x533S1870a489x515S18701482x490S20500508x496S2e734500x468"), null, 2));
        });
    });
    describe('Sorting', function () {
        it('should return qualified object sorted', function () {
            assert.equal(
                `{
  "sorting": [
    "S18701",
    "S1870a",
    "S2e734",
    "S20500"
  ],
  "sign": {
    "l": "M",
    "c": {
      "x": 518,
      "y": 533
    },
    "styling": {
      "colorize": null,
      "padding": null,
      "backgroundcolor": null,
      "colors": null,
      "symbolscolors": null,
      "signzoom": null,
      "symbolszoom": null
    },
    "symbols": [
      {
        "k": "S1870a",
        "c": {
          "x": 489,
          "y": 515
        }
      },
      {
        "k": "S18701",
        "c": {
          "x": 482,
          "y": 490
        }
      },
      {
        "k": "S20500",
        "c": {
          "x": 508,
          "y": 496
        }
      },
      {
        "k": "S2e734",
        "c": {
          "x": 500,
          "y": 468
        }
      }
    ]
  }
}`

                ,
                JSON.stringify(parser.parse("AS18701S1870aS2e734S20500M518x533S1870a489x515S18701482x490S20500508x496S2e734500x468"), null, 2));
        });
    });
});



var parserbasics = peg.generate(fswpeg.basics);

describe('Paser Basic', function () {
    describe('spaces', function () {
        it('should return spaces', function () {
            assert.equal('[" "]', JSON.stringify(parserbasics.parse(" ")));
        });

    });
    describe('Coordinate spacer', function () {

        it('should return x', function () {
            assert.equal('x', parserbasics.parse("x"));
        });
        it('should return X', function () {
            assert.equal('X', parserbasics.parse("X"));
        });
    });
    describe('digits', function () {
        it('should return 0', function () {
            assert.equal('0', parserbasics.parse("0"));
        });
        it('should return 1', function () {
            assert.equal('1', parserbasics.parse("1"));
        });
        it('should return 2', function () {
            assert.equal('2', parserbasics.parse("2"));
        });
        it('should return 3', function () {
            assert.equal('3', parserbasics.parse("3"));
        });
        it('should return 4', function () {
            assert.equal('4', parserbasics.parse("4"));
        });
        it('should return 5', function () {
            assert.equal('5', parserbasics.parse("5"));
        });
        it('should return 6', function () {
            assert.equal('6', parserbasics.parse("6"));
        });
        it('should return 7', function () {
            assert.equal('7', parserbasics.parse("7"));
        });
        it('should return 8', function () {
            assert.equal('8', parserbasics.parse("8"));
        });
        it('should return 9', function () {
            assert.equal('9', parserbasics.parse("9"));
        });
    });

    describe('hexa', function () {
        it('should return 0', function () {
            assert.equal('0', parserbasics.parse("0"));
        });
        it('should return 1', function () {
            assert.equal('1', parserbasics.parse("1"));
        });
        it('should return 2', function () {
            assert.equal('2', parserbasics.parse("2"));
        });
        it('should return 3', function () {
            assert.equal('3', parserbasics.parse("3"));
        });
        it('should return 4', function () {
            assert.equal('4', parserbasics.parse("4"));
        });
        it('should return 5', function () {
            assert.equal('5', parserbasics.parse("5"));
        });
        it('should return 6', function () {
            assert.equal('6', parserbasics.parse("6"));
        });
        it('should return 7', function () {
            assert.equal('7', parserbasics.parse("7"));
        });
        it('should return 8', function () {
            assert.equal('8', parserbasics.parse("8"));
        });
        it('should return 9', function () {
            assert.equal('9', parserbasics.parse("9"));
        });
        it('should return a', function () {
            assert.equal('a', parserbasics.parse("a"));
        });
        it('should return b', function () {
            assert.equal('b', parserbasics.parse("b"));
        });
        it('should return c', function () {
            assert.equal('c', parserbasics.parse("c"));
        });
        it('should return d', function () {
            assert.equal('d', parserbasics.parse("d"));
        });
        it('should return e', function () {
            assert.equal('e', parserbasics.parse("e"));
        });
        it('should return f', function () {
            assert.equal('f', parserbasics.parse("f"));
        });

    });


});


var parsernumbers = peg.generate(fswpeg.numbers);

describe('Paser Numbers', function () {
    describe('integers', function () {
        it('should return 0', function () {
            assert.equal(0, parsernumbers.parse("0"));
        });
        it('should return 1', function () {
            assert.equal(1, parsernumbers.parse("1"));
        });
        it('should return 2', function () {
            assert.equal(2, parsernumbers.parse("2"));
        });
        it('should return 3', function () {
            assert.equal(3, parsernumbers.parse("3"));
        });
        it('should return 4', function () {
            assert.equal(4, parsernumbers.parse("4"));
        });
        it('should return 5', function () {
            assert.equal(5, parsernumbers.parse("5"));
        });
        it('should return 6', function () {
            assert.equal(6, parsernumbers.parse("6"));
        });
        it('should return 7', function () {
            assert.equal(7, parsernumbers.parse("7"));
        });
        it('should return 8', function () {
            assert.equal(8, parsernumbers.parse("8"));
        });
        it('should return 9', function () {
            assert.equal(9, parsernumbers.parse("9"));
        });

    });
    describe('float', function () {
        it('should return 0.5', function () {
            assert.equal(0.5, parsernumbers.parse("0.5"));
        });
        it('should return 1.5', function () {
            assert.equal(1.5, parsernumbers.parse("1.5"));
        });


    });
    describe('threedigits', function () {
        it('should return 111', function () {
            assert.equal(111, parsernumbers.parse("111"));
        });
        it('should return 123', function () {
            assert.equal(123, parsernumbers.parse("123"));
        });
        it('should return 999', function () {
            assert.equal(999, parsernumbers.parse("999"));
        });
    });
});