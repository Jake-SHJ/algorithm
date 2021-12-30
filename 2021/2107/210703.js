// Shuffle String

// Given a string s and an integer array indices of the same length.
// The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.
// Return the shuffled string.

// Example:
// Input: s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// Output: "leetcode"
// Explanation: As shown, "codeleet" becomes "leetcode" after shuffling.

// 뒤섞인 인덱스를 가진 문자열을 순서대로 배치한 문자열로 반환하는 문제

/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */
var restoreString = function (s, indices) {
  let result = [];

  for (let i = 0; i < s.length; i++) {
    result[indices[i]] = s[i];
  }

  return result.join("");
};

// 처음엔 map에 저장해서 다시 문자를 뽑아낼까 했으나, 그렇게 되면 순회를 두 번 거치게 됨
// 따라서, 배열에 인덱스대로 넣은 뒤 join을 통해 문자열을 반환하도록 함
