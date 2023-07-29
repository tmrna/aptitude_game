import randBool from "../utilities/rand_bool";

export default function allocationCalculator(value, allocationType) {
  if (allocationType === "Contiguous"){
    //return genAllocVal(value);
    return 1;
  }  
  else {
    //return makeEven(genAllocVal(value));
    return 0;
  }
}

function getAdjustment() {
  return Math.floor(Math.random() * 10);
}

function genAllocVal(value, adjustment) {
  const adjustment = getAdjustment();
  var allocationValue = Math.floor(Math.random() * 10 * value) % 50;
  allocationValue += randBool() ? adjustment : (-1) * adjustment;
  return allocationValue === 0 ? adjustment: Math.abs(allocationValue);
}

function makeEven(val) {
  if (val === 0) {
    return 2;
  }
  return val + (val % 2 ? 0 : 1);
}
