// Count Items Matching a Rule

// You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item.
// You are also given a rule represented by two strings, ruleKey and ruleValue.
// The ith item is said to match the rule if one of the following is true:
//  - ruleKey == "type" and ruleValue == typei.
//  - ruleKey == "color" and ruleValue == colori.
//  - ruleKey == "name" and ruleValue == namei.
// Return the number of items that match the given rule.

// Example:
// Input: items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], ruleKey = "color", ruleValue = "silver"
// Output: 1
// Explanation: There is only one item matching the given rule, which is ["computer","silver","lenovo"].

// 주어진 규칙에 맞는 아이템의 개수를 반환하는 문제

/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  let result = 0;

  // discuss를 보니 보통 ruleHash로 작명하는 듯
  const ruleKeys = {
    type: 0,
    color: 1,
    name: 2,
  };

  // discuss에선 보통 reduce를 써서 result를 따로 저장하는 것 같진 않았으나
  // 따로 저장한다고 메모리 효율이 극한으로 떨어지진 않았음
  items.map((item) => {
    if (item[ruleKeys[ruleKey]] === ruleValue) {
      result += 1;
    }
  });

  return result;
};
