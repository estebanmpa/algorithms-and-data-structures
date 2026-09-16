/*
Guess Number Higher Or Lower
Easy Topics Company Tags

We are playing the Guess Game. The game is as follows:

I pick a number from 1 to n. You have to guess which number I picked.

Every time you guess wrong, I will tell you whether the number I picked is higher or lower than your guess.

You call a pre-defined API int guess(int num), which returns three possible results:

    0: your guess is equal to the number I picked (i.e. num == pick).
    -1: Your guess is higher than the number I picked (i.e. num > pick).
    1: Your guess is lower than the number I picked (i.e. num < pick).

Return the number that I picked.

Example 1:

Input: n = 5, pick = 3

Output: 3

Example 2:

Input: n = 15, pick = 10

Output: 10

Example 3:

Input: n = 1, pick = 1

Output: 1

Constraints:

    1 <= pick <= n <= ((2^31)-1)

*/
/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 */

class Solution {
    constructor(guessNumber) {
        this.guessNumber = guessNumber;
    }

    /**
     * @param {number} n
     * @return {number}
     */
    guess(n) {
        const guess = (num) => {
            if (num === this.guessNumber) {
                return 0;
            } else if (num > this.guessNumber) {
                return -1;
            } else {
                return 1;
            }
        };

        let left = 1
        let right = n

        while (left <= right) {
            const mid = Math.floor((left + right)/2)

            if (guess(mid) === 1) {
                left = mid + 1
            } else if (guess(mid) === -1) {
                right = mid - 1
            } else {
                return mid
            }
        }

        return -1
    }
}

const solution = new Solution(3)
console.log(solution.guess(5)) // 3

const solution2 = new Solution(10)
console.log(solution2.guess(15)) // 10

const solution3 = new Solution(1)
console.log(solution3.guess(1)) // 1  