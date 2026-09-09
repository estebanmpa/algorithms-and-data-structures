/*
You are given an array arr, replace every element in that array with the greatest element among the elements to its right, and replace the last element with -1.

After doing so, return the array.

Example 1:

Input: arr = [2,4,5,3,1,2]

Output: [5,5,3,2,2,-1]

Example 2:

Input: arr = [3,3]

Output: [3,-1]

Constraints:

    1 <= arr.length <= 10,000
    1 <= arr[i] <= 100,000
*/

class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        const getMaxElement = (start, arr) => {
            let max = -1

            for (let i = start; i < arr.length; i++) {
                const current = arr[i]

                if (current > max) {
                    max = current
                }
            }

            return max
        }

        for (let i = 0; i < arr.length; i++) {
            const isNotLast = i < arr.length - 1

            if (isNotLast) {
                arr[i] = getMaxElement(i + 1, arr)
            } else {
                arr[i] = -1
            }
        }

        return arr
    }
}


const solution = new Solution();
console.info(solution.replaceElements([2, 4, 5, 3, 1, 2])); // Output: [5, 5, 3, 2, 2, -1]
console.info(solution.replaceElements([3, 3])); // Output: [3, -1]

