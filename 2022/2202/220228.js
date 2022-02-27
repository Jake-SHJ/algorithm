// Add to Array-Form of Integer

// The array-form of an integer num is an array representing its digits in left to right order.
// For example, for num = 1321, the array form is [1,3,2,1].
// Given num, the array-form of an integer, and an integer k, return the array-form of the integer num + k.

// Example 1:
// Input: num = [1,2,0,0], k = 34
// Output: [1,2,3,4]
// Explanation: 1200 + 34 = 1234

// 주어진 숫자를 자리수마다 갈라놓은 배열과 숫자의 합을 배열로 반환하는 문제

/**
 * @param {number[]} num
 * @param {number} k
 * @return {number[]}
 */
var addToArrayForm = function (num, k) {
  let i = num.length - 1;
  let res = [];

  while (i >= 0 || k > 0) {
    if (i >= 0) {
      res.push((num[i] + k) % 10);
      k = Math.trunc((num[i] + k) / 10);
      i--;
    } else {
      res.push(k % 10);
      k = Math.trunc(k / 10);
    }
  }

  return res.reverse();
};
// 4번 틀리고 discuss 참조..
// 꾸역꾸역 정방향으로 계산하다가 연속으로 더해지는 예시에서 망함
// 역순으로 계산하고, 다시 되돌리는 방식
