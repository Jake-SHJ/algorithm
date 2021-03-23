// Letter Tile Possibilities

// You have n  tiles, where each tile has one letter tiles[i] printed on it.
// Return the number of possible non-empty sequences of letters you can make using the letters printed on those tiles.

// Example:
// Input: tiles = "AAB"
// Output: 8
// Explanation: The possible sequences are "A", "B", "AA", "AB", "BA", "AAB", "ABA", "BAA".

/**
 * @param {string} tiles
 * @return {number}
 */
const numTilePossibilities = (tiles, word = "", words = new Set()) => {
  words.add(word);

  for (let i = 0; i < tiles.length; i++) {
    // 모든 자릿수를 순회
    numTilePossibilities(
      tiles.slice(0, i) + tiles.slice(i + 1), // 지금 보는 타일을 제외한 나머지
      word + tiles[i], // word에 지금 보는 타일 추가
      words // set 전달
    );
  }

  return words.size - 1; // 최초의 빈 스트링 제외한 나머지 갯수
};

// 가능한 모든 문자열 조합의 수를 구하는 문제
// 일단 못 풀었음, 위 답안은 discuss 참고

// set으로 중복을 막는다까지는 생각했으나 문자열을 어떻게 모든 경우의 수에 대한 순회를 돌지를 생각하지 못함
// 재귀활용을 잘할 것
