// Most Common Word

// Given a string paragraph and a string array of the banned words banned,
// return the most frequent word that is not banned.
// It is guaranteed there is at least one word that is not banned, and that the answer is unique.
// The words in paragraph are case-insensitive and the answer should be returned in lowercase.

// Example:
// Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
// Output: "ball"
// Explanation:
// "hit" occurs 3 times, but it is a banned word.
// "ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph.
// Note that words in the paragraph are not case sensitive,
// that punctuation is ignored (even if adjacent to words, such as "ball,"),
// and that "hit" isn't the answer even though it occurs more because it is banned.

// 주어진 문자열에서 가장 많이 나온 단어를 반환하는 문제

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
var mostCommonWord = function (paragraph, banned) {
  // 특수문자 제거 및 배열화
  const pArr = paragraph
    .replaceAll(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, " ")
    .split(" ");
  const map = new Map();
  let result;
  // 카운트 매핑
  for (let i = 0; i < pArr.length; i++) {
    const lc = pArr[i].toLowerCase();
    if (banned.includes(lc) || lc === "") {
      continue;
    }
    map.set(lc, (map.get(lc) || 0) + 1);
  }
  // 가장 많이 나온 단어 서칭
  for (const [key, value] of map) {
    if (!result) result = key;
    map.get(result) < value ? (result = key) : null;
  }
  return result;
};
