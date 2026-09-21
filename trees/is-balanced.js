/*
Given a binary tree, return true if it is height-balanced and false otherwise.

A height-balanced binary tree is defined as a binary tree in which the left and right subtrees of every node differ in height by no more than 1.

Example 1:

Input: root = [1,2,3,null,null,4]

Output: true

Example 2:

Input: root = [1,2,3,null,null,4,null,5]

Output: false

Example 3:

Input: root = []

Output: true

Constraints:

    The number of nodes in the tree is in the range [0, 1000].
    -1000 <= Node.val <= 1000
*/


// Definition for a binary tree node.
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    /**
     * @param {TreeNode} root
     * @return {boolean}
     */
    isBalanced(root) {
        const height = (root) => {
            if (!root) return 0
            const left = 1 + height(root.left)
            const right = 1 + height(root.right)
            const max = Math.max(left, right)

            return max
        }

        const checkIsBalanced = (node) => {
            if (node === null) return true
            const left = height(node.left)
            const right = height(node.right)
            const diff = Math.abs(left - right)

            if (diff > 1) {
                return false
            } else {
                return checkIsBalanced(node.left) && checkIsBalanced(node.right)
            }

        }

        return checkIsBalanced(root)
    }
}

const solution = new Solution()
const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null))
console.log(solution.isBalanced(root)) // Output: true

const root2 = new TreeNode(1, new TreeNode(2, new TreeNode(3), null), null)
console.log(solution.isBalanced(root2)) // Output: false
