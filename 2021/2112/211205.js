// Redistribute Characters to Make All Strings Equal

// You are given an array of strings words (0-indexed).
// In one operation, pick two distinct indices i and j, where words[i] is a non-empty string,
// and move any character from words[i] to any position in words[j].
// Return true if you can make every string in words equal using any number of operations, and false otherwise.

// Example:
// Input: words = ["abc","aabc","bc"]
// Output: true
// Explanation: Move the first 'a' in words[1] to the front of words[2],
// to make words[1] = "abc" and words[2] = "abc".
// All the strings are now equal to "abc", so return true.

// 주어진 배열의 문자열을 동일하게 재배열 할 수 있는지 여부를 반환하는 문제

/**
 * @param {string[]} words
 * @return {boolean}
 */
var makeEqual = function (words) {
  let chars = {};

  for (const word of words) {
    for (const char of word) {
      chars[char] = (chars[char] || 0) + 1;
    }
  }

  for (const char in chars) {
    if (chars[char] % words.length) return false;
  }

  return true;
};

// '재배열했을 때 동일한 문자열을 만들 수 있는가' 를 어떻게 해결할 수 있는가
// 전체 문자의 갯수를 뽑아서 배열의 길이로 나누었을 때, 나누어 떨어지면 동등하게 배분이 가능 < 이걸 몰라서 discuss를 보고 말았음
// 사실 알고리즘 자체는 어렵지 않으나, 문제를 어떻게 해결하느냐가 잘 안떠오름..
