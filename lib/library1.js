

const findMissing = function findMissing(arr1, arr2) {
  var longerArr;
  var missingVal,arr1Sorted,arr2Sorted =[];
  var j;
   sortedArr1= arr1.sort(function(a, b){return a-b});
   sortedArr2= arr2.sort(function(a, b){return a-b});
   
    if (sortedArr1.length > sortedArr2.length)
    {
      longerArr= sortedArr1.length;
       for(var i=0; i<=longerArr;i++)
      {
        if(sortedArr1[i]!==sortedArr2[i])
        break;
      }
      missingVal= sortedArr1[i];
    }

    else if(sortedArr1.length < sortedArr2.length)
    {
      longerArr= sortedArr2.length;
      for ( j=0; j<=longerArr; j++)
      {
        if(sortedArr1[j]!==sortedArr2[j])
        break;
         
      }
      missingVal= sortedArr2[j];
    }
    else 
    missingVal= 0;
      return missingVal;
    };
  

module.exports = findMissing;