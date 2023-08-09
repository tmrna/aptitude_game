import { AllocationTypes } from "../allocation/allocation_types";

export function randBool() {
  return Math.floor(Math.random() * 2);
}

// Generates random natural number in [lowerBound, upperBound], if lower > upper returns randNatural(upper, lower). 
export function randNatural(lowerBound, upperBound) {
  lowerBound = Math.ceil(lowerBound); 
  upperBound = Math.floor(upperBound);

  if(lowerBound > upperBound) return randNatural(upperBound, lowerBound);
  if(lowerBound == upperBound) return lowerBound;
  
  const difference = upperBound - lowerBound;
  return Math.floor(Math.random() * (difference + 1)) + lowerBound;
}

export function shuffel(targetArray) {
  const len = targetArray.length;
  for(let i = 0; i < len; ++i) {
    const tmp = targetArray[i];
    const swapIndex = randNatural(0, len - 1);
    targetArray[i] = targetArray[swapIndex];
    targetArray[swapIndex] = tmp;
  }
}

export function randAllocType() {
  return randBool() ? AllocationTypes.NonContiguous : AllocationTypes.Contiguous;
}
