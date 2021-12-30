// Determine if String Halves Are Alike

// You are given a string s of even length. Split this string into two halves of equal lengths, and let a be the first half and b be the second half.
// Two strings are alike if they have the same number of vowels ('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'). Notice that s contains uppercase and lowercase letters.
// Return true if a and b are alike. Otherwise, return false.

// Example:
// Input: s = "book"
// Output: true
// Explanation: a = "bo" and b = "ok". a has 1 vowel and b has 1 vowel. Therefore, they are alike.

// 주어진 문자열을 반으로 갈랐을 때, 두 문자열이 가진 모음의 갯수가 같은지 여부를 반환하는 문제

/**
 * @param {string} s
 * @return {boolean}
 */
const vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
var halvesAreAlike = function (s) {
  const half = s.length / 2;
  let count = 0;

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i])) {
      i < half ? (count += 1) : (count -= 1);
    } else {
      continue;
    }
  }

  return count === 0 ? true : false;
};

// 처음엔 slice로 문자열을 직접 가르고, 순회 내에서 두 문자열의 모음에 대하여 count를 조절하려 했음
// 하지만 가르고 변수에 저장함으로써, 메모리 손실 발생
// 따라서, 전체를 순회하여 중간을 기점으로 count를 조절함으로써 불필요한 메모리 사용을 줄임
