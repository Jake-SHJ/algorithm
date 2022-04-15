// Maximum Twin Sum of a Linked List

// In a linked list of size n, where n is even, the ith node (0-indexed) of the linked list is known as the twin of the (n-1-i)th node,
// if 0 <= i <= (n / 2) - 1.
// For example, if n = 4, then node 0 is the twin of node 3, and node 1 is the twin of node 2.
// These are the only nodes with twins for n = 4.
// The twin sum is defined as the sum of a node and its twin.
// Given the head of a linked list with even length, return the maximum twin sum of the linked list.

// Example:
// Input: head = [5,4,2,1]
// Output: 6
// Explanation:
// Nodes 0 and 1 are the twins of nodes 3 and 2, respectively. All have twin sum = 6.
// There are no other nodes with twins in the linked list.
// Thus, the maximum twin sum of the linked list is 6.

// 주어진 linked list에서 각 쌍의 합 중 가장 큰 수를 반환하는 문제 (쌍은 인덱스 i와 n-1-i의 관계를 말함)

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function (head) {
  const arr = [];
  let max = 0;

  while (head) {
    arr.push(head.val);
    head = head.next;
  }

  for (let i = 0; i < arr.length / 2; i++) {
    const sum = arr[i] + arr[arr.length - 1 - i];
    max = Math.max(max, sum);
  }

  return max;
};
// discuss 참조, linked list를 배열로 변환하여 쉽게 풀어냄
