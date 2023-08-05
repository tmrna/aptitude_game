import { AllocationTypes } from "./allocation_types";
import { genContiguousAlloc, genNonContiguousAlloc, getFreeBoxIndicies } from "./allocation_helper";

export function makeAllocation(boxArray, allocationType, allocationSize, allocColor, turnCt) {
	  for(let i = 0; i < boxArray.length; ++i) {
	    if(boxArray[i].turnCt > 0) boxArray[i].turnCt--; 
	    boxArray[i].occupied = boxArray[i].turnCt > 0;
	  }
	var freeIndicies = getFreeBoxIndicies(boxArray);
	const err = "Allocation cannot be made: ";

	// catch for gameover
	if(allocationSize > freeIndicies.length) throw new Error(err + "insufficient resources");


	if(allocationType === AllocationTypes.NonContiguous) {
	    return genNonContiguousAlloc(boxArray, freeIndicies, allocationSize, allocColor, turnCt);
	}

          try {
           return genContiguousAlloc(boxArray, freeIndicies, allocationSize, allocColor, turnCt);
          } catch (allocError) {
            throw new Error(err + allocError.message); 
          }


}

