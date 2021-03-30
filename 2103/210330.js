// Find and Replace Pattern

// You have a list of words and a pattern, and you want to know which words in words matches the pattern.
// A word matches the pattern if there exists a permutation of letters p so that after replacing every letter x in the pattern with p(x), we get the desired word.
// (Recall that a permutation of letters is a bijection from letters to letters: every letter maps to another letter, and no two letters map to the same letter.)
// Return a list of the words in words that match the given pattern.
// You may return the answer in any order.

// Example:
// Input: words = ["abc","deq","mee","aqq","dkd","ccc"], pattern = "abb"
// Output: ["mee","aqq"]
// Explanation: "mee" matches the pattern because there is a permutation {a -> m, b -> e, ...}.
// "ccc" does not match the pattern because {a -> c, b -> c, ...} is not a permutation,
// since a and b map to the same letter.

// 주어진 패턴에 맞는 문자열의 배열을 반환하는 문제

/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
const returnWordToPattern = (word) => {
  const wordSet = Array.from(new Set(word.split("")));
  let result = "";
  for (let i = 0; i < word.length; i++) {
    result += wordSet.indexOf(word[i]);
  }
  return result;
};

var findAndReplacePattern = function (words, pattern) {
  let result = [];
  const newPattern = returnWordToPattern(pattern);
  for (let i = 0; i < words.length; i++) {
    const wordPattern = returnWordToPattern(words[i]);
    if (wordPattern === newPattern) {
      result.push(words[i]);
    }
  }
  return result;
};

// 첫 도전에 문제가 풀린 것은 오랜만인것 같다.
// 우선 들어오는 패턴이나 words에 주어지는 문자열이 일정한 문자열이 아닌 상태이므로 균일하게 패턴을 바꿀 필요가 있다고 생각했다.
// 그래서 문자열을 우선 Set을 통해 중복을 지운 배열로 만들어두고 해당 문자열의 index로 이루어진 숫자형태의 패턴으로 변형했다. abb > 011, aba > 010의 방식
// 각각 숫자로 변형된 패턴과 문자열을 비교하여 같은 숫자의 형태인 경우 답으로 반환하였다.
// 속도, 메모리 측면에서 효율이 괜찮게 나왔다.
