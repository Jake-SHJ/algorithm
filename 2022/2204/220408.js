// Merge Nodes in Between Zeros

// You are given the head of a linked list, which contains a series of integers separated by 0's.
// The beginning and end of the linked list will have Node.val == 0.
// For every two consecutive 0's, merge all the nodes lying in between them into a single node whose value is the sum of all the merged nodes.
// The modified list should not contain any 0's.
// Return the head of the modified linked list.

// Example:
// Input: head = [0,3,1,0,4,5,2,0]
// Output: [4,11]
// Explanation:
// The above figure represents the given linked list. The modified list contains
// - The sum of the nodes marked in green: 3 + 1 = 4.
// - The sum of the nodes marked in red: 4 + 5 + 2 = 11.

// 주어진 Linked List에서 0과 0사이의 값을 더한 Linked list를 반환하는 문제

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
var mergeNodes = function (head) {
  // 첫번째 val은 버리는 것
  let result = new ListNode(0);
  // 얕은 복사
  let temp = result;

  while (head) {
    // 0 시작 지점에서
    if (head.val === 0 && head.next) {
      // temp가 next 생성 > result의 next값
      temp.next = new ListNode(0);
      // temp가 next로 이동
      temp = temp.next;
    }
    // 0과 0사이에서 temp val에 head.val 더하기
    temp.val += head.val;
    // head 다음 값으로 이동
    head = head.next;
  }
  // 첫번째 val을 제외한 나머지 반환
  return result.next;
};
// discuss 참조
