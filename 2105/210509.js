// Queue Reconstruction by Height

// You are given an array of people, people, which are the attributes of some people in a queue (not necessarily in order).
// Each people[i] = [hi, ki] represents the ith person of height hi with exactly ki other people in front who have a height greater than or equal to hi.
// Reconstruct and return the queue that is represented by the input array people.
// The returned queue should be formatted as an array queue, where queue[j] = [hj, kj] is the attributes of the jth person in the queue (queue[0] is the person at the front of the queue).

// Example:
// Input: people = [[7,0],[4,4],[7,1],[5,0],[6,1],[5,2]]
// Output: [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]]
// Explanation:
// Person 0 has height 5 with no other people taller or the same height in front.
// Person 1 has height 7 with no other people taller or the same height in front.
// Person 2 has height 5 with two persons taller or the same height in front, which is person 0 and 1.
// Person 3 has height 6 with one person taller or the same height in front, which is person 1.
// Person 4 has height 4 with four people taller or the same height in front, which are people 0, 1, 2, and 3.
// Person 5 has height 7 with one person taller or the same height in front, which is person 1.
// Hence [[5,0],[7,0],[5,2],[6,1],[4,4],[7,1]] is the reconstructed queue.

// 배열 요소의 첫번째는 높이, 두번째는 자신의 높이와 같거나 큰 높이를 가진 요소가 자신의 앞에 있는 수를 나타낼 때, 올바른 순서로 배열을 반환하는 문제

/**
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function (people) {
  people.sort((a, b) => {
    if (a[0] != b[0]) {
      return b[0] - a[0];
    } else {
      return a[1] - b[1];
    }
  });
  // 첫번째 요소의 내림차순, 두번째 요소의 오름차순으로 먼저 정렬

  const res = [];

  for (i = 0; i < people.length; i++) {
    res.splice(people[i][1], 0, people[i]); // 두번째 요소를 기준으로 result에 인덱싱
  }

  return res;
};

// 먼저 정렬하고 시작하는 것까진 풀었으나, 높이와 순서를 둘 다 고려하느라 복잡하게 생각하여 못풀었음
// 첫번째 요소를 기준으로 내림차순으로 하여, 높이에 대한 고려를 제거하고(그다음 오는 요소는 무조건 먼저 들어간 요소보다 작기 때문..) 두번째 요소만으로 인덱싱을 하여 처리
// 문제를 먼저 단순화시키는 것이 중요...
