// The k-th Lexicographical String of All Happy Strings of Length n

// A happy string is a string that:
//  - consists only of letters of the set ['a', 'b', 'c'].
//  - s[i] != s[i + 1] for all values of i from 1 to s.length - 1 (string is 1-indexed).
// For example, strings "abc", "ac", "b" and "abcbabcbcb" are all happy strings and strings "aa", "baa" and "ababbc" are not happy strings.
// Given two integers n and k, consider a list of all happy strings of length n sorted in lexicographical order.
// Return the kth string of this list or return an empty string if there are less than k happy strings of length n.

// Example:
// Input: n = 3, k = 9
// Output: "cab"
// Explanation: There are 12 different happy string of length 3
// ["aba", "abc", "aca", "acb", "bab", "bac", "bca", "bcb", "cab", "cac", "cba", "cbc"].
// You will find the 9th string = "cab"

// a, b, c로만 이루어진 문자열에서 n은 문자열의 길이로 서로 이웃한 문자열이 같지 않은 모든 경우의 수에서 k번째 요소를 반환하는 문제

const numberOfCases = (n) => {
  if (n === 1) return 3;
  return 3 * 2 * Math.pow(2, n - 2);
};

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getHappyString = function (n, k) {
  if (numberOfCases(n) < k) return "";

  const characters = ["a", "b", "c"];
  const happyStrings = [];

  const generateHappyStrings = (str) => {
    if (str.length === n) return happyStrings.push(str);

    if (str.length < n) {
      for (character of characters) {
        if (str[str.length - 1] !== character) {
          generateHappyStrings(str + character);
        }
      }
    }
  };

  for (character of characters) {
    generateHappyStrings(character);
  }

  return happyStrings[k - 1];
};

// 경우의 수를 먼저 구해서 k보다 작으면 아래 연산 없이 빈스트링을 반환
// a, b, c를 재귀함수로 서로 이웃하는 문자가 같지 않도록 순회
// 12일에 이미 풀어놨으나 업로드를 잊어서 13일에 업로드함
