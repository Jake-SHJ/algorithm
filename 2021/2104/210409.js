// Counting Bits

// Given an integer num, return an array of the number of 1's in the binary representation of every number in the range [0, num].

// Example:
// Input: num = 2
// Output: [0,1,1]
// Explanation:
// 0 --> 0
// 1 --> 1
// 2 --> 10

// 0부터 주어진 수까지의 2진수의 1의 갯수를 배열로 반환하는 문제

/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function (num) {
  const result = [];
  for (let i = 0; i < num + 1; i++) {
    let count = 0;
    const binary = i.toString(2);
    for (let j = 0; j < binary.length; j++) {
      if (binary[j] === "1") count += 1;
    }
    result.push(count);
  }
  return result;
};

// discuss를 둘러보니 다들 비트 연산으로 하는 것 같은데 일단 비트 연산에 대한 개념이 부족하므로
// 읽기 쉬운 코드로 작성하려고 노력했다
// 2진수는 Number.toString(2)를 사용하면 구할 수 있고, 나온 2진수의 문자열을 순회하여 1이면 count에 더하고 result로 push 한다.
// 비트 연산을 하지 않아도 그렇게 어려운 문제는 아닌데 acceptance가 70%인건 의문..
