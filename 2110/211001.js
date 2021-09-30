// Find Common Characters

// Given a string array words, return an array of all characters that show up in all strings within the words (including duplicates).
// You may return the answer in any order.

// Example:
// Input: words = ["bella","label","roller"]
// Output: ["e","l","l"]

// 주어진 배열에서 공통으로 볼 수 있는 문자를 반환하는 문제

/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function (words) {
  let result = [...words[0]];

  for (let i = 0; i < words.length; i++) {
    // 문자열 하나를 순회할 때 마다, 공통된 문자열만 남게되는 방식
    result = result.filter((char) => {
      const leng = words[i].length;
      words[i] = words[i].replace(char, "");
      return leng > words[i].length;
    });
  }

  return result;
};

// discuss 참조
// 문자열을 순회한 다음 어떻게 공통된 문자만 빼낼 지에 대한 아이디어가 생각나지 않음
// filter를 통해 해당 문자열에 존재하는 문자만 남기는 방식으로 해결
