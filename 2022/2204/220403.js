// X of a Kind in a Deck of Cards

// In a deck of cards, each card has an integer written on it.
// Return true if and only if you can choose X >= 2 such that it is possible to split the entire deck into 1 or more groups of cards, where:
// Each group has exactly X cards.
// All the cards in each group have the same integer.

// Example:
// Input: deck = [1,2,3,4,4,3,2,1]
// Output: true
// Explanation: Possible partition [1,1],[2,2],[3,3],[4,4].

// 주어진 배열에서 같은 숫자의 2개 이상의 요소로 그룹을 만들 때 정확히 나누어지는지 여부를 반환하는 문제

/**
 * @param {number[]} deck
 * @return {boolean}
 */
// 최대공약수 산출
const gcd = (a, b) => {
  return b > 0 ? gcd(b, a % b) : a;
};

var hasGroupsSizeX = function (deck) {
  const map = new Map();

  for (let i = 0; i < deck.length; i++) {
    map.set(deck[i], (map.get(deck[i]) || 0) + 1);
  }

  let res = 0;

  for (const [key, value] of map) {
    res = gcd(res, value);
  }
  // 최대공약수가 2 이상일 때 true
  return res > 1;
};
// discuss 참조, 최대공약수를 통해 확인하는 방법
