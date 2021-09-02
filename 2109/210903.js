// Minimum Time to Type Word Using Special Typewriter

// There is a special typewriter with lowercase English letters 'a' to 'z' arranged in a circle with a pointer.
// A character can only be typed if the pointer is pointing to that character.
// The pointer is initially pointing to the character 'a'.
// Each second, you may perform one of the following operations:
//  - Move the pointer one character counterclockwise or clockwise.
//  - Type the character the pointer is currently on.
// Given a string word, return the minimum number of seconds to type out the characters in word.

// Example:
// Input: word = "abc"
// Output: 5
// Explanation:
// The characters are printed as follows:
// - Type the character 'a' in 1 second since the pointer is initially on 'a'.
// - Move the pointer clockwise to 'b' in 1 second.
// - Type the character 'b' in 1 second.
// - Move the pointer clockwise to 'c' in 1 second.
// - Type the character 'c' in 1 second.

// 주어진 문자열을 원형의 입력기로 입력할 때 걸리는 최단 시간을 반환하는 문제

/**
 * @param {string} word
 * @return {number}
 */
var minTimeToType = function (word) {
  const string = "abcdefghijklmnopqrstuvwxyz";
  let prev = 0;
  let result = 0;

  for (let i = 0; i < word.length; i++) {
    const index = string.indexOf(word[i]);
    const move = Math.abs(index - prev);
    result += Math.min(move, 26 - move) + 1;
    prev = index;
  }

  return result;
};
// 처음엔 무식하게 어떻게 최단시간으로 한번에 움직일까를 고민하다가
// discuss를 보니 Math.min으로 두 시간을 비교하는 식으로 풀어내니 쉬웠음...
