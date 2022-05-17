// Pancake Sorting

// Given an array of integers arr, sort the array by performing a series of pancake flips.
// In one pancake flip we do the following steps:
// Choose an integer k where 1 <= k <= arr.length.
// Reverse the sub-array arr[0...k-1] (0-indexed).
// For example, if arr = [3,2,1,4] and we performed a pancake flip choosing k = 3, 
// we reverse the sub-array [3,2,1], so arr = [1,2,3,4] after the pancake flip at k = 3.
// Return an array of the k-values corresponding to a sequence of pancake flips that sort arr. 
// Any valid answer that sorts the array within 10 * arr.length flips will be judged as correct.

// Example:
// Input: arr = [3,2,4,1]
// Output: [4,2,4,3]
// Explanation: 
// We perform 4 pancake flips, with k values 4, 2, 4, and 3.
// Starting state: arr = [3, 2, 4, 1]
// After 1st flip (k = 4): arr = [1, 4, 2, 3]
// After 2nd flip (k = 2): arr = [4, 1, 2, 3]
// After 3rd flip (k = 4): arr = [3, 2, 1, 4]
// After 4th flip (k = 3): arr = [1, 2, 3, 4], which is sorted.

// 주어진 배열을 규칙에 따라 정렬을 할 때, 규칙에 맞는 배열을 반환하는 문제

/**
 * @param {number[]} arr
 * @return {number[]}
 */

var pancakeSort = function(arr) {
  let result = [];
  for(let i = arr.length - 1; i >= 1; i--){
    if(arr[i] !== i + 1){
      let currPancakeIndex = -1;
      for(let j = i - 1; j >= 0; j--){
        if(arr[j] == i + 1){
          currPancakeIndex = j;
          break;
        }
      }
      pancakeFlip(0, currPancakeIndex);
      pancakeFlip(0, i);
      result.push(currPancakeIndex + 1);
      result.push(i + 1);
    }
  }

  function pancakeFlip(start, end){
    let startI = start;
    let endI = end;
    while(startI < endI){
      let temp = arr[startI];
      arr[startI] = arr[endI];
      arr[endI] = temp;
      startI++;
      endI--;
    }
  }
  return result;
};
// discuss 참조, 이건 통과가 되는 답
// 문제에서 분명 arr 길이의 10배가 되는 flip 안에 모든 답은 올바른 것으로 판단한다고 했지만,
// 3개 중 2개의 답안은 답이 나옴에도 불구하고 통과가 안됨.. 문제가 잘못됐다고 생각할 수 밖에..
// 일일이 찾아서 정렬해야되서 문제가 복잡하기도하고, 코드가 지저분해짐. 그냥 이런게 있다 정도만 아는걸로 패스.
