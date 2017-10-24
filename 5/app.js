

function convertDoubleSpaceToSingle(str) {
    var arregloPalabras = str.split("  ");
    var singleSpaces = arregloPalabras.join(" ");
    return singleSpaces;
}

var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); 
 
  module.exports = convertDoubleSpaceToSingle;