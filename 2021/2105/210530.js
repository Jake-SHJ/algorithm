// Remove Linked List Elements

// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

// Example:
// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]

// 주어진 Linked List에서 val값을 지운 Linked List를 반환하는 문제

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  let current = head;
  let prev = null;

  while (current) {
    if (current.val === val) {
      // 타겟인 경우
      if (prev) {
        // prev가 있으면 prev.next는 current.next, prev를 조작
        prev.next = current.next;
      } else {
        // prev가 없으면 head는 current.next, 직접 head를 조작
        head = current.next;
      }
    } else {
      // 타겟이 아닌 경우 prev는 current, prev를 조작
      prev = current;
    }
    // 다음으로
    current = current.next;
  }
  return head;
};

// discuss를 참조한건데.. 흐름을 잘 모르겠음.. prev나 current가 참조 복사 상태인건 알겠는데..
