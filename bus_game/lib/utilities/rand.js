export function randBool() {
  return Math.floor(Math.random() * 2);
}

// Generates random natural number in [lowerBound, upperBound], returns null on failure
export function randNatural(lowerBound, upperBound) {
  if (lowerBound >= upperBound) {
    return null;
  }
  const difference = upperBound - lowerBound;
  const baseValue = Math.floor(Math.random() * 10 * upperBound ) % (difference + 1);
  return lowerBound + baseValue;
}

