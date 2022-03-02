// Partition Array Into Three Parts With Equal Sum

// Given an array of integers arr, return true if we can partition the array into three non-empty parts with equal sums.
// Formally, we can partition the array if we can find indexes i + 1 < j
// with (arr[0] + arr[1] + ... + arr[i] == arr[i + 1] + arr[i + 2] + ... + arr[j - 1] == arr[j] + arr[j + 1] + ... + arr[arr.length - 1])

// Example:
// Input: arr = [0,2,1,-6,6,-7,9,1,2,0,1]
// Output: true
// Explanation: 0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1

// 주어진 배열을 각 합이 모두 같게 3부분으로 분할할 수 있는지 여부를 반환하는 문제

/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function (arr) {
  const sum = arr.reduce((acc, cur) => acc + cur, 0);
  // 3으로 나눠 떨어지지 않으면 조기 반환
  if (sum % 3) return false;

  const target = sum / 3;
  let p1 = 1,
    p2 = arr.length - 2,
    sum1 = arr[0],
    sum3 = arr[arr.length - 1],
    sum2 = sum - sum1 - sum3;

  while (p1 < p2 && (sum1 !== target || sum2 !== target)) {
    // sum1 + , sum2 -
    if (sum1 !== target) {
      sum1 += arr[p1];
      sum2 -= arr[p1];
      p1++;
    }
    // sum3 +, sum2 -
    if (sum3 !== target) {
      sum3 += arr[p2];
      sum2 -= arr[p2];
      p2--;
    }
    // 내부에서 p1이 더해지고 p2가 빼지면서 범위가 어긋나는 경우 방지
    if (p1 > p2) return false;
  }

  return sum1 === sum2 && sum2 === sum3;
};

// discuss 참조했으나 통과 못하는 경우가 있어서 일부 수정
