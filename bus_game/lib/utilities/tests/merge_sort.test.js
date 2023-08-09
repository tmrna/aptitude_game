import { mergeSort, merge, ASCENDING_SORT, DESCENDING_SORT } from "../merge_sort";
import { test, expect } from "vitest";
import { randNatural } from "../rand";

test("testing merge standard", () => {
  let left = [3, 4, 7];
  let right = [2, 6, 9];
  let res = merge(left, right);
  expect(res).toStrictEqual([2,3,4,6,7,9])
})

test("testing standard merge on one", () => {
  var toTest = [0];
  toTest = mergeSort(toTest);
  expect(toTest).toStrictEqual([0]);
})

test("testing merge on non-trivial array", () => {
  var toTest = [99, -3, 55, 2, -1, -9000, 4];
  toTest = mergeSort(toTest)
  expect(toTest).toStrictEqual([-9000, -3, -1, 2, 4, 55, 99])
})

test("testing merge on 2d", () => {
  var toTest = [["hello", 3], ["world", -1]];
  toTest = mergeSort(toTest, 1);
  expect(toTest).toStrictEqual([["world", -1], ["hello", 3]]);
})

test("merge with repeating values", () => {
    var toTest = [0, 0, 0, 0, -1, 3, -4, 9, 4];
    toTest = mergeSort(toTest);
    console.log(toTest);
    expect(toTest).toStrictEqual([-4, -1, 0, 0, 0, 0, 3, 4, 9]);
})

test("testing large array for recursion limit", () => {
  const testSize = 10000000;
  var toTest = [];
  for(let i = 0; i < testSize; ++i) {
    toTest.push(randNatural(0, i));
  }
  toTest = mergeSort(toTest);
  expect(toTest.length).toStrictEqual(testSize);
  for(let i = 0; i < toTest.length - 1; ++i) {
    expect(toTest[i]).lessThanOrEqual(toTest[i + 1]);
  }
})

test("testing descending sort", () => {
  var toTest = [1, 2, 3];
  toTest = mergeSort(toTest, DESCENDING_SORT);
  expect(toTest).toStrictEqual([3, 2, 1]);
})
