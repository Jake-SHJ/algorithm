// Maximum Number of Words You Can Type

// There is a malfunctioning keyboard where some letter keys do not work.
// All other keys on the keyboard work properly.
// Given a string text of words separated by a single space (no leading or trailing spaces)
// and a string brokenLetters of all distinct letter keys that are broken,
// return the number of words in text you can fully type using this keyboard.

// Example:
// Input: text = "hello world", brokenLetters = "ad"
// Output: 1
// Explanation: We cannot type "world" because the 'd' key is broken.

// 주어진 문자열에서 망가진 글자를 포함하지 않는 단어의 갯수를 반환하는 문제

/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function (text, brokenLetters) {
  const blArr = brokenLetters.split("");
  const textArr = text.split(" ");
  let result = textArr.length;

  for (let i = 0; i < textArr.length; i++) {
    for (let j = 0; j < blArr.length; j++) {
      if (textArr[i].includes(blArr[j])) {
        result -= 1;
        break;
      }
    }
  }

  return result;
};

// result를 더하면서 끝까지 돌리는 것 보다,
// 문제있는 글자에서 멈추는게 시간적으로 더 이득임
