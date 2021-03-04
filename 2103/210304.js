// Group the People Given the Group Size They Belong To

// There are n people that are split into some unknown number of groups.
// Each person is labeled with a unique ID from 0 to n - 1.

// You are given an integer array groupSizes, where groupSizes[i] is the size of the group that person i is in.
// For example, if groupSizes[1] = 3, then person 1 must be in a group of size 3.

// Return a list of groups such that each person i is in a group of size groupSizes[i].

// Each person should appear in exactly one group, and every person must be in a group.
// If there are multiple answers, return any of them. It is guaranteed that there will be at least one valid solution for the given input.

// Example:
// Input: groupSizes = [3,3,3,3,3,1,3]
// Output: [[5],[0,1,2],[3,4,6]]
// Explanation:
// The first group is [5]. The size is 1, and groupSizes[5] = 1.
// The second group is [0,1,2]. The size is 3, and groupSizes[0] = groupSizes[1] = groupSizes[2] = 3.
// The third group is [3,4,6]. The size is 3, and groupSizes[3] = groupSizes[4] = groupSizes[6] = 3.
// Other possible solutions are [[2,1,6],[5],[0,4,3]] and [[5],[0,6,2],[4,3,1]].

/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
  let result = [];

  groupSizes.forEach((size, idx) => {
    result[size] ? result[size].push(idx) : (result[size] = [idx]);
  });

  return result.filter((data) => data !== undefined);
};

// [[5], [0, 1, 2, 3, 4, 6]]
// 최초 접근, size 별로 분리는 했지만.. size에 맞춰서 분리하지 못함

/**
 * @param {number[]} groupSizes
 * @return {number[][]}
 */
var groupThePeople = function (groupSizes) {
  let result = [],
    temp = [];

  groupSizes.forEach((size, idx) => {
    if (size === 1) {
      result.push([idx]);
    } else {
      if (!temp[size]) {
        result.push([idx]);
        temp[size] = result[result.length - 1]; // 여기서 같은 값을 참조하게 된다.
      } else {
        temp[size].push(idx); // temp[size]에 값을 넣는데, result도 같이 값이 들어감.
      }

      if (temp[size] && temp[size].length === size) {
        temp[size] = null;
      }
    }
  });

  return result;
};

// [[0,1,2],[3,4,6],[5]]
// discuss 참고... 결국 못 풀었음
// 임시 배열을 따로 빼고, 임시 배열과 result 내부 배열에 같은 참조를 거는 방식, 새로운 방법을 배웠다.
