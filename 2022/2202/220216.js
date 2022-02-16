// Backspace String Compare

// Given two strings s and t, return true if they are equal when both are typed into empty text editors.
// '#' means a backspace character.
// Note that after backspacing an empty text, the text will continue empty.

// Example:
// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".

// #이 백스페이스일 때, 두 문자열의 최종 문자열이 같은지 여부를 반환하는 문제

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  // 더 긴 쪽이 기준
  const length = s.length > t.length ? s.length : t.length;
  // 백스페이스 적용 문자열
  let bs = "",
    bt = "";
  // 문자열 순회
  for (let i = 0; i < length; i++) {
    // #이 있으면 이전 문자열 삭제
    if (s[i] && s[i] !== "#") {
      bs += s[i];
    } else if (s[i] && s[i] === "#") {
      bs = bs.slice(0, -1);
    }

    if (t[i] && t[i] !== "#") {
      bt += t[i];
    } else if (t[i] && t[i] === "#") {
      bt = bt.slice(0, -1);
    }
  }
  // 일치 결과 반환
  return bs === bt;
};
