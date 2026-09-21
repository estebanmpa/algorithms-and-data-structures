// Definition for a binary tree node.
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    height(root) {
      if (!root) return 0
      const left = 1 + this.height(root.left)
      const right = 1 + this.height(root.right)
      const max = Math.max(left, right)
      
      return max
    }
}

const solution = new Solution()
const root = new TreeNode(1, new TreeNode(2, new TreeNode(3), null), null)
console.log(solution.height(root)) // Output: 3

const root2 = new TreeNode(1, null, new TreeNode(2, null, new TreeNode(3)))
console.log(solution.height(root2)) // Output: 3

const root3 = new TreeNode(1, new TreeNode(2), new TreeNode(3))
console.log(solution.height(root3)) // Output: 2
