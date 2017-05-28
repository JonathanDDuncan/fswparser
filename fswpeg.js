var fswpeg = function () {


var basics =
`
Basics = CoordinateSpacer/ digit / hexa / Space 

digit = [0-9]
hexa = [0-9a-f]
CoordinateSpacer "coordinatespacer" 
  = [Xx]
Space "space"  = " " *
`;


var numbers =
`
Numbers = ThreeDigits / Float / Integer 

Number "number" = Float / Integer

Integer "integer"
  = digit+ { return parseInt(text(), 10); }

Float "float"
  = digit + ( "." digit +) ? { return parseFloat(text(), 10); }

ThreeDigits "threedigits"
	 = digit digit digit  { return parseInt(text(), 10); }

` + basics;

var parts = 
     ` Parts = Coordinate / Symbol / RGB / ColorText
Symbol =
	result: "S"[123]hexa hexa[0-5]hexa
   {return text()}

Coordinate = x1:ThreeDigits CoordinateSpacer y1:ThreeDigits
  {return { x: x1, y : y1 };}

  
RGB = hexa hexa hexa hexa hexa hexa {return text()}
ColorText =[a-wyzA-Z]+ {return text()}

          ` + numbers;

var plainsign = 
`
UnSortedSign = prefix:SignPrefix symbols:SymbolCoordinate * 
	{ return  { lane: prefix.lane,
    coord: prefix.signcoordinate,
    symbols: symbols } }

SymbolCoordinate = symb:Symbol coord:Coordinate
	{ return { key: symb, coord: coord } }
       
SignPrefix = lane:[BLMR] signcoordinate: Coordinate ?
	{return { lane: lane, signcoordinate:signcoordinate}}
          ` + parts;

var sorting = 
`
SortedSign =   sign1:(sort:Sorting ?  sign:UnSortedSign) / sortonly:Sorting
    {   if (sortonly )  return  { sorting: sortonly  }
        else
        return  { sorting: sign1.sort, sign: sign1.sign } }
    
Sorting = "A" symbols: Symbol *
	{ return  symbols  }
          ` + plainsign;

var styling = 
`
Styling =   sign:SignStylings ? 
	

SignStylings = "-" colorize:Colorize ? padding:Padding ? backgroundcolor:BackGroundColor ? colors:SignColors ? signzoom:SignZoom ? symbols: SymbolsStylings  ?
    { return { colorize:colorize ? colorize : false ,
        padding:padding,
        backgroundcolor:backgroundcolor,
        signcolors : colors,
        symbolscolors : symbols ? symbols.symbolscolors :null,
        signzoom :  signzoom,
        symbolszoom: symbols ? symbols.symbolszoom : null}}

   

SymbolsStylings =  "-" symbolscolors:SymbolsColors ? symbolszoom:SymbolsZoom ?
   { return {   symbolscolors : symbolscolors, 
       symbolszoom: symbolszoom}}



SignColors =  ColorPrefix color:SymbolColor
	{ return  {fore: color.fore,back: color.back};  }

ColorizePrefix = "C"
Colorize =
 	colorize:ColorizePrefix
    { return colorize == "C"
}

PaddingPrefix = "P"
Padding =
	PaddingPrefix padding:Integer
    {return padding}

BackGroundColorPrefix = "G"
BackGroundColor = BackGroundColorPrefix PairPrefix backgroundcolor: (RGB / ColorText) PairSuffix
	{ return  backgroundcolor;  }

ZoomPrefix = "Z"
SignZoom =    ZoomPrefix zoom:Number
	{return zoom}

SymbolsZoom =    symbolzooms:(SymbolZoom *)
	{return symbolzooms}

SymbolZoom =
ZoomPrefix index:SymbolIndex "," zoom:Number offset:SymbolZoomOffset ?
	{return {index : index, zoom: zoom, offset : offset }}

SymbolZoomOffset =
    "," coordinate:Coordinate
    	{ return   coordinate;  }
ColorPrefix = "D"
SymbolsColors =   colors: SymbolColors *
	{ return   colors;  }

SymbolColor =  PairPrefix twocolors:TwoColors ?  foregroundonly: (RGB / ColorText)?   PairSuffix
		{ if (foregroundonly)
    	  {return  {fore: foregroundonly, back: null};}
          else
    {return  {fore:  twocolors.foregroundcolor, back: twocolors.backgroundcolor}; } }

TwoColors =
	  foregroundcolor: (RGB / ColorText) "," backgroundcolor: (RGB / ColorText)
         {return  {foregroundcolor:  foregroundcolor, backgroundcolor: backgroundcolor}; }

SymbolColors = ColorPrefix index:SymbolIndex color:SymbolColor
	{ return  {index: index, fore: color.fore,back: color.back};  }


PairPrefix = "_"
PairSuffix  = "_"
SymbolIndex = digits: (digit digit)
		 { return parseInt(digits.join(""), 10); }
          ` + sorting;


 var sign =
     `
     SignSortedStyled =  sort:Sorting ?  sign:UnSortedSign styling:Styling
	{ return  { sorting: sort, sign: sign,   styling : styling } }

`+ styling ;

 var document =
     `Expression
  =  SignSortedStyled

SignSpacer =
SignSortedStyled Space

Document = SignSpacer *


SignSortedStyled =  sort:Sorting ?  sign:UnSortedSign styling:Styling
	{ return  { sorting: sort, sign: sign,   styling : styling } }


`+ sign ;

var exports = {};
exports.document = document;
exports.basics = basics;
exports.numbers = numbers;
exports.parts = parts;
exports.plainsign = plainsign;
exports.sign = sign;
exports.sorting = sorting;
exports.styling = styling;
return exports;
}()