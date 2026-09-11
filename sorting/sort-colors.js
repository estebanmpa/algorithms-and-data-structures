/*
You are given an array nums consisting of n elements where each element is an integer representing a color:

    0 represents red
    1 represents white
    2 represents blue

Your task is to sort the array in-place such that elements of the same color are grouped together and arranged in the order: red (0), white (1), and then blue (2).

You must not use any built-in sorting functions to solve this problem.

Example 1:

Input: nums = [1,0,1,2]

Output: [0,1,1,2]


Example 2:

Input: nums = [2,1,0]

Output: [0,1,2]


Constraints:

    1 <= nums.length <= 300.
    0 <= nums[i] <= 2.
*/
class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        // Create a bucket and count 
        const bucket = {}
        nums.forEach(num => {
            const qty = bucket[num] || 0
            bucket[num] = qty + 1
        })

        const sorted = Object.entries(bucket)
        .map(([key, value]) => [parseInt(key), value])
        .sort((a, b) => a[0] - b[0])

        let numIdx = 0
        for (let j = 0; j < sorted.length; j++) {
            for (let n = 0; n < sorted[j][1]; n++) {
                nums[numIdx] = sorted[j][0]
                numIdx++
            }
        }

        return nums
    }
}


const solution = new Solution()
console.log(solution.sortColors([1, 0, 1, 2]))
