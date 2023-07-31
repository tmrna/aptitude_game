import { makeNatural } from "./type";

export function randBool() {
  return Math.floor(Math.random() * 2);
}

// Generates random natural number in [lowerBound, upperBound], if lower > upper returns randNatural(upper, lower). 
export function randNatural(lowerBound, upperBound) {
  lowerBound = makeNatural(lowerBound);
  upperBound = makeNatural(upperBound);

  if(lowerBound > upperBound) return randNatural(upperBound, lowerBound);
  if(lowerBound == upperBound) return lowerBound;
  
  const difference = upperBound - lowerBound;
  const baseValue = Math.floor(Math.random() * 10 * upperBound ) % (difference + 1);
  return lowerBound + baseValue;
}

