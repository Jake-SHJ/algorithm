// Minimum Number of Operations to Reinitialize a Permutation

// You are given an even integer n​​​​​​. You initially have a permutation perm of size n​​ where perm[i] == i​ (0-indexed)​​​​.
// In one operation, you will create a new array arr, and for each i:
//  - If i % 2 == 0, then arr[i] = perm[i / 2].
//  - If i % 2 == 1, then arr[i] = perm[n / 2 + (i - 1) / 2].
// You will then assign arr​​​​ to perm.
// Return the minimum non-zero number of operations you need to perform on perm to return the permutation to its initial value.

// Example:
// Input: n = 4
// Output: 2
// Explanation: perm = [0,1,2,3] initially.
// After the 1st operation, perm = [0,2,1,3]
// After the 2nd operation, perm = [0,1,2,3]
// So it takes only 2 operations.

// 주어진 숫자만큼의 길이를 가진 배열을 조건에 따라 연산하여 다시 원래의 배열 형태로 돌아오기까지의 횟수를 구하는 문제

/**
 * @param {number} n
 * @return {number}
 */
var reinitializePermutation = function (n) {
  const perm = [];
  for (let i = 0; i < n; i++) {
    perm.push(i);
  }

  const operator = (arr, n, res) => {
    const operatedArr = [];
    let result = res + 1;
    for (let i = 0; i < arr.length; i++) {
      i % 2 === 0
        ? (operatedArr[i] = arr[i / 2])
        : (operatedArr[i] = arr[n / 2 + (i - 1) / 2]);
    }
    if (JSON.stringify(perm) === JSON.stringify(operatedArr)) {
      return result;
    } else {
      return operator(operatedArr, n, result);
    }
  };

  return operator(perm, n, 0);
};

// 우선 순회하여 perm을 생성
// operator 안에서 연산 수행하여 perm과 비교 후 같으면 result 반환, 다르면 operator 재귀
// 속도, 메모리 둘 다 딱히 좋게 나오진 않았음, discuss 보니 또 누가 비트 연산자로 풀어놨더라..
// 연산에는 좋을 진 몰라도, 누가 수정할 때 분명 문제가 생길듯..
