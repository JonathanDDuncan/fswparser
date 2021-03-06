// var assert = require('assert');
var assert = chai.assert;

var parserplainsign = peg.generate(fswpeg.plainsign);
var parsersign = peg.generate(fswpeg.sign);
var parserdocument = peg.generate(fswpeg.document);

var parsersorting = peg.generate(fswpeg.sorting);
var parserstyling = peg.generate(fswpeg.styling);

describe('FSW', function () {
    describe('Sign not sorted not styled', function () {
        it('should return sign', function () {
            assert.equal(
                `{
  "lane": "M",
  "coord": {
    "x": 518,
    "y": 533
  },
  "symbols": [
    {
      "key": "S1870a",
      "coord": {
        "x": 489,
        "y": 515
      }
    },
    {
      "key": "S18701",
      "coord": {
        "x": 482,
        "y": 490
      }
    },
    {
      "key": "S20500",
      "coord": {
        "x": 508,
        "y": 496
      }
    },
    {
      "key": "S2e734",
      "coord": {
        "x": 500,
        "y": 468
      }
    }
  ]
}`

                ,
                JSON.stringify(parserplainsign.parse("M518x533S1870a489x515S18701482x490S20500508x496S2e734500x468"), null, 2));
        });

    });
     describe('Sign sorted', function () {
         it('should return sorted sign', function () {
            assert.equal(
                `{
  "sorting": [
    "S18701",
    "S1870a",
    "S2e734",
    "S20500"
  ],
  "sign": {
    "lane": "M",
    "coord": {
      "x": 518,
      "y": 533
    },
    "symbols": [
      {
        "key": "S1870a",
        "coord": {
          "x": 489,
          "y": 515
        }
      },
      {
        "key": "S18701",
        "coord": {
          "x": 482,
          "y": 490
        }
      },
      {
        "key": "S20500",
        "coord": {
          "x": 508,
          "y": 496
        }
      },
      {
        "key": "S2e734",
        "coord": {
          "x": 500,
          "y": 468
        }
      }
    ]
  },
  "styling": null
}`

                ,
                JSON.stringify(parsersign.parse("AS18701S1870aS2e734S20500M518x533S1870a489x515S18701482x490S20500508x496S2e734500x468"), null, 2));
        });

    });

      describe('Sign styled', function () {
         it('should return styled sign', function () {
            assert.equal(
                `{
  "sorting": null,
  "sign": {
    "lane": "M",
    "coord": {
      "x": 518,
      "y": 533
    },
    "symbols": [
      {
        "key": "S1870a",
        "coord": {
          "x": 489,
          "y": 515
        }
      },
      {
        "key": "S18701",
        "coord": {
          "x": 482,
          "y": 490
        }
      },
      {
        "key": "S20500",
        "coord": {
          "x": 508,
          "y": 496
        }
      },
      {
        "key": "S2e734",
        "coord": {
          "x": 500,
          "y": 468
        }
      }
    ]
  },
  "styling": {
    "colorize": true,
    "padding": 5,
    "backgroundcolor": "blue",
    "signcolors": {
      "fore": "red",
      "back": "green"
    },
    "symbolscolors": [
      {
        "index": 5,
        "fore": "red",
        "back": "green"
      }
    ],
    "signzoom": null,
    "symbolszoom": [
      {
        "index": 6,
        "zoom": 2.3,
        "offset": {
          "x": 480,
          "y": 490
        }
      }
    ]
  }
}`

                ,
                JSON.stringify(parsersign.parse("M518x533S1870a489x515S18701482x490S20500508x496S2e734500x468-CP05G_blue_D_red,green_-D05_red,green_Z06,2.3,480x490"), null, 2));
        });

    });
      describe('Sign styled and sorted', function () {
         it('should return sorted styled sign', function () {
            assert.equal(
                `{
  "sorting": [
    "S18701",
    "S1870a",
    "S2e734",
    "S20500"
  ],
  "sign": {
    "lane": "M",
    "coord": {
      "x": 518,
      "y": 533
    },
    "symbols": [
      {
        "key": "S1870a",
        "coord": {
          "x": 489,
          "y": 515
        }
      },
      {
        "key": "S18701",
        "coord": {
          "x": 482,
          "y": 490
        }
      },
      {
        "key": "S20500",
        "coord": {
          "x": 508,
          "y": 496
        }
      },
      {
        "key": "S2e734",
        "coord": {
          "x": 500,
          "y": 468
        }
      }
    ]
  },
  "styling": {
    "colorize": true,
    "padding": 5,
    "backgroundcolor": "blue",
    "signcolors": {
      "fore": "red",
      "back": "green"
    },
    "symbolscolors": [
      {
        "index": 5,
        "fore": "red",
        "back": "green"
      }
    ],
    "signzoom": null,
    "symbolszoom": [
      {
        "index": 6,
        "zoom": 2.3,
        "offset": {
          "x": 480,
          "y": 490
        }
      }
    ]
  }
}`

                ,
                JSON.stringify(parsersign.parse("AS18701S1870aS2e734S20500M518x533S1870a489x515S18701482x490S20500508x496S2e734500x468-CP05G_blue_D_red,green_-D05_red,green_Z06,2.3,480x490"), null, 2));
        });

    });

     describe('Document', function () {
         it('should return document', function () {
            assert.equal(
                `[
  {
    "sorting": [
      "S18701",
      "S1870a",
      "S2e734",
      "S20500"
    ],
    "sign": {
      "lane": "M",
      "coord": {
        "x": 518,
        "y": 533
      },
      "symbols": [
        {
          "key": "S1870a",
          "coord": {
            "x": 489,
            "y": 515
          }
        },
        {
          "key": "S18701",
          "coord": {
            "x": 482,
            "y": 490
          }
        },
        {
          "key": "S20500",
          "coord": {
            "x": 508,
            "y": 496
          }
        },
        {
          "key": "S2e734",
          "coord": {
            "x": 500,
            "y": 468
          }
        }
      ]
    },
    "styling": {
      "colorize": true,
      "padding": 5,
      "backgroundcolor": "blue",
      "signcolors": {
        "fore": "red",
        "back": "green"
      },
      "symbolscolors": [
        {
          "index": 5,
          "fore": "red",
          "back": "green"
        }
      ],
      "signzoom": null,
      "symbolszoom": [
        {
          "index": 6,
          "zoom": 2.3,
          "offset": {
            "x": 480,
            "y": 490
          }
        }
      ]
    }
  },
  {
    "sorting": [
      "S18701",
      "S1870a",
      "S2e734",
      "S20500"
    ],
    "sign": {
      "lane": "M",
      "coord": {
        "x": 518,
        "y": 533
      },
      "symbols": [
        {
          "key": "S1870a",
          "coord": {
            "x": 489,
            "y": 515
          }
        },
        {
          "key": "S18701",
          "coord": {
            "x": 482,
            "y": 490
          }
        },
        {
          "key": "S20500",
          "coord": {
            "x": 508,
            "y": 496
          }
        },
        {
          "key": "S2e734",
          "coord": {
            "x": 500,
            "y": 468
          }
        }
      ]
    },
    "styling": {
      "colorize": true,
      "padding": 5,
      "backgroundcolor": "blue",
      "signcolors": {
        "fore": "red",
        "back": "green"
      },
      "symbolscolors": [
        {
          "index": 5,
          "fore": "red",
          "back": "green"
        }
      ],
      "signzoom": null,
      "symbolszoom": [
        {
          "index": 6,
          "zoom": 2.3,
          "offset": {
            "x": 480,
            "y": 490
          }
        }
      ]
    }
  }
]`

                ,
                JSON.stringify(parserdocument.parse("AS18701S1870aS2e734S20500M518x533S1870a489x515S18701482x490S20500508x496S2e734500x468-CP05G_blue_D_red,green_-D05_red,green_Z06,2.3,480x490 AS18701S1870aS2e734S20500M518x533S1870a489x515S18701482x490S20500508x496S2e734500x468-CP05G_blue_D_red,green_-D05_red,green_Z06,2.3,480x490"), null, 2));
        });

    });
});
 describe('Sorting', function () {
        it('should return sorting only', function () {
            assert.equal(
                `{
  "sorting": [
    "S18701",
    "S1870a",
    "S2e734",
    "S20500"
  ]
}`,
                JSON.stringify(parsersorting.parse("AS18701S1870aS2e734S20500"), null, 2));
        });

      
    });
