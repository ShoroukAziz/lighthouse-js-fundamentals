const merge = function(arr1,arr2){

  if(arr1.length === 0 && arr2.length === 0) return [];
  if(arr1.length === 0) return arr2;
  if(arr2.length === 0) return arr1;

  let mergedArr = []
  let mergedArrLength = arr1.length + arr2.length;

  let i = 0;

  while (i < mergedArrLength && arr1.length > 0 && arr2.length>0){

    if(arr1[0] < arr2[0]){
      mergedArr.push(arr1[0]);
      arr1.splice(0,1);
    }
    else if ( arr2[0] < arr1[0]){
      mergedArr.push(arr2[0]);
      arr2.splice(0,1);
    }
    else{
      mergedArr.push(arr1[0]);
      mergedArr.push(arr2[0]);
      arr1.splice(0,1);
      arr2.splice(0,1);

    }
    i++;
  }

  if(arr1.length > 0)
  arr1.forEach(
    function(element){
      mergedArr.push(element);
    }
  );

  if(arr2.length>0)
  arr2.forEach(
    function(element){
      mergedArr.push(element);
    }
  );

  return mergedArr;
}


console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
console.log(merge([], []), "=?", []);
console.log(merge([], [1,2]), "=?", [1,2]);