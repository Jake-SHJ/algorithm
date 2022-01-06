// Path Crossing

// Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively.
// You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.
// Return true if the path crosses itself at any point, that is,
// if at any time you are on a location you have previously visited. Return false otherwise.

// Example:
// Input: path = "NES"
// Output: false
// Explanation: Notice that the path doesn't cross any point more than once.

// 주어진 방향들을 통해 점을 움직였을 때, 왔던 지점을 거쳐갔는지의 대한 여부를 반환하는 문제

/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
  let point = "00";
  let x = 0;
  let y = 0;

  let visited = new Set([point]);

  for (const dir of path) {
    if (dir === "N") y += 1;
    if (dir === "S") y -= 1;
    if (dir === "E") x += 1;
    if (dir === "W") x -= 1;
    point = `${x}${y}`;
    if (visited.has(point)) return true;
    visited.add(point);
  }

  return false;
};
