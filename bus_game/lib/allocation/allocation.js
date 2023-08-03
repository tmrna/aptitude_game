import { AllocationTypes } from "./allocation_types";
import { genContiguousAlloc, genNonContiguousAlloc, getFreeBoxIndicies } from "./allocation_helper";

export function makeAllocation(boxArray, allocationType, allocationSize) {
	console.log("getting free indicies");
	var freeIndicies = getFreeBoxIndicies(boxArray);
	const err = "Allocation cannot be made: ";

	// catch for gameover
	if(allocationSize > freeIndicies.length) throw new Error(err + "insufficient resources");


	if(allocationType === AllocationTypes.NonContiguous) {
	    console.log("making non contig alloc");
	    return genNonContiguousAlloc(boxArray, freeIndicies, allocationSize);
	}

          try {
	    console.log("making contig alloc");
           return genContiguousAlloc(boxArray, freeIndicies, allocationSize);
          } catch (allocError) {
            throw new Error(err + allocError.message); 
          }


}

