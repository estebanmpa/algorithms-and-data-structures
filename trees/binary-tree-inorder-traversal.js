
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
     * @return {number[]}
     */
    inorderTraversal(root) {
        const result = []
        const inorder = (node) => {
            if (node === null) return []
            inorder(node.left)
            result.push(node.val)
            inorder(node.right)
        }

        inorder(root)
        return result
    }
}

const solution = new Solution()
const root = new TreeNode(1, null, new TreeNode(2, new TreeNode(3), null))
console.log(solution.inorderTraversal(root)) // Output: [1, 3, 2]  
