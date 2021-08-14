// Determine Color of a Chessboard Square

// You are given coordinates, a string that represents the coordinates of a square of the chessboard.
// Below is a chessboard for your reference.
// Return true if the square is white, and false if the square is black.
// The coordinate will always represent a valid chessboard square.
// The coordinate will always have the letter first, and the number second.

// Example:
// Input: coordinates = "a1"
// Output: false
// Explanation: From the chessboard above, the square with coordinates "a1" is black, so return false.

// 주어진 체스판 위치가 흰색인지 검은색인지 판단하는 문제

/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function (coordinates) {
  const col = coordinates[0].charCodeAt() - 96;
  let result = false;

  if (col % 2 === 1) {
    result = coordinates[1] % 2 === 1 ? false : true;
  } else {
    result = coordinates[1] % 2 === 1 ? true : false;
  }

  return result;
};

// col을 따로 저장해두고 col과 row의 조건에 맞춰 색을 반환
// 메모리 효율은 좋으나 속도면에서 좋지 않음

var squareIsWhite = function (coordinates) {
  return coordinates[0].charCodeAt() % 2 !== parseInt(coordinates[1]) % 2;
};

// discuss를 참조한 한줄로 처리한 방법, 속도는 빨라지나 메모리 효율은 오히려 감소
