// Middle of the Linked List

// Given the head of a singly linked list, return the middle node of the linked list.
// If there are two middle nodes, return the second middle node.

// Example:
// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.

// 주어진 linked list를 중간부터 반환하는 문제

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let A = [head];
  while (A[A.length - 1].next !== null) {
    A.push(A[A.length - 1].next);
  }
  // 반복문 이후, A = [ [1,2,3,4,5], [2,3,4,5], [3,4,5], [4,5], [5] ]
  return A[Math.trunc(A.length / 2)];
};
// solution을 참고했음
// linked list에 대한 이해 부족으로 풀기 어려웠음
