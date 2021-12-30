// Unique Email Addresses

// Every valid email consists of a local name and a domain name, separated by the '@' sign.
// Besides lowercase letters, the email may contain one or more '.' or '+'.
// For example, in "alice@leetcode.com", "alice" is the local name, and "leetcode.com" is the domain name.
// If you add periods '.' between some characters in the local name part of an email address,
// mail sent there will be forwarded to the same address without dots in the local name.
// Note that this rule does not apply to domain names.
// For example, "alice.z@leetcode.com" and "alicez@leetcode.com" forward to the same email address.
// If you add a plus '+' in the local name, everything after the first plus sign will be ignored.
// This allows certain emails to be filtered. Note that this rule does not apply to domain names.
// For example, "m.y+name@email.com" will be forwarded to "my@email.com".
// It is possible to use both of these rules at the same time.
// Given an array of strings emails where we send one email to each email[i],
// return the number of different addresses that actually receive mails.

// Example:
// Input: emails = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"]
// Output: 2
// Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails.

// 주어진 이메일을 규칙에 따라 유니크한 이메일의 개수를 반환하는 문제

/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
  const map = new Map();

  for (const email of emails) {
    const splitedEmail = email.split("@");
    // localname에서 모든 '.'은 의미 없음, + 뒷부분은 의미 없음
    const localName = splitedEmail[0].replaceAll(".", "").split("+")[0];
    const processedEmail = localName + "@" + splitedEmail[1];

    if (!map.has(processedEmail)) {
      map.set(processedEmail, 1);
    }
  }

  return map.size;
};
