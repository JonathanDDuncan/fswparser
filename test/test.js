// var assert = require('assert');
var assert = chai.assert;

var parser = peg.generate(fswpeg);

 

describe('FSW', function() {
  describe('Sign', function() {
    it('should return qualified object', function() {
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
       JSON.stringify( parser.parse("M518x533S1870a489x515S18701482x490S20500508x496S2e734500x468"),null,2)) ;
    });
     it('should return qualified object of sign world', function() {
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
       JSON.stringify( parser.parse("M518x533S1870a489x515S18701482x490S20500508x496S2e734500x468"),null,2)) ;
    });
  });
   describe('Sorting', function() {
    it('should return qualified object sorted', function() {
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
       JSON.stringify( parser.parse("AS18701S1870aS2e734S20500M518x533S1870a489x515S18701482x490S20500508x496S2e734500x468"),null,2)) ;
    });
    });
});


 