import { makeNatural } from "./type";

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

