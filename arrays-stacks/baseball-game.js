/*
You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.

Given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:

    An integer x: Record a new score of x.

    '+': Record a new score that is the sum of the previous two scores.

    'D': Record a new score that is the double of the previous score.

    'C': Invalidate the previous score, removing it from the record.

Return the sum of all the scores on the record after applying all the operations.

Note: The test cases are generated such that the answer and all intermediate calculations fit in a 32-bit integer and that all operations are valid.

Example 1:

Input: ops = ["1","2","+","C","5","D"]

Output: 18

Explanation:

    "1" - Add 1 to the record, record = [1].
    "2" - Add 2 to the record, record = [1, 2].
    "+" - Add 1 + 2 = 3 to the record, record = [1, 2, 3].
    "C" - Invalidate and remove the previous score, record = [1, 2].
    "5" - Add 5 to the record, record = [1, 2, 5].
    "D" - Add 2 * 5 = 10 to the record, record = [1, 2, 5, 10].
    The total sum is 1 + 2 + 5 + 10 = 18.

Example 2:

Input: ops = ["5","D","+","C"]

Output: 15

Explanation:

    "5" - Add 5 to the record, record = [5].
    "D" - Add 2 * 5 = 10 to the record, record = [5, 10].
    "+" - Add 5 + 10 = 15 to the record, record = [5, 10, 15].
    "C" - Invalidate and remove the previous score, record = [5, 10].
    The total sum is 5 + 10 = 15.

Constraints:

    1 <= operations.length <= 1000
    operations[i] is "C", "D", +, or a string representing an integer in the range [(-30,000), (30,000)].
    For operation "+", there will always be at least two previous scores on the record.
    For operations "C" and "D", there will always be at least one previous score on the record.
*/

class Solution {
    constructor () {
        this.pointer = -1
        this.stack = []
    }

    // Add elements to the top of the stack
    push(v) {
        this.pointer++
        this.stack[this.pointer] = v
    }

    // Remove and return the top element
    pop() {
        if (this.pointer === -1) return

        const top = this.stack[this.pointer]
        this.pointer--
        this.stack.pop()

        return top
    }

    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        const addSimple = (v) => { this.push(parseInt(v)) }
        const addDuplicate = (v) => { this.push(2 * parseInt(v)) }
        const addSum = (v1, v2) => { this.push(parseInt(v1) + parseInt(v2)) }
        const cancel = () => { this.pop() }
        const sumTotal = () => {
            if (this.pointer === -1) return 0
            return this.stack.reduce((total, value) => { return parseInt(total) + parseInt(value) })
        }

        for (let i = 0; i < operations.length; i++) {
            const current = operations[i]
            
            if (current === "+") {
                const v1 = parseInt(this.stack[this.pointer - 1])
                const v2 = parseInt(this.stack[this.pointer])
                addSum(v1, v2)
            } else if (current === "D") {
                const v1 = parseInt(this.stack[this.pointer])
                addDuplicate(v1)
            } else if (current === "C") {
                cancel()
            } else {
                addSimple(current)
            }
        }

        return sumTotal()
    }
}

const solution = new Solution();
console.log(solution.calPoints(["1","2","+","C","5","D"])); // Output: 18

const solution2 = new Solution();
console.log(solution2.calPoints(["5","D","+","C"])); // Output: 15

const solution3 = new Solution();
console.log(solution3.calPoints(["1","C"])); // Output: 0
