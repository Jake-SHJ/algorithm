// Distance Between Bus Stops

// A bus has n stops numbered from 0 to n - 1 that form a circle.
// We know the distance between all pairs of neighboring stops where distance[i] is the distance between the stops number i and (i + 1) % n.
// The bus goes along both directions i.e. clockwise and counterclockwise.
// Return the shortest distance between the given start and destination stops.

// Example:
// Input: distance = [1,2,3,4], start = 0, destination = 1
// Output: 1
// Explanation: Distance between 0 and 1 is 1 or 9, minimum is 1.

// 주어진 순회 배열에서 출발점부터 도착점까지의 거리가 짧은 방향의 거리를 반환하는 문제

/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function (distance, start, destination) {
  let forward = 0;
  let backward = 0;

  distance.forEach((el, idx) => {
    // 배열의 처음으로 돌아가지 않는 경우
    if (start < destination) {
      idx >= start && idx < destination ? (forward += el) : (backward += el);
    }
    // 배열의 처음을 거치는 경우
    if (start > destination) {
      idx >= start || idx < destination ? (forward += el) : (backward += el);
    }
  });

  return forward <= backward ? forward : backward;
};
