// Swapping Nodes in a Linked List

// You are given the head of a linked list, and an integer k.
// Return the head of the linked list after swapping the values of the kth node from the beginning and the kth node from the end (the list is 1-indexed).

// Example:
// Input: head = [1,2,3,4,5], k = 2
// Output: [1,4,3,2,5]

// Node 리스트의 k번째와 뒤에서 k번째 요소를 바꾸는 문제

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function (head, k) {
  let arr = [],
    node = head;

  while (node) {
    arr.push(node);
    node = node.next;
  }

  [arr[k - 1].val, arr[arr.length - k].val] = [
    arr[arr.length - k].val,
    arr[k - 1].val,
  ];

  return head;
};

// 고민하다가 discuss를 참조했는데 생각보다 쉽게 풀어놔서 허탈한 문제
// 일단 NodeList의 index를 어떻게 구할 것인가, 구한 index로 어떻게 값을 바꿀 것인가가 중요한 문제였는데
// 참조를 이용해서 값을 바꾸는 방식으로 풀어냈다.
