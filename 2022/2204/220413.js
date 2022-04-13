// Number of Laser Beams in a Bank

// Anti-theft security devices are activated inside a bank.
// You are given a 0-indexed binary string array bank representing the floor plan of the bank, which is an m x n 2D matrix.
// bank[i] represents the ith row, consisting of '0's and '1's. '0' means the cell is empty, while'1' means the cell has a security device.
// There is one laser beam between any two security devices if both conditions are met:
// The two devices are located on two different rows: r1 and r2, where r1 < r2.
// For each row i where r1 < i < r2, there are no security devices in the ith row.
// Laser beams are independent, i.e., one beam does not interfere nor join with another.
// Return the total number of laser beams in the bank.

// Example:
// Input: bank = ["011001","000000","010100","001000"]
// Output: 8
// Explanation: Between each of the following device pairs, there is one beam. In total, there are 8 beams:
//  * bank[0][1] -- bank[2][1]
//  * bank[0][1] -- bank[2][3]
//  * bank[0][2] -- bank[2][1]
//  * bank[0][2] -- bank[2][3]
//  * bank[0][5] -- bank[2][1]
//  * bank[0][5] -- bank[2][3]
//  * bank[2][1] -- bank[3][2]
//  * bank[2][3] -- bank[3][2]
// Note that there is no beam between any device on the 0th row with any on the 3rd row.
// This is because the 2nd row contains security devices, which breaks the second condition.

// 주어진 배열에서 조건에 맞는 레이저 사이의 빔 개수를 반환하는 문제

/**
 * @param {string[]} bank
 * @return {number}
 */
var numberOfBeams = function (bank) {
  const lasers = bank
    .map((el) => {
      // 레이저 제거
      const replaced = el.replaceAll("1", "");
      // 레이저 개수 반환
      return el.length - replaced.length;
    })
    // 레이저 개수 0이면 row 삭제
    .filter((el) => el !== 0);
  // 레이저가 없거나 한줄만 있으면 0 반환
  if (lasers.length === 0 || lasers.length === 1) return 0;

  let count = 0;
  // 레이저 사이의 빔 개수 카운트
  for (let i = 0; i < lasers.length - 1; i++) {
    count += lasers[i] * lasers[i + 1];
  }
  return count;
};
