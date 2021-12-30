// Count Sorted Vowel Strings

// Given an integer n, return the number of strings of length n that consist only of vowels (a, e, i, o, u) and are lexicographically sorted.
// A string s is lexicographically sorted if for all valid i, s[i] is the same as or comes before s[i+1] in the alphabet.

// Example:
// Input: n = 2
// Output: 15
// Explanation: The 15 sorted strings that consist of vowels only are
// ["aa","ae","ai","ao","au","ee","ei","eo","eu","ii","io","iu","oo","ou","uu"].
// Note that "ea" is not a valid string since 'e' comes after 'a' in the alphabet.

/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function (n) {
  const result = [1, 1, 1, 1, 1];
  if (n === 1) return result.reduce((acc, cur) => acc + cur, 0);

  for (let i = 2; i < n + 1; i++) {
    result[3] += result[4];
    result[2] += result[3];
    result[1] += result[2];
    result[0] += result[1];
  }

  return result.reduce((acc, cur) => acc + cur, 0);
};

// 주어진 n만큼 중복은 허용하되 순서를 지키는 경우의 수를 구하는 문제 (aa는 되지만 ea는 안됨, a e i o u의 순서를 지킬 것)
// 일일이 세려면 분명 timeout 걸릴 것이기 때문에 결과를 보고 추론
// n = 1 => 1 1 1 1 1
// n = 2 => 5 4 3 2 1
// n = 3 => 15 10 6 3 1
// n = 4 => 35 20 10 4 1
// 따라가보니 n + 1의 수는 n의 다음 인덱스의 수를 더하면 됨, 그렇게 나온 결과가 위의 답안 메모리나 속도나 나쁘지 않은 결과

var countVowelStrings = function (n) {
  return (
    5 +
    10 * combination(n - 1, 1) +
    10 * combination(n - 1, 2) +
    5 * combination(n - 1, 3) +
    combination(n - 1, 4)
  );
};

function combination(n, k) {
  if (k === 1) return n;

  return (combination(n - 1, k - 1) * n) / k;
}
// discuss 에서 발견한 combination으로 푸는 식, 근데 효율은 차이가 나지 않았다.

var countVowelStrings = function (n) {
  let res = 0;

  helper(n, 0);

  function helper(n, startIdx) {
    // base case
    if (n === 0) {
      res++;
      return;
    }

    // recursive case
    for (let i = startIdx; i < 5; i++) {
      helper(n - 1, i);
    }
  }

  return res;
};
// backtracking 방식도 있는데 메모리 효율은 비슷하고, 속도는 오히려 느렸다.
