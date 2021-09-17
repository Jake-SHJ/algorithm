// Minimum Cost to Move Chips to The Same Position

// We have n chips, where the position of the ith chip is position[i].
// We need to move all the chips to the same position. 
// In one step, we can change the position of the ith chip from position[i] to:
//  - position[i] + 2 or position[i] - 2 with cost = 0.
//  - position[i] + 1 or position[i] - 1 with cost = 1.
// Return the minimum cost needed to move all the chips to the same position.

// Example:
// Input: position = [1,2,3]
// Output: 1
// Explanation: First step: Move the chip at position 3 to position 1 with cost = 0.
// Second step: Move the chip at position 2 to position 1 with cost = 1.
// Total cost is 1.
 
// 주어진 배열에서 규칙에 따라 한 곳으로 칩들을 모을 때, 가장 적은 코스트를 반환하는 문제

/**
 * @param {number[]} position
 * @return {number}
 */
 var minCostToMoveChips = function(position) {
    let odd = 0, 
        even = 0;
    position.map((pos) => 
        pos % 2 ? odd += 1 : even += 1
    );
    return Math.min(odd, even);
};