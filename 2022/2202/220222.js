// 1-bit and 2-bit Characters

// We have two special characters:
//     - The first character can be represented by one bit 0.
//     - The second character can be represented by two bits (10 or 11).
// Given a binary array bits that ends with 0, return true if the last character must be a one-bit character.

// Example:
// Input: bits = [1,0,0]
// Output: true
// Explanation: The only way to decode it is two-bit character and one-bit character.
// So the last character is one-bit character.

// 주어진 배열에서 마지막이 one-bit인지 여부를 반환하는 문제

/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
  // 마지막 하나만 남을 때까지
  while (bits.length > 1) {
    // 1이 먼저면 2개를 제거
    if (bits[0] === 1) {
      bits.splice(0, 2);
      continue;
    }
    // 0이 먼저면 하나만 제거
    if (bits[0] === 0) {
      bits.splice(0, 1);
    }
  }
  // 마지막은 무조건 0이므로 1개만 남으면 true
  if (bits.length === 1) return true;
  return false;
};
