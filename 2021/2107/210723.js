// Convert Binary Number in a Linked List to Integer

// Given head which is a reference node to a singly-linked list. The value of each node in the linked list is either 0 or 1.
// The linked list holds the binary representation of a number.
// Return the decimal value of the number in the linked list.

// Example:
// Input: head = [1,0,1]
// Output: 5
// Explanation: (101) in base 2 = (5) in base 10

// 주어진 LinkedList의 요소를 2진수에서 10진수로 변환하여 반환하는 문제

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
var getDecimalValue = function (head) {
  const nodes = [];
  let result = 0;

  const recursionList = (node) => {
    nodes.splice(0, 0, node.val);
    node.next ? recursionList(node.next) : null;
  };

  recursionList(head);

  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i] === 0) continue;
    result += 2 ** i;
  }

  return result;
};

// 우선 재귀로 순환할때, nodes에 push가 아닌 앞에서부터 채워넣어서 reverse를 한번더 돌리는 로직을 줄임
// 이후 나온 배열을 순환하여 2진수를 10진수로 변환시키고 결과를 반환
// 두번째 순환은 reduce로 바꿔봤으나 for가 더 빠른 결과를 나타냄, 아마 continue 때문이지 않을까.
