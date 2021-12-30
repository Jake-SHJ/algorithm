// Iterator for Combination

// Design the CombinationIterator class:
//  - CombinationIterator(string characters, int combinationLength) Initializes the object with a string characters of sorted distinct lowercase English letters and a number combinationLength as arguments.
//  - next() Returns the next combination of length combinationLength in lexicographical order.
//  - hasNext() Returns true if and only if there exists a next combination.

// Example:
// Input
// ["CombinationIterator", "next", "hasNext", "next", "hasNext", "next", "hasNext"]
// [["abc", 2], [], [], [], [], [], []]
// Output
// [null, "ab", true, "ac", true, "bc", false]
// Explanation
// CombinationIterator itr = new CombinationIterator("abc", 2);
// itr.next();    // return "ab"
// itr.hasNext(); // return True
// itr.next();    // return "ac"
// itr.hasNext(); // return True
// itr.next();    // return "bc"
// itr.hasNext(); // return False

// 주어진 문자열을 주어진 길이만큼의 문자열의 모든 경우의 수에 대한 클래스 생성하는 문제

/**
 * @param {string} characters
 * @param {number} combinationLength
 */
var CombinationIterator = function (characters, combinationLength) {
  this.result = [];
  const findCombinations = (char, string) => {
    if (string.length === combinationLength) {
      return this.result.push(string);
    }
    for (let i = 0; i < char.length; i++) {
      findCombinations(char.slice(i + 1), string + char[i]);
    }
  };
  findCombinations(characters, "");
};

/**
 * @return {string}
 */
CombinationIterator.prototype.next = function () {
  return this.result.shift();
};

/**
 * @return {boolean}
 */
CombinationIterator.prototype.hasNext = function () {
  return this.result.length !== 0 ? true : false;
};

/**
 * Your CombinationIterator object will be instantiated and called as such:
 * var obj = new CombinationIterator(characters, combinationLength)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */

// 재귀함수를 만드는데 조금 애먹어서 discuss를 참고 했다.
// 재귀함수의 요소를 보니, 재귀를 탈출하기 위한 조건과 재귀문이 구성되어 있고,
// 재귀 대상이 되는 값, 그리고 탈출 조건에 필요한 값을 인자로 넘기는 것이 기본 구성인 듯..
// discuss에는 쓰지 않는 인자도 넘기던데 해당 부분은 불필요하여 제거하였다.
