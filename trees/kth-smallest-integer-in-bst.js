/* Kth Smallest Integer in BST
Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) in the tree.

A binary search tree satisfies the following constraints:

    The left subtree of every node contains only nodes with keys less than the node's key.
    The right subtree of every node contains only nodes with keys greater than the node's key.
    Both the left and right subtrees are also binary search trees.


Example 1:

Input: root = [2,1,3], k = 1

Output: 1


Example 2:

Input: root = [4,3,5,2,null], k = 4

Output: 5


Constraints:

    1 <= k <= The number of nodes in the tree <= 10,000.
    0 <= Node.val <= 10,000

Hint 1
A naive solution would be to store the node values in an array, sort it, and then return the k-th value from the sorted array. This would be an O(nlogn) solution due to sorting. Can you think of a better way? Maybe you should try one of the traversal technique. 

Hint 2
We can use the Depth First Search (DFS) algorithm to traverse the tree. Since the tree is a Binary Search Tree (BST), we can leverage its structure and perform an in-order traversal, where we first visit the left subtree, then the current node, and finally the right subtree. Why? Because we need the k-th smallest integer, and by visiting the left subtree first, we ensure that we encounter smaller nodes before the current node. How can you implement this? 

Hint 3
We keep a counter variable cnt to track the position of the current node in the ascending order of values. When cnt == k, we store the current node's value in a global variable and return. This allows us to identify and return the k-th smallest element during the in-order traversal.

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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let count = 0;
        let result = null;

        const inorder = (node) => {
            if (!node || result !== null) return;
            inorder(node.left);
            count++;
            if (count === k) {
                result = node.val;
                return;
            }
            inorder(node.right);
        };

        inorder(root);
        return result;
    }
}


const solution = new Solution()
const root = new TreeNode(2, new TreeNode(1), new TreeNode(3))
console.log(solution.kthSmallest(root, 1)) // Output: 1

const root2 = new TreeNode(4, new TreeNode(3, new TreeNode(2)), new TreeNode(5))
console.log(solution.kthSmallest(root2, 4)) // Output: 5
