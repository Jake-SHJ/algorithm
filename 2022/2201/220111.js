// Ransom Note

// Given two stings ransomNote and magazine, return true if ransomNote can be constructed from magazine and false otherwise.
// Each letter in magazine can only be used once in ransomNote.

// Example:
// Input: ransomNote = "a", magazine = "b"
// Output: false

// 주어진 두 문자열에서 ransomNote에 있는 문자열이 magazine에 전부 포함되어 있는지를 판단하는 문제

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  let target = ransomNote;

  for (const c of magazine) {
    const repl = target.replace(c, "");
    target = repl;
  }

  return !target.length;
};