describe('Styling', function () {
    describe('Colorize', function () {
        it('should return colorize true', function () {
            assert.equal(
                `{
  "colorize": true,
  "padding": null,
  "backgroundcolor": null,
  "signcolors": null,
  "symbolscolors": null,
  "signzoom": null,
  "symbolszoom": null
}`,
                JSON.stringify(parserstyling.parse("-C"), null, 2));
        });

        it('should return colorize false', function () {
            assert.equal(
                `{
  "colorize": false,
  "padding": null,
  "backgroundcolor": null,
  "signcolors": null,
  "symbolscolors": null,
  "signzoom": null,
  "symbolszoom": null
}`,
                JSON.stringify(parserstyling.parse("-"), null, 2));
        });
    });
    describe('Padding', function () {
        it('should return padding 1', function () {
            assert.equal(
                `{
  "colorize": false,
  "padding": 1,
  "backgroundcolor": null,
  "signcolors": null,
  "symbolscolors": null,
  "signzoom": null,
  "symbolszoom": null
}`,
                JSON.stringify(parserstyling.parse("-P01"), null, 2));
        });

        it('should return padding 99', function () {
            assert.equal(
                `{
  "colorize": false,
  "padding": 99,
  "backgroundcolor": null,
  "signcolors": null,
  "symbolscolors": null,
  "signzoom": null,
  "symbolszoom": null
}`,
                JSON.stringify(parserstyling.parse("-P99"), null, 2));
        });

    });
    describe('Background', function () {
        it('should return background blue ', function () {
            assert.equal(
                `{
  "colorize": false,
  "padding": null,
  "backgroundcolor": "blue",
  "signcolors": null,
  "symbolscolors": null,
  "signzoom": null,
  "symbolszoom": null
}`,
                JSON.stringify(parserstyling.parse("-G_blue_"), null, 2));
        });

        it('should return background f441ee', function () {
            assert.equal(
                `{
  "colorize": false,
  "padding": null,
  "backgroundcolor": "f441ee",
  "signcolors": null,
  "symbolscolors": null,
  "signzoom": null,
  "symbolszoom": null
}`,
                JSON.stringify(parserstyling.parse("-G_f441ee_"), null, 2));
        });
    });
    describe('Detail Color Sign', function () {
        it('should return colors fore red', function () {
            assert.equal(
                `{
  "colorize": false,
  "padding": null,
  "backgroundcolor": null,
  "signcolors": {
    "fore": "red",
    "back": null
  },
  "symbolscolors": null,
  "signzoom": null,
  "symbolszoom": null
}`,
                JSON.stringify(parserstyling.parse("-D_red_"), null, 2));
        });

        it('should return colors fore f441ee ', function () {
            assert.equal(
                `{
  "colorize": false,
  "padding": null,
  "backgroundcolor": null,
  "signcolors": {
    "fore": "f441ee",
    "back": null
  },
  "symbolscolors": null,
  "signzoom": null,
  "symbolszoom": null
}`,
                JSON.stringify(parserstyling.parse("-D_f441ee_"), null, 2));
        });
        it('should return colors fore red back green', function () {
            assert.equal(
                `{
  "colorize": false,
  "padding": null,
  "backgroundcolor": null,
  "signcolors": {
    "fore": "red",
    "back": "green"
  },
  "symbolscolors": null,
  "signzoom": null,
  "symbolszoom": null
}`,
                JSON.stringify(parserstyling.parse("-D_red,green_"), null, 2));
        });

        it('should return colors fore f441ee back f44242', function () {
            assert.equal(
                `{
  "colorize": false,
  "padding": null,
  "backgroundcolor": null,
  "signcolors": {
    "fore": "f441ee",
    "back": "f44242"
  },
  "symbolscolors": null,
  "signzoom": null,
  "symbolszoom": null
}`,
                JSON.stringify(parserstyling.parse("-D_f441ee,f44242_"), null, 2));
        });
    });


    describe('Detail Color Symbols', function () {
        it('should return index 3 fore blue', function () {
            assert.equal(
                `{
  "colorize": false,
  "padding": null,
  "backgroundcolor": null,
  "signcolors": null,
  "symbolscolors": [
    {
      "index": 3,
      "fore": "blue",
      "back": null
    }
  ],
  "signzoom": null,
  "symbolszoom": []
}`,
                JSON.stringify(parserstyling.parse("--D03_blue_"), null, 2));
        });

        it('should return index 3 fore f441ee', function () {
            assert.equal(
                `{
  "colorize": false,
  "padding": null,
  "backgroundcolor": null,
  "signcolors": null,
  "symbolscolors": [
    {
      "index": 3,
      "fore": "f441ee",
      "back": null
    }
  ],
  "signzoom": null,
  "symbolszoom": []
}`,
                JSON.stringify(parserstyling.parse("--D03_f441ee_"), null, 2));
        });
        it('should return index 3 fore blue back green ', function () {
            assert.equal(
                `{
  "colorize": false,
  "padding": null,
  "backgroundcolor": null,
  "signcolors": null,
  "symbolscolors": [
    {
      "index": 3,
      "fore": "blue",
      "back": "green"
    }
  ],
  "signzoom": null,
  "symbolszoom": []
}`,
                JSON.stringify(parserstyling.parse("--D03_blue,green_"), null, 2));
        });

        it('should return index 3 fore f441ee back f44242', function () {
            assert.equal(
                `{
  "colorize": false,
  "padding": null,
  "backgroundcolor": null,
  "signcolors": null,
  "symbolscolors": [
    {
      "index": 3,
      "fore": "f441ee",
      "back": "f44242"
    }
  ],
  "signzoom": null,
  "symbolszoom": []
}`,
                JSON.stringify(parserstyling.parse("--D03_f441ee,f44242_"), null, 2));
        });
    });
    describe('Zoom Sign', function () {
        it('should return signzoom 2.3', function () {
            assert.equal(
                `{
  "colorize": false,
  "padding": null,
  "backgroundcolor": null,
  "signcolors": null,
  "symbolscolors": null,
  "signzoom": 2.3,
  "symbolszoom": null
}`,
                JSON.stringify(parserstyling.parse("-Z2.3"), null, 2));
        });

        it('should return signzoom 2', function () {
            assert.equal(
                `{
  "colorize": false,
  "padding": null,
  "backgroundcolor": null,
  "signcolors": null,
  "symbolscolors": null,
  "signzoom": 2,
  "symbolszoom": null
}`,
                JSON.stringify(parserstyling.parse("-Z2"), null, 2));
        });


    });
    describe('Zoom Symbols', function () {
        it('should return symbolszoom index 2 zoom 2.3 ', function () {
            assert.equal(
                `{
  "colorize": false,
  "padding": null,
  "backgroundcolor": null,
  "signcolors": null,
  "symbolscolors": [],
  "signzoom": null,
  "symbolszoom": [
    {
      "index": 2,
      "zoom": 2.3,
      "offset": null
    }
  ]
}`,
                JSON.stringify(parserstyling.parse("--Z02,2.3"), null, 2));
        });

        it('should return symbolszoom index 2 zoom 2.3 offset x 480 y 490 ', function () {
            assert.equal(
                `{
  "colorize": false,
  "padding": null,
  "backgroundcolor": null,
  "signcolors": null,
  "symbolscolors": [],
  "signzoom": null,
  "symbolszoom": [
    {
      "index": 2,
      "zoom": 2.3,
      "offset": {
        "x": 480,
        "y": 490
      }
    }
  ]
}`,
                JSON.stringify(parserstyling.parse("--Z02,2.3,480x490"), null, 2));
        });
    });

    describe('Colorize, Padding, Background, Detail Color Sign, Zoom Sign', function () {
        it('should return colorize true, padding 5, backgroundcolor blue, signcolors fore red back green', function () {
            assert.equal(
                `{
  "colorize": true,
  "padding": 5,
  "backgroundcolor": "blue",
  "signcolors": {
    "fore": "red",
    "back": "green"
  },
  "symbolscolors": null,
  "signzoom": null,
  "symbolszoom": null
}`,
                JSON.stringify(parserstyling.parse("-CP05G_blue_D_red,green_"), null, 2));
        });
    });

    
    describe('Detail Color Symbols, Zoom Symbols', function () {
        it('should return symbolcolors index 5, fore red, back green, symbolszoom index 6, zoom 2.3, offset x 480, y 490', function () {
            assert.equal(
                `{
  "colorize": false,
  "padding": null,
  "backgroundcolor": null,
  "signcolors": null,
  "symbolscolors": [
    {
      "index": 5,
      "fore": "red",
      "back": "green"
    }
  ],
  "signzoom": null,
  "symbolszoom": [
    {
      "index": 6,
      "zoom": 2.3,
      "offset": {
        "x": 480,
        "y": 490
      }
    }
  ]
}`,
                JSON.stringify(parserstyling.parse("--D05_red,green_Z06,2.3,480x490"), null, 2));
        });
    });

     describe('Colorize, Padding, Background, Detail Color Sign, Zoom Sign, Detail Color Symbols, Zoom Symbols', function () {
        it('should return colorize true, padding 5, backgroundcolor blue, signcolors fore red back green, symbolcolors index 5, fore red, back green, symbolszoom index 6, zoom 2.3, offset x 480, y 490', function () {
            assert.equal(
                `{
  "colorize": true,
  "padding": 5,
  "backgroundcolor": "blue",
  "signcolors": {
    "fore": "red",
    "back": "green"
  },
  "symbolscolors": [
    {
      "index": 5,
      "fore": "red",
      "back": "green"
    }
  ],
  "signzoom": null,
  "symbolszoom": [
    {
      "index": 6,
      "zoom": 2.3,
      "offset": {
        "x": 480,
        "y": 490
      }
    }
  ]
}`,
                JSON.stringify(parserstyling.parse("-CP05G_blue_D_red,green_-D05_red,green_Z06,2.3,480x490"), null, 2));
        });
    });
});

