// Minimum Operations to Make Array Equal

// You have an array arr of length n where arr[i] = (2 * i) + 1 for all valid values of i (i.e. 0 <= i < n).
// In one operation, you can select two indices x and y where 0 <= x, y < n and subtract 1 from arr[x] and add 1 to arr[y] (i.e. perform arr[x] -=1 and arr[y] += 1).
// The goal is to make all the elements of the array equal. It is guaranteed that all the elements of the array can be made equal using some operations.
// Given an integer n, the length of the array. Return the minimum number of operations needed to make all the elements of arr equal.

// Example:
// Input: n = 3
// Output: 2
// Explanation: arr = [1, 3, 5]
// First operation choose x = 2 and y = 0, this leads arr to be [2, 3, 4]
// In the second operation choose x = 2 and y = 0 again, thus arr = [3, 3, 3].

/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function (n) {
  const result = [];
  if (n % 2 === 1) {
    for (let i = n; i > 0; i--) {
      result.push(n - i);
      --i;
    }
  } else {
    for (let i = n; i > 0; i--) {
      result.push(n - i + 1);
      --i;
    }
  }
  return result.reduce((acc, cur) => acc + cur, 0);
};

// 첫 제출, 한번에 풀었으나 코드를 더 줄일 수 있을 것 같음

var minOperations = function (n) {
  let result = 0;
  if (n % 2 === 1) {
    for (let i = n; i > 0; i--) {
      result += n - i;
      --i;
    }
  } else {
    for (let i = n; i > 0; i--) {
      result += n - i + 1;
      --i;
    }
  }
  return result;
};

// 두번째 시도, result를 배열이 아닌 숫자로 바로 더하도록 바꿈, 아직 중복이 많다.

var minOperations = function (n) {
  let result = 0;
  for (let i = n; i > 0; i--) {
    n % 2 === 1 ? (result += n - i) : (result += n - i + 1);
    --i;
  }
  return result;
};

// 세번째 시도, for 문 중복 제거, if 분기를 내부에서 3항연산으로 변경, --i 가 신경 쓰인다.

var minOperations = function (n) {
  let result = 0;
  for (let i = n; i > 0; i -= 2) {
    n % 2 === 1 ? (result += n - i) : (result += n - i + 1);
  }
  return result;
};

// 마지막 제출, i를 2씩 줄이면 되는데 굳이 나눠서 했음.. 수학적으로 푸는 것보다 효율적이진 않지만 제법 깔끔한 답안을 도출했다.
