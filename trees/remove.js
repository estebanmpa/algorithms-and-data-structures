// Definition for a binary tree node.
class TreeNode {
    constructor(val = 0, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    // Return the minimum value node of the BST.
    minValueNode(root) {
        let curr = root;
        while (curr != null && curr.left != null) {
            curr = curr.left;
        }
        return curr;
    }

    /**
     * @param {TreeNode} root
     * @param {number} key
     * @return {TreeNode}
     */
    deleteNode(root, val) {
        if (root == null) {
            return null;
        }
        if (val > root.val) {
            root.right = this.deleteNode(root.right, val);
        } else if (val < root.val) {
            root.left = this.deleteNode(root.left, val);
        } else {
            if (root.left == null) {
                return root.right;
            } else if (root.right == null) {
                return root.left;
            } else {
                let minNode = this.minValueNode(root.right);
                root.val = minNode.val;
                root.right = this.deleteNode(root.right, minNode.val);
            }
        }
        return root;
    }
}

const solution = new Solution();
console.log(solution.deleteNode(new TreeNode(5, new TreeNode(3, new TreeNode(2), new TreeNode(4)), new TreeNode(6)), 3));