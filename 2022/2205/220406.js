// Minimum Adjacent Swaps to Reach the Kth Smallest Number

// You are given a string num, representing a large integer, and an integer k.
// We call some integer wonderful if it is a permutation of the digits in num and is greater in value than num.
// There can be many wonderful integers. However, we only care about the smallest-valued ones.
// For example, when num = "5489355142":
// The 1st smallest wonderful integer is "5489355214".
// The 2nd smallest wonderful integer is "5489355241".
// The 3rd smallest wonderful integer is "5489355412".
// The 4th smallest wonderful integer is "5489355421".
// Return the minimum number of adjacent digit swaps that needs to be applied to num to reach the kth smallest wonderful integer.
// The tests are generated in such a way that kth smallest wonderful integer exists.

// Example:
// Input: num = "5489355142", k = 4
// Output: 2
// Explanation: The 4th smallest wonderful number is "5489355421". To get this number:
// - Swap index 7 with index 8: "5489355142" -> "5489355412"
// - Swap index 8 with index 9: "5489355412" -> "5489355421"

// 주어진 문자열 num의 인접한 숫자들을 서로 바꿨을 때, num보다는 큰 가장 작은 수 중에 k번째 수가 나오는 숫자 변경 횟수를 반환하는 문제

/**
 * @param {string} num
 * @param {number} k
 * @return {number}
 */
var getMinSwaps = function (num, k) {
  const digits = [...num];
  const len = digits.length;

  const swap = (i, j) => ([digits[i], digits[j]] = [digits[j], digits[i]]);
  const reverse = (i) => {
    for (let j = len - 1; i < j; ++i && --j) {
      swap(i, j);
    }
  };

  const nextPermutation = () => {
    let i = len - 2;
    while (digits[i] >= digits[i + 1]) {
      i--;
    }

    let j = len - 1;
    while (digits[j] <= digits[i]) {
      j--;
    }

    swap(i, j);
    reverse(i + 1);
  };

  for (let i = 0; i < k; i++) {
    nextPermutation();
  }

  let numSwaps = 0;
  for (let i = 0; i < len; i++) {
    let j = i;
    while (num[i] !== digits[j]) {
      j++;
    }
    while (i < j) {
      swap(j, j - 1);
      numSwaps++;
      j--;
    }
  }
  return numSwaps;
};
// discuss 참조
