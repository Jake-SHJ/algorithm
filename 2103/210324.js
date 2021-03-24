// Merge In Between Linked Lists

// You are given two linked lists: list1 and list2 of sizes n and m respectively.
// Remove list1's nodes from the ath node to the bth node, and put list2 in their place.

// Example:
// Input: list1 = [0,1,2,3,4,5], a = 3, b = 4, list2 = [1000000,1000001,1000002]
// Output: [0,1,2,1000000,1000001,1000002,5]
// Explanation: We remove the nodes 3 and 4 and put the entire list2 in their place. The blue edges and nodes in the above figure indicate the result.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function (list1, a, b, list2) {
  let left = list1; // list1을 참조 복사한 left, right
  let right = list1;

  for (let i = 0; i <= b; i++) {
    if (i < a - 1) left = left.next;
    if (i <= b) right = right.next;
  }
  // left = [2,3,4,5] middle start point
  // right = [5] middle 이후

  let middle = list2; // list2를 참조 복사한 middle

  while (middle.next !== null) {
    middle = middle.next;
  }
  // middle = [1000002] list2의 end point

  left.next = list2;
  // 2 이후의 숫자를 list2로 교체
  // left = [2,1000000,1000001,1000002]
  // 참조 복사된 원본인 list1도 교체
  // list1 = [0,1,2,1000000,1000001,1000002]

  middle.next = right;
  // middle end point 이후에 right를 추가
  // middle = [1000002,5]
  // 참조 복사된 원본인 list2 도 교체되면서, left.next에 있는 list2도 교체
  // list1 = [0,1,2,1000000,1000001,1000002,5]

  return list1;
};

// 처음엔 순회로 어떻게든 풀려고 3번 정도 지우고 다시 해봤으나..
// [0,1,2,1000000,1000001,1000002]로 바꾸는건 됐는데 뒤에 5를 어떻게 붙여야 될지 감이 오지 않았다.
// (사실 이것도 개수가 맞아서 된거라 제대로 됐다고 보기도 힘들다.)
// 위 답안은 discuss의 내용을 참조했으며, 효율이 좋은 답은 아니지만 내가 이해할 수 있는 선의 답을 가져왔다.
