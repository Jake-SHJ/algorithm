// Sort Integers by The Power Value

// The power of an integer x is defined as the number of steps needed to transform x into 1 using the following steps:
//  - if x is even then x = x / 2
//  - if x is odd then x = 3 * x + 1
// For example, the power of x = 3 is 7 because 3 needs 7 steps to become 1 (3 --> 10 --> 5 --> 16 --> 8 --> 4 --> 2 --> 1).
// Given three integers lo, hi and k. The task is to sort all integers in the interval [lo, hi] by the power value in ascending order, if two or more integers have the same power value sort them by ascending order.
// Return the k-th integer in the range [lo, hi] sorted by the power value.
// Notice that for any integer x (lo <= x <= hi) it is guaranteed that x will transform into 1 using these steps and that the power of x is will fit in 32 bit signed integer.

// Example:
// Input: lo = 12, hi = 15, k = 2
// Output: 13
// Explanation: The power of 12 is 9 (12 --> 6 --> 3 --> 10 --> 5 --> 16 --> 8 --> 4 --> 2 --> 1)
// The power of 13 is 9
// The power of 14 is 17
// The power of 15 is 17
// The interval sorted by the power value [12,13,14,15]. For k = 2 answer is the second element which is 13.
// Notice that 12 and 13 have the same power value and we sorted them in ascending order. Same for 14 and 15.

// 주어진 lo부터 hi사이의 숫자들의 power를 구한 뒤, power의 오름차순으로 정렬하여 k번째(index 아님) 요소를 반환하는 문제

/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
const findPower = (num, steps = 0) => {
  let result = steps;
  if (num === 1) return result;

  if (num % 2 === 0) {
    num /= 2;
    result += 1;
    if (num !== 1) return findPower(num, result);
  } else {
    num = 3 * num + 1;
    result += 1;
    return findPower(num, result);
  }

  return result;
};

var getKth = function (lo, hi, k) {
  const map = new Map();
  for (let i = lo; i < hi + 1; i++) {
    map.set(i, findPower(i));
  }
  const resultArr = [...map.entries()].sort((a, b) => a[1] - b[1]);
  return resultArr[k - 1][0];
};

// 생각보다 쉽게 풀려서 놀란 문제
// lo부터 hi까지의 숫자를 Map의 key로 설정, power값을 findPower 함수로 찾고 해당 값을 Map의 value로 설정
// 그렇게 정리된 Map을 entries로 Iterator 객체로 반환하여 value 기준으로 정렬
// 정렬된 Iterator 객체에서 k번째(index로 k-1) 요소의 key 값을 반환
