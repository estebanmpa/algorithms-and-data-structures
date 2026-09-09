/*
You are given a binary array nums, return the maximum number of consecutive 1's in the array

Constraints:
    1 <= nums.length <= 100,000
    nums[i] is either 0 or 1.
*/

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {
        let maxCount = 0;
        let currentCount = 0;

        // nums.forEach is faster than for loop, but for loop is more readable
        for (let i = 0; i < nums.length; i++) {
            const current = nums[i];

            if (current === 1) {
                currentCount++;
            }
            else {
                currentCount = 0;
            }

            if (currentCount > maxCount) {
                maxCount = currentCount;
            }
        }

        return maxCount;
    }
}

const solution = new Solution();
console.assert(solution.findMaxConsecutiveOnes([1, 1, 0, 1, 1, 1]) === 3, 'Test Case 1 Failed');
