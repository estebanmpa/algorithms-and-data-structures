class Solution {
    factorial(n) {
        if ( n <= 1) {
            return 1;
        }
        return n * this.factorial(n - 1);
    }
}

const solution = new Solution();
console.log(solution.factorial(5)); // Output: 120