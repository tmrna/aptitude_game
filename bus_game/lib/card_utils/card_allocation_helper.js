import { randBool, randNatural } from "../utilities/rand";

export function getAdjustment() {
  return randNatural(0, 10);
}

export function genAllocVal(value) {
  var allocationValue = (randNatural(1, 99)) % 50;
  return allocationValue + value;
}

export function makeEven(val) {
  if (val == 0) {
    return 2;
  }
  return val + (val % 2 == 0 ? 0 : 1);
}

