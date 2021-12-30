// Delete Node in a Linked List

// Write a function to delete a node in a singly-linked list.
// You will not be given access to the head of the list, instead you will be given access to the node to be deleted directly.
// It is guaranteed that the node to be deleted is not a tail node in the list.

// Example:
// Input: head = [4,5,1,9], node = 5
// Output: [4,1,9]
// Explanation: You are given the second node with value 5, the linked list should become 4 -> 1 -> 9 after calling your function.

// 주어진 linked list 에서 해당하는 node를 삭제하는 문제

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};
// linked list의 특성을 잘 이해하지 못하여 못풀었음, 해당 풀이는 discuss 참고