var parserparts = peg.generate(fswpeg.parts);

describe('Parts', function () {
    describe('Coordinate', function () {
        it('should return coordinate {"x":518,"y":533}', function () {
            assert.equal('{"x":518,"y":533}', JSON.stringify(parserparts.parse("518x533")));
        });
        it('should return coordinate {"x":500,"y":500}', function () {
            assert.equal('{"x":500,"y":500}', JSON.stringify(parserparts.parse("500x500")));
        });
        it('should return coordinate {"x":0,"y":0}', function () {
            assert.equal('{"x":0,"y":0}', JSON.stringify(parserparts.parse("000X000")));
        });
    });
    describe('Symbol', function () {
        it('should return key S1870a', function () {
            assert.equal('S1870a', parserparts.parse("S1870a"));
        });
        it('should return key S18701', function () {
            assert.equal('S18701', parserparts.parse("S18701"));
        });
        it('should return key S2e734', function () {
            assert.equal('S2e734', parserparts.parse("S2e734"));
        });
    });
    describe('RGB', function () {
        it('should return rbg color f44242', function () {
            assert.equal('f44242', parserparts.parse("f44242"));
        });
        it('should return rbg color f441ee', function () {
            assert.equal('f441ee', parserparts.parse("f441ee"));
        });
    });
    describe('Colortext', function () {
        it('should return rbg color blue', function () {
            assert.equal('blue', parserparts.parse("blue"));
        });
        it('should return rbg color green', function () {
            assert.equal('green', parserparts.parse("green"));
        });
    });
});

var parserbasics = peg.generate(fswpeg.basics);

describe('Parser Basic', function () {
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