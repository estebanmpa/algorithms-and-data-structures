/*
You are given an m x n 2-D integer array matrix and an integer target.

    Each row in matrix is sorted in non-decreasing order.
    The first integer of every row is greater than the last integer of the previous row.

Return true if target exists within matrix or false otherwise.

Can you write a solution that runs in O(log(m * n)) time?

Example 1:

Input: matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]], target = 10

Output: true

Example 2:

Input: matrix = [[1,2,4,8],[10,11,12,13],[14,20,30,40]], target = 15

Output: false

Constraints:

    m == matrix.length
    n == matrix[i].length
    1 <= m, n <= 100
    -10000 <= matrix[i][j], target <= 10000
*/
class Solution {
    /**
     * @param {number[][]} matrix
     * @param {number} target
     * @return {boolean}
     */
    searchMatrix(matrix, target) {
        const convertToArray = (matrix) => {
            const result = []
            matrix.forEach(row => row.forEach(col => result.push(col)))
            return result
        }

        // Convert matrix to plain array
        const input = convertToArray(matrix)

        // Binary search
        let left = 0
        let right = input.length - 1

        while ( left <= right ) {
            const mid = Math.floor((left + right) / 2)

            if ( target < input[mid] ) {
                right = mid - 1
            } else if ( target > input[mid] ) {
                left = mid + 1
            } else {
                return true
            }
        }

        return false
    }
}

const solution = new Solution()
console.log(solution.searchMatrix([[1,2,4,8],[10,11,12,13],[14,20,30,40]], 10)) // true
console.log(solution.searchMatrix([[1,2,4,8],[10,11,12,13],[14,20,30,40]], 15)) // false
