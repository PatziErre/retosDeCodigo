function computeAverageLengthOfWords(word1, word2) {
    // your cfunction computeAverageLengthOfWords(word1, word2) {
    var largo1 = word1.length;
    var largo2 = word2.length;
    var totalDeLargo = largo1 + largo2;
    var promedio = parseInt(totalDeLargo/2);
    return promedio;
  
  }
  
//module.exports = computeAverageLengthOfWords;

console.log(computeAverageLengthOfWords("Patricia", "Alejandra"));