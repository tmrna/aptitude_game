/////////////////////////////////// ARRAYS //////////////////////////////////////////////////
export function isLast(index, array) {

  if(!Array.isArray(array)){
    if(!Array.isArray(index)){
      throw new TypeError("Array not provided");
    }
    else{
      // user provided array then index, hence the swap.
      return isLast(array, index);
    }
  }

  if(isNaN(index)) {
    throw new TypeError("index is not a number");
  }

  if (index < 0 || index > array.length - 1){
    throw new Error("index is not within proper bounds");
  }

  return array.length - 1 === index;
}
