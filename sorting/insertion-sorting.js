class Solution {
    insertionSort(arr) {
      for ( let i = 1; i < arr.length; i++) {
        let j = i - 1
        
        while (j>=0 && arr[j] > arr[j+1]) {
          const tmp = arr[j+1]
          arr[j+1] = arr[j]
          arr[j] = tmp
          j--
        }
      }
      
      return arr
    }
}

const solution = new Solution()
console.log(solution.insertionSort([5, 2, 4, 6, 1, 3])) // Output: [1, 2, 3, 4, 5, 6]
console.log(solution.insertionSort([12, 11, 13, 5, 6])) // Output: [5, 6, 11, 12, 13]
