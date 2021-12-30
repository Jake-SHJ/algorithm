// Arithmetic Subarrays

// A sequence of numbers is called arithmetic if it consists of at least two elements, and the difference between every two consecutive elements is the same.
// More formally, a sequence s is arithmetic if and only if s[i+1] - s[i] == s[1] - s[0] for all valid i.
// For example, these are arithmetic sequences:
// 1, 3, 5, 7, 9
// 7, 7, 7, 7
// 3, -1, -5, -9
// The following sequence is not arithmetic:
// 1, 1, 2, 5, 7
// You are given an array of n integers, nums, and two arrays of m integers each, l and r, representing the m range queries, where the ith query is the range [l[i], r[i]].
// All the arrays are 0-indexed.
// Return a list of boolean elements answer, where answer[i] is true if the subarray nums[l[i]], nums[l[i]+1], ... , nums[r[i]] can be rearranged to form an arithmetic sequence,
// and false otherwise.

// Example:
// Input: nums = [4,6,5,9,3,7], l = [0,0,2], r = [2,3,5]
// Output: [true,false,true]
// Explanation:
// In the 0th query, the subarray is [4,6,5]. This can be rearranged as [6,5,4], which is an arithmetic sequence.
// In the 1st query, the subarray is [4,6,5,9]. This cannot be rearranged as an arithmetic sequence.
// In the 2nd query, the subarray is [5,9,3,7]. This can be rearranged as [3,5,7,9], which is an arithmetic sequence.

/**
 * @param {number[]} nums
 * @param {number[]} l
 * @param {number[]} r
 * @return {boolean[]}
 */
var checkArithmeticSubarrays = function (nums, l, r) {
  const result = [];
  for (let i = 0; i < l.length; i++) {
    const subArray = [];
    for (let j = l[i]; j < r[i] + 1; j++) {
      subArray.push(nums[j]);
    }
    const set = new Set(
      subArray
        .sort((a, b) => b - a)
        .map((num, idx, arr) => {
          return num - arr[idx + 1];
        })
        .filter((num) => !Number.isNaN(num))
    );
    [...set].length === 1 ? result.push(true) : result.push(false);
  }
  return result;
};

// nums에서 range l[i] ~ r[i]의 범위의 subArray를 구하고 이 array가 등차수열을 만족하는가에 대한 문제
// 범위에 맞 subArray를 생성하고, 내림차순 정렬 => 각 배열 요소간 차 반환 => NaN 필터링을 거쳐 set으로 중복 제거
// 중복 제거된 배열의 길이가 1이면 등차수열이 맞고 그 이상이면 등차수열이 아님
// 속도나 메모리 효율은 좋지 않지만, 무난하게 풀었다고 생각..

const checkArithmeticSubarrays = (nums, l, r) => {
  const chechArithmetic = (ar) => {
    const diff = ar[1] - ar[0];
    for (let i = 2; i < ar.length; i++)
      if (ar[i] - ar[i - 1] != diff) return false;
    return true;
  };

  return l.map((_, i) =>
    chechArithmetic(nums.slice(l[i], r[i] + 1).sort((a, b) => a - b))
  );
};
// 메모리 효율이 좋은 예
