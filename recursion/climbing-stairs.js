/*
You are given an integer n representing the number of steps to reach the top of a staircase. You can climb with either 1 or 2 steps at a time.

Return the number of distinct ways to climb to the top of the staircase.

Example 1:

Input: n = 2

Output: 2

Explanation:

    1 + 1 = 2
    2 = 2

Example 2:

Input: n = 3

Output: 3

Explanation:

    1 + 1 + 1 = 3
    1 + 2 = 3
    2 + 1 = 3

Constraints:

    1 <= n <= 45
*/
class Solution {
    constructor() {
        this.cache = {}
    }

    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if (n === 1 || n === 2) return n

        const result =  this.cache[n] || this.climbStairs(n-1) + this.climbStairs(n-2)
        this.cache[n] = result
        return result
    }
}

const solution = new Solution()
console.log(solution.climbStairs(2)) // Output: 2
console.log(solution.climbStairs(3)) // Output: 3
console.log(solution.climbStairs(4)) // Output: 5
console.log(solution.climbStairs(100)) // Output: 573147844013817200000
