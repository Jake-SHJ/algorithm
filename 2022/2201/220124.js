// Minimum Index Sum of Two Lists

// Suppose Andy and Doris want to choose a restaurant for dinner, and they both have a list of favorite restaurants represented by strings.
// You need to help them find out their common interest with the least list index sum.
// If there is a choice tie between answers, output all of them with no order requirement.
// You could assume there always exists an answer.

// Example:
// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
// Output: ["Shogun"]
// Explanation: The only restaurant they both like is "Shogun".

// 주어진 두 배열에서 같은 항목을 찾고, 항목이 여러개일 경우 인덱스의 합이 낮은 항목을 반환하는 문제

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  const map = new Map();
  let result = [];
  // 첫번째 리스트를 map에 등록
  for (let i = 0; i < list1.length; i++) {
    map.set(list1[i], (map.get(list1[i]) || 0) + i);
  }
  // 두번째 리스트와 겹치는 항목만 map에 남기고, 인덱스의 합 등록
  for (const [key, value] of map) {
    const idx = list2.indexOf(key);
    if (idx === -1) {
      map.delete(key);
    } else {
      map.set(key, map.get(key) + idx);
    }
  }
  // 결과값에 가장 작은 인덱스 값을 남기거나, 같은 경우 push
  for (const [key, value] of map) {
    if (result.length === 0) {
      result.push([key, value]);
      continue;
    }

    if (result[0][1] > value) {
      result = [[key, value]];
      continue;
    }

    if (result[0][1] === value) {
      result.push([key, value]);
    }
  }
  // 키 값만 반환
  return result.map((el) => el[0]);
};
