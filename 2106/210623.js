// Check Array Formation Through Concatenation

// You are given an array of distinct integers arr and an array of integer arrays pieces, where the integers in pieces are distinct.
// Your goal is to form arr by concatenating the arrays in pieces in any order.
// However, you are not allowed to reorder the integers in each array pieces[i].
// Return true if it is possible to form the array arr from pieces. Otherwise, return false.

// Example:
// Input: arr = [15,88], pieces = [[88],[15]]
// Output: true
// Explanation: Concatenate [15] then [88]

// 주어진 pieces로 arr을 만들 수 있는지에 대한 여부를 반환하는 문제

/**
 * @param {number[]} arr
 * @param {number[][]} pieces
 * @return {boolean}
 */
var canFormArray = function (arr, pieces) {
  let result;
  const strArr = [arr.join("")];
  const strPieces = pieces.map((piece) => {
    return piece.join("");
  });

  for (let i = 0; i < strPieces.length; i++) {
    if (strArr[0].includes(strPieces[i])) {
      result = true;
      continue;
    } else {
      return (result = false);
    }
  }

  return result;
};

// 각각을 string으로 변환하여 판단하게끔 풀었으나
// [12], [[1]]의 케이스를 true로 반환하는 문제가 발생

var canFormArray = function (arr, pieces) {
  arr = arr.join("");
  let total = "";

  for (let i = 0; i < pieces.length; i++) {
    pieces[i] = pieces[i].join("");
    total += pieces[i];
    if (arr.indexOf(pieces[i]) == -1) return false;
  }

  return total.length === arr.length;
};

// discuss를 확인해보니 길이로 판단..
// 거의 접근했는데 마무리를 못해서 아쉬움
