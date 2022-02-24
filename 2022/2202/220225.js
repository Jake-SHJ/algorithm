// Find Smallest Letter Greater Than Target

// Given a characters array letters that is sorted in non-decreasing order and a character target,
// return the smallest character in the array that is larger than target.
// Note that the letters wrap around.
// For example, if target == 'z' and letters == ['a', 'b'], the answer is 'a'.

// Example:
// Input: letters = ["c","f","j"], target = "a"
// Output: "c"

// 주어진 순회할 수 있는 문자 배열에서 타겟보다 크고, 배열 내에선 가장 작은 문자를 반환하는 문제

/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
var nextGreatestLetter = function (letters, target) {
  let result;
  const tCode = target.charCodeAt();

  for (let i = 0; i < letters.length; i++) {
    const code = letters[i].charCodeAt();
    // 마지막 문자보다 타겟이 더 크면 무조건 배열 맨 앞의 문자
    if (letters[letters.length - 1].charCodeAt() <= tCode) {
      result = letters[0];
      break;
    }
    // 이미 오름차순 문자열이기 때문에 타겟보다 크기만 하면 조기반환
    if (code > tCode) {
      result = letters[i];
      break;
    }
  }

  return result;
};
