/*
You are given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such that adding up all the values along the path equals targetSum.

A leaf is a node with no children.

Example 1:

Input: root = [1,2,3], targetSum = 3

Output: true

Explanation: The root-to-leaf path with the target sum is 1 -> 2.

Example 2:

Input: root = [-15,10,20,null,null,15,5,-5], targetSum = 15

Output: true

Explanation: The root-to-leaf path with the target sum is -15 -> 20 -> 15 -> -5.

Example 3:

Input: root = [1,1,0,1], targetSum = 2

Output: false

Constraints:

    0 <= The number of nodes in the tree <= 5000.
    -1000 <= Node.val <= 1000
    -1000 <= targetSum <= 1000
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
     * @param {number} targetSum
     * @return {boolean}
     */
    hasPathSum(root, targetSum) {
        let path = []
        const pathSum = (path) => {
            return path.reduce((acc, current) => acc + current, 0)
        }
        const hasPath = (node, path) => {
            if (!node) {
                return false
            }
            path.push(node.val)

            if (!node.left && !node.right) {
                const reached = pathSum(path) === targetSum
                path.pop()
                return reached
            }

            if (hasPath(node.left, path)) {
                return true
            }

            if (hasPath(node.right, path)) {
                return true
            }

            path.pop()
            return false
        }

        return hasPath(root, path)
    }
}

const solution = new Solution()
const root = new TreeNode(1, new TreeNode(2), new TreeNode(3))
console.log(solution.hasPathSum(root, 2))
