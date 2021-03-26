// Reveal Cards In Increasing Order

// In a deck of cards, every card has a unique integer.  You can order the deck in any order you want.
// Initially, all the cards start face down (unrevealed) in one deck.
// Now, you do the following steps repeatedly, until all cards are revealed:

// 1. Take the top card of the deck, reveal it, and take it out of the deck.
// 2. If there are still cards in the deck, put the next top card of the deck at the bottom of the deck.
// 3. If there are still unrevealed cards, go back to step 1.  Otherwise, stop.

// Return an ordering of the deck that would reveal the cards in increasing order.
// The first entry in the answer is considered to be the top of the deck.

// Example:
// Input: [17,13,11,2,3,5,7]
// Output: [2,13,3,11,5,17,7]
// Explanation:
// We get the deck in the order [17,13,11,2,3,5,7] (this order doesn't matter), and reorder it.
// After reordering, the deck starts as [2,13,3,11,5,17,7], where 2 is the top of the deck.
// We reveal 2, and move 13 to the bottom.  The deck is now [3,11,5,17,7,13].
// We reveal 3, and move 11 to the bottom.  The deck is now [5,17,7,13,11].
// We reveal 5, and move 17 to the bottom.  The deck is now [7,13,11,17].
// We reveal 7, and move 13 to the bottom.  The deck is now [11,17,13].
// We reveal 11, and move 17 to the bottom.  The deck is now [13,17].
// We reveal 13, and move 17 to the bottom.  The deck is now [17].
// We reveal 17.
// Since all the cards revealed are in increasing order, the answer is correct.

/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
  const sortedDeck = deck.sort((a, b) => a - b);
  const result = Array(deck.length);

  const half = Math.ceil(sortedDeck.length / 2);
  const deck1 = sortedDeck.slice(0, half);
  const deck2 = sortedDeck.slice(half);

  if (deck.length % 2 === 0) {
    for (let i = 0; i < half; i++) {
      result[i * 2] = deck1[i];
      result[i * 2 + 1] = deck2[i];
    }
  }
};
// 배열을 주고 규칙에 따라 카드를 뽑았을 때, 오름차순으로 나오게 배열 순서를 정하는 문제
// 짝수개의 배열은 쉽게 풀었으나.. 홀수개의 배열이 어려웠음

// Draw process:
//     1. newDeck = deck.pop()
//     2. deck.push(deck.shift())
//     3. Start from step 1
// Reverse draw process:
//     1. ans.unshift(newDeck.pop())
//     2. ans.unshift(ans.pop())
//     3. If newDeck is not empty, start from step 1, otherwise go step 4.
//     4. When finished, there will be an extra step 2, so need to undo step 2 once: ans.push(ans.shift())
/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
  deck.sort((a, b) => a - b);
  const ans = [];
  while (deck.length) {
    ans.unshift(deck.pop());
    ans.unshift(ans.pop());
  }
  ans.push(ans.shift());
  return ans;
};
// 드로우 규칙을 역산해서 풀어놓은 discuss의 내용
// 코드의 흐름을 따르면 답이 나오는 건 알겠는데 사실 어떻게 풀었는지 감이 안옴..
