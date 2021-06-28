// Defanging an IP Address

// Given a valid (IPv4) IP address, return a defanged version of that IP address.
// A defanged IP address replaces every period "." with "[.]".

// Example:
// Input: address = "1.1.1.1"
// Output: "1[.]1[.]1[.]1"

// 주어진 IP 주소의 "."을 "[.]"으로 교체하여 반환하는 문제

/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  let result = "";
  for (const char of address) {
    if (char === ".") {
      result += "[.]";
    } else {
      result += char;
    }
  }
  return result;
};

// for로 순회하여 "."이면 "[.]"를 결과값에 넣도록 함

/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function (address) {
  return address.split(".").join("[.]");
};

// discuss에서 참고한 더 짧고 간단한 해답
// 사실상 split에서, 그리고 join에서 2번 순회도는 해답이지만 오히려 런타임이 더 빨랐음.
// 내장 메서드를 잘 활용해보자
