// Permutations

// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

// Example:
// Input: nums = [1,2,3]
// Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]

// 주어진 배열의 순열을 구하는 문제

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const findPermutation = (res, nums, permutation = []) => {
    if (permutation.length === nums.length) {
      res.push([...permutation]);
    } else {
      for (let i = 0; i < nums.length; i++) {
        if (permutation.includes(nums[i])) continue;
        permutation.push(nums[i]);
        findPermutation(res, nums, permutation);
        permutation.pop();
      }
    }
  };

  const result = [];
  findPermutation(result, nums);
  return result;
};

// 결과적으로는 discuss를 참고했다.
// 재귀를 돌려서 찾는 것까지는 접근했으나, 해당 로직의 permutation을 pop으로 비우지 않아서 정상적인 답을 도출할 수 없었다.

findPermutation(res, nums, permutation);
console.log(permutation);
permutation.pop();
console.log("after", permutation);
// 콘솔을 찍으면 다음과 같은 결과를 볼 수 있다.

// [ 1, 2, 3 ]
// after [ 1, 2 ]
// [ 1, 2 ]
// after [ 1 ]
// [ 1, 3, 2 ]
// after [ 1, 3 ]
// [ 1, 3 ]
// after [ 1 ]
// [ 1 ]
// after []

// 재귀에 의해 스택 호출이 역순으로 적용되어 결과적으로 permutation이 pop에 의해 초기화 되는 것을 알 수 있다.
