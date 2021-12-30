// Remove Duplicates from Sorted List

// Given the head of a sorted linked list, delete all duplicates such that each element appears only once.
// Return the linked list sorted as well.

// Example:
// Input: head = [1,1,2]
// Output: [1,2]

// 주어진 정렬된 LinkedList에서 중복을 제거한 LinkedList를 반환하는 문제

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
var deleteDuplicates = function (head) {
  let current = head;

  while (current) {
    if (current.next !== null && current.val === current.next.val) {
      current.next = current.next.next;
    } else {
      current = current.next;
    }
  }

  return head;
};

// 6월 2일자 문제와 풀이가 매우 유사함.
