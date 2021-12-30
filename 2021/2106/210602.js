// Palindrome Linked List

// Given the head of a singly linked list, return true if it is a palindrome.

// Example:
// Input: head = [1,2,2,1]
// Output: true

// 주어진 Linked List의 회문 여부를 반환하는 문제

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let current = head;
  let origin = "";
  let reverse = "";

  while (current) {
    origin += current.val;
    reverse = current.val + reverse;
    current = current.next;
  }

  return origin === reverse;
};

// discuss 참고, 가장 간단하게 해결하는 방법이라고 생각함
// Linked List를 정방향의 문자열과 역방향의 문자열로 저장하여 두 문자열이 같은지 확인함으로써 회문 여부를 도출할 수 있음
