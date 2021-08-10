// Destination City

// You are given the array paths, where paths[i] = [cityAi, cityBi] means there exists a direct path going from cityAi to cityBi.
// Return the destination city, that is, the city without any path outgoing to another city.
// It is guaranteed that the graph of paths forms a line without any loop, therefore, there will be exactly one destination city.

// Example:
// Input: paths = [["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
// Output: "Sao Paulo"
// Explanation: Starting at "London" city you will reach "Sao Paulo" city which is the destination city.
// Your trip consist of: "London" -> "New York" -> "Lima" -> "Sao Paulo".

// 주어진 배열의 경로에서 최종 목적지가 되는 곳을 반환하는 문제

/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function (paths) {
  // 출발지만 따로 배열로 생성
  const starts = paths.map((path) => path[0]);
  let result = "";

  for (let i = 0; i < paths.length; i++) {
    // 배열의 종착지 중에서 출발지에 포함되지 않는 경우 최종 목적지가 됨
    if (!starts.includes(paths[i][1])) {
      result = paths[i][1];
      break;
    }
  }

  return result;
};
