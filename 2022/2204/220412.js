// Encode and Decode TinyURL

// Note: This is a companion problem to the System Design problem: Design TinyURL.
// TinyURL is a URL shortening service where you enter a URL such as https://leetcode.com/problems/design-tinyurl and it returns a short URL such as http://tinyurl.com/4e9iAk. Design a class to encode a URL and decode a tiny URL.
// There is no restriction on how your encode/decode algorithm should work.
// You just need to ensure that a URL can be encoded to a tiny URL and the tiny URL can be decoded to the original URL.
// Implement the Solution class:
// Solution() Initializes the object of the system.
// String encode(String longUrl) Returns a tiny URL for the given longUrl.
// String decode(String shortUrl) Returns the original long URL for the given shortUrl.
// It is guaranteed that the given shortUrl was encoded by the same object.

// Example:
// Input: url = "https://leetcode.com/problems/design-tinyurl"
// Output: "https://leetcode.com/problems/design-tinyurl"
// Explanation:
// Solution obj = new Solution();
// string tiny = obj.encode(url); // returns the encoded tiny url.
// string ans = obj.decode(tiny); // returns the original url after deconding it.

// 주어진 문자열을 tiny url로 변환하고, 다시 decode 할 수 있는 함수를 생성하는 문제

/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
let decodeMap = new Map();
let count = 0;
const base = "http://tinyurl.com/";

var encode = function (longUrl) {
  const shortUrl = base + String(count++);
  decodeMap.set(shortUrl, longUrl);
  return shortUrl;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function (shortUrl) {
  return decodeMap.get(shortUrl);
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */

// discuss 참조
