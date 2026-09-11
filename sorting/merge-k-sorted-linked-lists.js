/*
You are given an array of k linked lists lists, where each list is sorted in ascending order.

Return the sorted linked list that is the result of merging all of the individual linked lists.

Example 1:

Input: lists = [[1,2,4],[1,3,5],[3,6]]

Output: [1,1,2,3,3,4,5,6]

Example 2:

Input: lists = []

Output: []

Example 3:

Input: lists = [[]]

Output: []

Constraints:

    0 <= lists.length <= 10000
    0 <= lists[i].length <= 500
    -10000 <= lists[i][j] <= 10000
    lists[i] is sorted in ascending order.
    The sum of lists[i].length will not exceed 10000.
*/
class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        // Plain the linked lists to arrays and concatenate
        const plained = []
        for (let i = 0; i < lists.length; i++) {

            // Traverse the linked list
            let node = lists[i]
            while (node !== null) {
                plained.push(node.val)
                node = node.next
            }
        }

        const sorted = plained.sort((a, b) => a > b ? 1 : -1)

        if (sorted.length === 0) return null

        // Create a new linked list from the sorted array
        let current = new ListNode(0)
        const head = current
        for (let i = 0; i < sorted.length; i++) {
            if ( i === 0) {
                current.val = sorted[i]
            } else {
                let node = new ListNode(sorted[i])
                current.next = node
                current = node
            }
        }

        return head
    }
}
const solution = new Solution()

const list1 = new ListNode(1)
list1.next = new ListNode(2)
list1.next.next = new ListNode(4)

const list2 = new ListNode(1)
list2.next = new ListNode(3)
list2.next.next = new ListNode(5)

const list3 = new ListNode(3)
list3.next = new ListNode(6)

console.log(solution.mergeKLists([list1, list2, list3])) // Output: [1,1,2,3,3,4,5,6]
