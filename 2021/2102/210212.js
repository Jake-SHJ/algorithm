// Relative Sort Array

// Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

// Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2.
// Elements that don't appear in arr2 should be placed at the end of arr1 in ascending order.

// Example:
// Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
// Output: [2,2,2,1,4,3,3,9,6,7,19]

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
  let includeArr = [];
  let excludeArr = arr1
    .filter((val) => !arr2.includes(val))
    .sort((a, b) => a - b);
  arr1.map((arr1Num) => {
    if (arr2.includes(arr1Num)) {
      includeArr.push(arr1Num);
    }
  });
  includeArr.sort((a, b) => arr2.indexOf(a) - arr2.indexOf(b));
  return [...includeArr, ...excludeArr];
};
