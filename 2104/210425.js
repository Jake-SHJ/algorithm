// Keys and Rooms

// There are N rooms and you start in room 0.
// Each room has a distinct number in 0, 1, 2, ..., N-1, and each room may have some keys to access the next room.
// Formally, each room i has a list of keys rooms[i], and each key rooms[i][j] is an integer in [0, 1, ..., N-1] where N = rooms.length.
// A key rooms[i][j] = v opens the room with number v.
// Initially, all the rooms start locked (except for room 0).
// You can walk back and forth between rooms freely.
// Return true if and only if you can enter every room.

// Example:
// Input: [[1],[2],[3],[]]
// Output: true
// Explanation:
// We start in room 0, and pick up key 1.
// We then go to room 1, and pick up key 2.
// We then go to room 2, and pick up key 3.
// We then go to room 3.  Since we were able to go to every room, we return true.

// 0번방만 문이 열려있고 각 방에 키가 있을 때, 모든 방을 열 수 있는지를 반환하는 문제

/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  const roomCount = rooms.length;
  let validKeys = new Set();

  const findKeys = (key) => {
    if (key[0] === undefined) return;

    for (let i = 0; i < key.length; i++) {
      const nextKey = key[i];
      if (validKeys.has(nextKey)) continue;
      validKeys.add(nextKey);
      findKeys(rooms[nextKey]);
    }
  };

  findKeys(rooms[0]);
  validKeys.delete(0);

  return validKeys.size >= roomCount - 1 ? true : false;
};

// 0번 방의 키를 주고, 키를 통해 각 방을 순회한 다음,
// 0번 방을 제거한 키의 갯수가 전체 방 갯수 - 1 (0번 방은 제외해야 하므로)과 같거나 큰 경우
// 모든 방을 들어갈 수 있다고 결론내려 true를 반환하도록 하였다.

// Set의 has를 통해 이미 갔다온 방은 예외처리를 하였다.
