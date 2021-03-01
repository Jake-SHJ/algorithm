// Long Pressed Name

// Your friend is typing his name into a keyboard.
// Sometimes, when typing a character c, the key might get long pressed, and the character will be typed 1 or more times.
// You examine the typed characters of the keyboard.
// Return True if it is possible that it was your friends name, with some characters (possibly none) being long pressed.

// Example:
// Input: name = "saeed", typed = "ssaaedd"
// Output: false
// Explanation: 'e' must have been pressed twice, but it wasn't in the typed output.

/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
  let nameArr = Array.from(name);
  let typedArr = Array.from(typed);
  let result;
  for (let i = 0; i < nameArr.length; i++) {
    let missCount = 0;
    if (missCount > 1) {
      return (result = false);
    }
    for (let j = 0; j < typedArr.length; j++) {
      if (i === nameArr.length - 1 && nameArr[i] !== typedArr[j]) {
        return (result = false);
      } else if (nameArr[i] !== typedArr[j]) {
        missCount++;
        j = typedArr.length;
      } else {
        typedArr.splice(0, 1);
        if (missCount === 1) {
          missCount--;
        }
      }
    }
  }
  return (result = true);
};
// 마지막 시도..
// missCount가 제대로 측정이 안됨, Array 전환, 중첩 반복등으로 메모리 효율도 안좋았을듯, accept 안되서 결과 확인 못함

// 못풀어서 discuss 참고..
/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
var isLongPressedName = function (name, typed) {
  for (var i = 0, j = 0; i < typed.length && j <= name.length; i++) {
    if (typed[i] == name[j]) j++;
    else if (typed[i] != name[j - 1]) return false;
  }
  return i == typed.length && j == name.length;
};
