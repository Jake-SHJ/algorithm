// Lucky Numbers in a Matrix

// Given a m * n matrix of distinct numbers, 
// return all lucky numbers in the matrix in any order.
// A lucky number is an element of the matrix such that 
// it is the minimum element in its row and maximum in its column.

// Example:
// Input: matrix = [[3,7,8],[9,11,13],[15,16,17]]
// Output: [15]
// Explanation: 15 is the only lucky number since it is the minimum in its row and the maximum in its column

// 주어진 2차원 배열에서 row에서 가장 크면서, col에서 가장 작은 수를 반환하는 문제

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
 var luckyNumbers  = function(matrix) {
    const minRow = matrix.map(el => Math.min(...el));
    let maxCol = [];
    let result = [];
    
    for(let i = 0; i < matrix[0].length; i++) {
        let temp = [];
        for (let j = 0; j < matrix.length; j++) {
            temp.push(matrix[j][i]);
        }
        maxCol.push(Math.max(...temp));
    }
    
    minRow.map(el => {
        if (maxCol.includes(el)) {
            return result.push(el);
        }
    });
    
    return result;
};