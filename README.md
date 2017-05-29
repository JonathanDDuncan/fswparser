# fswparser
PEG Javascript parser for FSW

For most general use cases the [The Sutton SignWriting Project JavaScript Library](https://slevinski.github.io/SuttonSignWriting/components/js.html)  can be used to display FSW strings in the browser.  For more avanced use cases FSW has to be parsed into JS objects so that it can be used with JS framworks.

This is a [PEG.js](https://pegjs.org/)  parser for FSW which converts it into JS.

[View online](https://jonathandduncan.github.io/fswparser/) 

To use within another project you can include  [peg-0.10.0.min.js](https://github.com/pegjs/pegjs/releases/download/v0.10.0/peg-0.10.0.min.js) and the fswpeg.js file and call

    var fsw = "..." \\some fsw value for a single sign
    var parser = peg.generate(fswpeg.sign);
    var parsed = parser.parse(fsw);

or 

    var fsw = "..." \\some fsw value for a document (sign text)
    var parser = peg.generate(fswpeg.document);
    var parsed = parser.parse(fsw);

If you only want to include one file in your project you can compile it at https://pegjs.org/online
- - -
## Projects using this library
[QuickSignEditor](https://github.com/JonathanDDuncan/QuickSignEditor)


- - -
## Acknowledgements

>Sutton SignWriting Fonts
>Copyright (c) 1974-2016, Center for Sutton Movement Writing, inc
>Licensed under the SIL Open Font License v1.1
>https://slevinski.github.io/SuttonSignWriting/components/fonts.html

>Sutton SignWriting JavaScript Library
>Copyright (c) 2007-2016, Stephen E Slevinski Jr
>Licensed under the MIT License
>https://slevinski.github.io/SuttonSignWriting/components/js.html

- - -
## Special Thanks
Valerie Sutton (http://signwriting.org)

- - - 
