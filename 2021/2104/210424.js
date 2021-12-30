// Evaluate the Bracket Pairs of a String

// You are given a string s that contains some bracket pairs, with each pair containing a non-empty key.
//     - For example, in the string "(name)is(age)yearsold", there are two bracket pairs that contain the keys "name" and "age".

// You know the values of a wide range of keys.
// This is represented by a 2D string array knowledge where each knowledge[i] = [keyi, valuei] indicates that key keyi has a value of valuei.

// You are tasked to evaluate all of the bracket pairs. When you evaluate a bracket pair that contains some key keyi, you will:
//     - Replace keyi and the bracket pair with the key's corresponding valuei.
//     - If you do not know the value of the key, you will replace keyi and the bracket pair with a question mark "?" (without the quotation marks).

// Each key will appear at most once in your knowledge. There will not be any nested brackets in s.
// Return the resulting string after evaluating all of the bracket pairs.

// Example:
// Input: s = "(name)is(age)yearsold", knowledge = [["name","bob"],["age","two"]]
// Output: "bobistwoyearsold"
// Explanation:
// The key "name" has a value of "bob", so replace "(name)" with "bob".
// The key "age" has a value of "two", so replace "(age)" with "two".

// 주어진 문자열에 치환자가 있으면 치환하고 없는 치환자의 경우 ?를 넣어서 반환하는 문제

/**
 * @param {string} s
 * @param {string[][]} knowledge
 * @return {string}
 */
var evaluate = function (s, knowledge) {
  let result = s;
  const knowledgeMap = new Map(knowledge);

  for (let i = 0; i < s.length; i++) {
    let target = "";
    if (s[i] === "(") {
      while (s[i - 1] !== ")") {
        target += s[i];
        i++;
      }
      knowledgeMap.has(target.slice(1, target.length - 1))
        ? (result = result.replace(
            target,
            knowledgeMap.get(target.slice(1, target.length - 1))
          ))
        : (result = result.replace(target, "?"));
    }
  }
  return result;
};

// 첫 시도에서 while 문을 통해 치환자를 찾아냈는데
// 연속된 치환자가 나오는 경우 idx를 한번 건너뛰는 탓에 치환이 정상적으로 이뤄지지 못함
// 즉 (a)(a)면, 첫번째는 정상적으로 치환하더라도, 다음 (a)의 "("의 인덱스를 건너뛰기 때문에 문제가 발생하였음

var evaluate = function (s, knowledge) {
  let result = s;
  const knowledgeMap = new Map(knowledge);

  for (let i = 0; i < s.length; i++) {
    let target = "";
    if (s[i] === "(") {
      target += s[i];
      for (i; s[i] !== ")"; i++) {
        target += s[i + 1];
      }
      knowledgeMap.has(target.slice(1, target.length - 1))
        ? (result = result.replace(
            target,
            knowledgeMap.get(target.slice(1, target.length - 1))
          ))
        : (result = result.replace(target, "?"));
    }
  }
  return result;
};

// 통과한 답안
// while문을 for 문으로 바꾸고 target 주입 방식을 반대로 해서, 다음 문자열 찾기에 지장이 없도록 수정하였다.

// 답안에는 없지만 초반 문제점 하나는 result 없이 s를 직접 치환시켰더니 문자열 길이 변화로 인해
// 정상적인 답안을 얻기 어려웠음, 기준이 되는 문자열은 유지시키고 다른 복사된 값을 치환하여 반환하는 것이 옳다.
