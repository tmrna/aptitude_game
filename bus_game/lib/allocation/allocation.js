import { AllocationTypes } from "./allocation_types";
import { genContiguousAlloc, genNonContiguousAlloc, getFreeBoxIndicies } from "./allocation_helper";

export function makeAllocation(boxArray, {allocationType}, {allocationSize}) {
	var freeIndicies = getFreeBoxIndicies(boxArray);
	const err = "Allocation cannot be made: ";

	// catch for gameover
	if(allocationSize > freeIndicies.length) throw new Error(err + "insufficient resources");


	if(allocationType === AllocationTypes.NonContiguous) {
	    return genNonContiguousAlloc(boxArray, freeIndicies, allocationSize);
	}

	if(allocationType === AllocationTypes.Contiguous) {
          try {
           return genContiguousAlloc(boxArray, freeIndicies, allocationSize);
          } catch (allocError) {
            throw new Error(err + allocError.message); 
          }
	}


}

