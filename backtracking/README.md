# Backtracking

Backtracking is an algorithm with a lot of overlap with DFS. It operates on a brute-force approach which is to try all possible solutions and backtrack when we hit a dead-end.

Imagine that we are trapped in a maze and we are trying to find our way out. We can try all possible paths until we find the correct one. If we hit a dead-end, we backtrack and try another path. This is the essence of backtracking.

## Motivation with Example

Given a binary tree, we want to determine if there exists a path from the root to a leaf node without having a value of 0 in the path. If such a path exists, we return true, otherwise we return false.
Valid Path Exists
Valid Path Does Not Exist

The first thing that comes to mind is using depth-first search. Our constraint is that we cannot have a node with value 0 in our path. We also know that if the tree is empty, then there cannot exist a valid path either. Finally, if we reach a leaf node we can return true since it means there is a path that exists from root to leaf.

If there is a solution, it will either be in the left-subtree or the right-subtree.

1. We can arbitrarily choose to explore the left-subtree first.
2. If the left-subtree returns true, we can return true as well.
3. If the left-subtree returns false, we can explore the right-subtree.
4. If the right-subtree returns true, we can return true as well.
5. If both the left and right subtrees return false, we can return false as well.
