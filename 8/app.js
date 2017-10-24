function findPairForSum(arreglo, numero){
    // Declaramos un arreglo vacio para meter aqui los pares
    var paresDeSuma = [];
    
    // Comenzamos a recorrer el arreglo
    for (i= 0; i < arreglo.length; i++) {
      // Corremos el arreglo sumando con el primer número
      for (x = i+1; x < arreglo.length; x++){
        // Si los números en las dos posiciones suman el número que pasamos, los agregamos al nuevo arreglo
        if (arreglo[i] + arreglo[x] === numero) {
          paresDeSuma.push(arreglo[i], arreglo[x]);
        }
      }
    }
    
    return paresDeSuma;
  }
  
  var pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
  console.log(pair);
//   module.exports = findPairForSum;