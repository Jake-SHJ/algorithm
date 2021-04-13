// XOR Queries of a Subarray

// Given the array arr of positive integers and the array queries where queries[i] = [Li, Ri],
// for each query i compute the XOR of elements from Li to Ri (that is, arr[Li] xor arr[Li+1] xor ... xor arr[Ri] ).
// Return an array containing the result for the given queries.

// Example:
// Input: arr = [1,3,4,8], queries = [[0,1],[1,2],[0,3],[3,3]]
// Output: [2,7,14,8]
// Explanation:
// The binary representation of the elements in the array are:
// 1 = 0001
// 3 = 0011
// 4 = 0100
// 8 = 1000
// The XOR values for queries are:
// [0,1] = 1 xor 3 = 2
// [1,2] = 3 xor 4 = 7
// [0,3] = 1 xor 3 xor 4 xor 8 = 14
// [3,3] = 8

// queries 배열의 index 범위의 arr 배열의 10진수들을 2진수 XOR 연산에 의한 결과값을 반환하는 문제

const findLargeNumberLength = (arr) => {
  const largeNum = arr.slice().sort((a, b) => b - a)[0];
  return largeNum.toString(2).length;
};

const binaryToDecimal = (num) => {
  return parseInt(num, 2);
};

const operateXOR = (arr, start, end) => {
  if (start === end) return arr[start];
  let result = arr[start];

  for (let i = start + 1; i < end + 1; i++) {
    let temp = "";
    for (let j = 0; j < result.length; j++) {
      result[j] === arr[i][j] ? (temp += "0") : (temp += "1");
    }
    result = temp;
  }
  return result;
};

/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
var xorQueries = function (arr, queries) {
  const largeNumberLength = findLargeNumberLength(arr);
  const binaryArr = arr.map((num) =>
    num.toString(2).padStart(largeNumberLength, "0")
  );
  let result = [];
  for (let i = 0; i < queries.length; i++) {
    const operatedNum = operateXOR(binaryArr, queries[i][0], queries[i][1]);
    result.push(binaryToDecimal(operatedNum));
  }
  return result;
};
// 풀긴했는데 역시나 시간 초과... 순회가 많아서 그런듯..

var xorQueries = function (arr, queries) {
  let xors = [arr[0]],
    ans = [];
  for (let i = 1; i < arr.length; i++) {
    xors[i] = arr[i] ^ xors[i - 1];
  }
  for (let query of queries) {
    let [start, end] = query;
    ans.push(xors[end] ^ xors[start] ^ arr[start]);
  }
  return ans;
};
// 다음은 discuss에 답안
// 비트 연산자를 통해서 계산하는데.. 비트 연산 공부를 좀 해야할듯.. ^ 가 XOR 연산이라고 한다.
