// Assign Cookies

// Assume you are an awesome parent and want to give your children some cookies.
// But, you should give each child at most one cookie.
// Each child i has a greed factor g[i], which is the minimum size of a cookie that the child will be content with;
// and each cookie j has a size s[j]. If s[j] >= g[i], we can assign the cookie j to the child i, and the child i will be content.
// Your goal is to maximize the number of your content children and output the maximum number.

// Example:
// Input: g = [1,2,3], s = [1,1]
// Output: 1
// Explanation: You have 3 children and 2 cookies. The greed factors of 3 children are 1, 2, 3.
// And even though you have 2 cookies, since their size is both 1, you could only make the child whose greed factor is 1 content.
// You need to output 1.

// 주어진 두 배열에서 s의 요소가 g의 요소보다 크거나 같은 경우의 최대횟수를 반환하는 문제

/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  // 내림차순 정렬
  g.sort((a, b) => a - b);
  s.sort((a, b) => a - b);

  let j = 0,
    result = 0;
  // 순회
  for (const num of s) {
    if (num >= g[j]) {
      j++;
      result++;
    }
  }
  return result;
};

// discuss 참조, 정렬없이 순회로 풀려다가 오히려 꼬여서 못풀었음
// 단순하게 접근할 것
