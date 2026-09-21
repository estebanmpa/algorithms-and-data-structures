/*
Given a binary tree root, return the level order traversal of it as a nested list, where each sublist contains the values of nodes at a particular level in the tree, from left to right.

Example 1:

Input: root = [1,2,3,4,5,6,7]

Output: [[1],[2,3],[4,5,6,7]]

Example 2:

Input: root = [1]

Output: [[1]]

Example 3:

Input: root = []

Output: []

Constraints:

    0 <= The number of nodes in the tree <= 2000.
    -1000 <= Node.val <= 1000
*/

// Definition for a binary tree node.
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
     * @return {number[][]}
     */
    levelOrder(root) {
        let res = []
        let q = []

        if (root) {
            q.push(root)
        }

        while (q.length > 0) {
            let level = []
            const len = q.length
            for (let i = 0; i < len; i++) {
                const curr = q.shift()
                level.push(curr.val)
                
                if (curr.left) {
                    q.push(curr.left)
                }

                if (curr.right) {
                    q.push(curr.right)
                }
            }
            res.push(level)
        }

        return res
    }
}

const solution = new Solution()
const root = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3, new TreeNode(6), new TreeNode(7)))
console.log(solution.levelOrder(root)) // Output: [[1],[2,3],[4,5,6,7]]

const root2 = new TreeNode(1)
console.log(solution.levelOrder(root2)) // Output: [[1]]

const root3 = null
console.log(solution.levelOrder(root3)) // Output: []
