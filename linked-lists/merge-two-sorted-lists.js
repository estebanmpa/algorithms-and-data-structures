/*
You are given the heads of two sorted linked lists list1 and list2.

Merge the two lists into one sorted linked list and return the head of the new sorted linked list.

The new list should be made up of nodes from list1 and list2.

Example 1:

Input: list1 = [1,2,4], list2 = [1,3,5]

Output: [1,1,2,3,4,5]

Example 2:

Input: list1 = [], list2 = [1,2]

Output: [1,2]

Example 3:

Input: list1 = [], list2 = []

Output: []

Constraints:

    0 <= The length of the each list <= 100.
    -100 <= Node.val <= 100
*/

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    /**
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        // Funtion to plain the list
        const plainNodes = (list) => {
            const result = []
            let current = list
            while (current != null) {
                result.push(current)
                current = current.next
            }

            // Empty all the next pointers
            result.forEach(node => node.next = null)

            return result
        }

        const plainedNodes = [...plainNodes(list1), ...plainNodes(list2)]
        const sortedPlainedNodes = plainedNodes.sort((a, b) => a.val - b.val)

        // Reconnect the pointers
        for (let i = 0; i < sortedPlainedNodes.length - 1; i++) {
            sortedPlainedNodes[i].next = sortedPlainedNodes[i + 1]
        }

        return sortedPlainedNodes[0] || null
    }
}

const solution = new Solution()
console.log(solution.mergeTwoLists(new ListNode(1, new ListNode(2, new ListNode(4))), new ListNode(1, new ListNode(3, new ListNode(5)))))
