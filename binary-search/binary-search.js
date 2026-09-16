class Solution {
    binarySearch(nums, target) {
        let left = 0
        let right = nums.length - 1

        while (left <= right) {
            const mid = Math.floor((left + right) / 2)

            if (target > nums[mid]) {
                left = mid + 1
            } else if (target < nums[mid]) {
                right = mid - 1
            } else {
                return nums[mid]
            }
        }

        return "Not found"
    }
}

const solution = new Solution()
console.log(solution.binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 100], 7))
console.log(solution.binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 50, 100], 100))
console.log(solution.binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 50, 100], 99))