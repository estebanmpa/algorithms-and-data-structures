/*
Given the beginning of a singly linked list head, reverse the list, and return the new beginning of the list.

Example 1:

Input: head = [0,1,2,3]

Output: [3,2,1,0]

Example 2:

Input: head = []

Output: []

Constraints:

    0 <= The length of the list <= 1000.
    -1000 <= Node.val <= 1000

*/

class ListNode {
    constructor(val = 0, next = null) {
        this.val = val;
        this.next = next;
    }
}


class Solution {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        // Save all the pointers
        const plainNodes = []
        let currentNode = head
        while (currentNode != null) {
            plainNodes.push(currentNode)
            currentNode = currentNode.next
        }

        // Empty all the pointers
        plainNodes.forEach(node => node.next = null)

        // Reverse the array
        const reversedPlainNodes = plainNodes.reverse()

        // Reconnect the pointers
        for (let i = 0; i < reversedPlainNodes.length - 1; i++) {
            reversedPlainNodes[i].next = reversedPlainNodes[i + 1]
        }

        return reversedPlainNodes[0]
    }
}

class Solution2 {
    /**
     * @param {ListNode} head
     * @return {ListNode}
     */
    reverseList(head) {
        let prev = null;
        let curr = head;

        while (curr) {
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }
        return prev;
    }
}

const solution = new Solution()
const result = solution.reverseList(new ListNode(0, new ListNode(1, new ListNode(2, new ListNode(3)))))
console.log(JSON.stringify(result))

const solution2 = new Solution()
const result2 = solution2.reverseList([])
console.log(JSON.stringify(result2))
