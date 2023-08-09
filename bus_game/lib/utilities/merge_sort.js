export function merge(array1, array2, index = -1) {
  var mergedArray = [];
  var i = 0;
  var j = 0;
  const len1 = array1.length;
  const len2 = array2.length;

  while(i < len1 && j < len2) {
    const takeFrom1 = index > 0 ? array1[i][index] < array2[j][index] : array1[i] < array2[j];
    var pushedElement;
    pushedElement = takeFrom1 ? array1[i++] : array2[j++]; 
    mergedArray.push(pushedElement);
  }

  while(i < len1) {
    mergedArray.push(array1[i++]);
  }

  while(j < len2) {
    mergedArray.push(array2[j++]);
  }

  return mergedArray;
}

export function mergeSort(array, indexOfSubArray = -1) {
  if(array.length < 2) return array;
  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid, array.length);

  return merge(
    mergeSort(left, indexOfSubArray),
    mergeSort(right, indexOfSubArray),
    indexOfSubArray);
}
