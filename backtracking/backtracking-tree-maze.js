class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    path = []
    canReachLeaf(root, path) {
        if (root == null || root.val == 0) {
            return false;
        }
        this.path.push(root.val)

        if (root.left == null && root.right == null) {
            return true;
        }
        if (this.canReachLeaf(root.left, path)) {
            return true;
        }
        if (this.canReachLeaf(root.right, path)) {
            return true;
        }

        this.path.pop()
        return false;
    }
}

const solution = new Solution()
const root = new TreeNode(4, new TreeNode(0, null, new TreeNode(7)), new TreeNode(1, new TreeNode(0), new TreeNode(2)))
solution.canReachLeaf(root)
console.log(solution.path)
