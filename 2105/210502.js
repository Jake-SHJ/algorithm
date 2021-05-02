// Search Suggestions System

// Given an array of strings products and a string searchWord.
// We want to design a system that suggests at most three product names from products after each character of searchWord is typed.
// Suggested products should have common prefix with the searchWord.
// If there are more than three products with a common prefix return the three lexicographically minimums products.
// Return list of lists of the suggested products after each character of searchWord is typed.

// Example:
// Input: products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"
// Output: [
// ["mobile","moneypot","monitor"],
// ["mobile","moneypot","monitor"],
// ["mouse","mousepad"],
// ["mouse","mousepad"],
// ["mouse","mousepad"]
// ]
// Explanation: products sorted lexicographically = ["mobile","moneypot","monitor","mouse","mousepad"]
// After typing m and mo all products match and we show user ["mobile","moneypot","monitor"]
// After typing mou, mous and mouse the system suggests ["mouse","mousepad"]

// searchWord를 순서대로 입력하였을 때, 추천 단어(입력된 글자와 동일한 순서와 위치를 가진 단어)를 3개까지 노출하되 사전순으로 반환하는 문제

/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
var suggestedProducts = function (products, searchWord) {
  const result = [];
  let tmp = [];
  products = products.sort(); // 사전순으로 우선 정렬

  for (let i = 0; i < searchWord.length; i++) {
    const searchKey = searchWord.slice(0, i + 1); // 누르는 순서대로 검색어 분할

    for (let j = 0; j < products.length; j++) {
      const prdKey = products[j].slice(0, i + 1); // 비교할 대상도 동일하게 분할

      if (tmp.length < 3) {
        // 저장된 값이 3개 이하일때
        if (searchKey === prdKey) {
          // 검색어와 대상이 같다면
          tmp.push(products[j]); // tmp에 저장
        }

        if (j === products.length - 1) {
          // 저장된 값이 3개 이하인데, 이미 상품의 마지막이라면
          result.push(tmp); // 여기서 tmp를 result로 저장
          tmp = []; // tmp clear
        }
      } else {
        // 저장된 값이 3개인 경우
        result.push(tmp); // tmp를 result로 저장
        tmp = []; // tmp clear
        break; // 이미 3개를 다 찾은 경우이므로 순회 중지
      }
    }
  }

  return result;
};

// 저장된 값이 3개 이하지만 상품의 마지막인 경우를 고려하지 않아서 문제를 빨리 풀지 못함
// 거기에 추가로 사전순으로 정렬해야 하는데 고려하지 않고 그냥 넣어서 한번 틀림. 조건을 잘 읽어 볼것 (lexicographically)
