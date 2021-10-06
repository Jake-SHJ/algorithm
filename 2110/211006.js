// Reverse Linked List

// Given the head of a singly linked list, reverse the list, and return the reversed list.

// Example:
// Input: head = [1,2,3,4,5]
// Output: [5,4,3,2,1]

// 주어진 노드 리스트를 뒤집어서 반환하는 문제

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
var reverseList = function (head) {
  let [prev, cur] = [null, head];
  while (cur) {
    [cur.next, prev, cur] = [prev, cur, cur.next];
  }
  return prev;
};
// 아직도 노드 리스트가 뭔지 모르겠음...
// 따로 공부 요망..
