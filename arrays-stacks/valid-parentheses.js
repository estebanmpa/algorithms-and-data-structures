/*
You are given a string s consisting of the following characters: '(', ')', '{', '}', '[' and ']'.

The input string s is valid if and only if:

    Every open bracket is closed by the same type of close bracket.
    Open brackets are closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.

Return true if s is a valid string, and false otherwise.

Example 1:

Input: s = "[]"

Output: true

Example 2:

Input: s = "([{}])"

Output: true

Example 3:

Input: s = "[(])"

Output: false

Explanation: The brackets are not closed in the correct order.

Constraints:

    1 <= s.length <= 1000

*/

class Solution {
    constructor () {
        this.pointer = -1
        this.stack = []
        this.openChars = ['(', '{', '[']
        this.closedChars = [')', ']', '}']
    }

    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const limit = s.length

        for (let i = 0; i < limit; i++) {
            const currentChar = s[i]

            if (this.openChars.includes(currentChar)) {
                this.stack.push(currentChar)
            } else {
                // Verify the closing char corresponds to its pair
                const lastOppened = this.stack.pop()

                if (!lastOppened
                  || (lastOppened === '(' && currentChar !== ')')
                  || (lastOppened === '{' && currentChar !== '}')
                  || (lastOppened === '[' && currentChar !== ']')) {
                    return false;
                  } 
            }
        }

        // The stack must be empty to be valid
        if (this.stack.length !== 0) return false

        return true
    }
}

const solution = new Solution();
console.log(solution.isValid("([{}])")); // Output: true

const solution2 = new Solution();
console.log(solution2.isValid(")")); // Output: false