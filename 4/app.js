function removeStringValuesLongerThan(num, obj) {
    for( var x in obj ){
        if(obj[x].length> num){ 
         delete obj[x]; 
       }
     }
     return obj;
   }
   module.exports = removeStringValuesLongerThan;