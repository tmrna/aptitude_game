function merge(array1, array2, index) {
  var mergedArray = [];
  var i = 0;
  var j = 0;
  const len1 = array1.length;
  const len2 = array2.length;

  while(i < len1 && j < len2) {
    const takeFrom1 = index > 0 ? array1[i][index] < array2[j][index] : array1[i] < array2[j];
    var pushedElement;
    // standard merge sort
    if(index < 0) {
      pushedElement = takeFrom1 ? array1[i++] : array2[j++]; 
    }
    else{
      pushedElement = takeFrom1 ? array1[i++][index] : array2[j++][index];
    }
    mergedArray.push(pushedElement);
  }

  while(i++ < len1) {
    const toPush = index > 0 ? array1[i][index] : array1[i];
    mergedArray.push(toPush);
  }
  while(j++ < len2) {
    const toPush = index > 0 ? array2[j][index] : array2[j][index];
    mergedArray.push(toPush);
  }

  return mergedArray;
}

export function mergeSort(array, indexOfSubArray = -1) {
  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid);
  return merge(mergeSort(left, indexOfSubArray), mergeSort(right, indexOfSubArray), indexOfSubArray);
}
