// Distribute Candies to People

// We distribute some number of candies, to a row of n = num_people people in the following way:
// We then give 1 candy to the first person, 2 candies to the second person,
// and so on until we give n candies to the last person.
// Then, we go back to the start of the row, giving n + 1 candies to the first person,
// n + 2 candies to the second person, and so on until we give 2 * n candies to the last person.
// This process repeats (with us giving one more candy each time, and moving to the start of the row after we reach the end) until we run out of candies.
// The last person will receive all of our remaining candies (not necessarily one more than the previous gift).
// Return an array (of length num_people and sum candies) that represents the final distribution of candies.

// Example:
// Input: candies = 7, num_people = 4
// Output: [1,2,3,1]
// Explanation:
// On the first turn, ans[0] += 1, and the array is [1,0,0,0].
// On the second turn, ans[1] += 2, and the array is [1,2,0,0].
// On the third turn, ans[2] += 3, and the array is [1,2,3,0].
// On the fourth turn, ans[3] += 1 (because there is only one candy left), and the final array is [1,2,3,1].

// 주어진 사탕을 규칙대로 나눠주었을 때 각 사탕의 갯수를 나타내는 배열을 반환하는 문제

/**
 * @param {number} candies
 * @param {number} num_people
 * @return {number[]}
 */
var distributeCandies = function (candies, num_people) {
  let i = 0;
  let candy = 1;
  let result = new Array(num_people).fill(0);

  while (candy < candies) {
    if (i === num_people) i = 0;
    result[i] = result[i] + candy;
    candies -= candy;
    candy++;
    i++;
  }

  if (candies > 0) {
    if (i === num_people) i = 0;
    result[i] += candies;
  }

  return result;
};
// discuss 참고
