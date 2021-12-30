// Time Needed to Buy Tickets

// There are n people in a line queuing to buy tickets,
// where the 0th person is at the front of the line and the (n - 1)th person is at the back of the line.
// You are given a 0-indexed integer array tickets of length n where the number of tickets that the ith person would like to buy is tickets[i].
// Each person takes exactly 1 second to buy a ticket.
// A person can only buy 1 ticket at a time and has to go back to the end of the line (which happens instantaneously) in order to buy more tickets.
// If a person does not have any tickets left to buy, the person will leave the line.
// Return the time taken for the person at position k (0-indexed) to finish buying tickets.

// Example:
// Input: tickets = [2,3,2], k = 2
// Output: 6
// Explanation:
// - In the first pass, everyone in the line buys a ticket and the line becomes [1, 2, 1].
// - In the second pass, everyone in the line buys a ticket and the line becomes [0, 1, 0].
// The person at position 2 has successfully bought 2 tickets and it took 3 + 3 = 6 seconds.

// 주어진 배열에서 k번째 사람이 원하는 양의 티켓을 전부 사는데 걸리는 시간을 반환하는 문제

/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
  let result = 0;
  // 타겟이 0보다 큰 동안 반복
  while (tickets[k] > 0) {
    // 배열 전체 순회
    for (let j = 0; j < tickets.length; j++) {
      // 구매하고자 하는 티켓이 0이 아니면 1 차감, 결과는 1 추가
      if (tickets[j] - 1 >= 0) {
        tickets[j] = tickets[j] - 1;
        result += 1;
      }
      // 타겟이 0이 되는 순간 순회 탈출
      if (tickets[k] === 0) break;
      continue;
    }
  }
  return result;
};
