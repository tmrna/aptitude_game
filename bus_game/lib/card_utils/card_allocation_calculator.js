import { genAllocVal, makeEven } from "./allocation_helper";
export default function allocationCalculator(value, allocationType) {
  if (allocationType === "Contiguous"){
    return genAllocVal(value);
  }  
  else {
    return makeEven(genAllocVal(value));
  }
}

