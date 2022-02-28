// Linked List Cycle

// Given head, the head of a linked list, determine if the linked list has a cycle in it.
// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer.
// Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
// Return true if there is a cycle in the linked list. Otherwise, return false.

// Example:
// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

// 주어진 singly-linked list가 순회 가능한지 여부를 반환하는 문제

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let p1 = head,
    p2 = head;

  while (p2 && p2.next && p2.next.next) {
    p1 = p1.next;
    p2 = p2.next.next;

    if (p1 === p2) {
      return true;
    }
  }

  return false;
};
// 일단 singly-linked list가 뭔지도 모르겠고, 왜 콘솔에 정보가 안나오는지도 모르겠음
// discuss 참조, 방법은 단순
// 더 빠른 head와 보통의 속도의 head가 한 점에서 만나면 순회하는 상태로 확인(계속 순회해야만 한 점에서 서로 만나기 때문)
