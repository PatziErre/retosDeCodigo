function getElementOfArrayProperty(obj, key, index) {
  return obj.key[index];
  }
  var obj = {
    key: ['Jamil', 'Albrey']
   };
   var output = getElementOfArrayProperty(obj, 'key', 0);
console.log(output); // --> 'Jamil'
//module.exports = getElementOfArrayProperty;
  