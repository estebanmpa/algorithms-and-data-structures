## Binary search
Binary search is an efficient way of searching for elements within a sorted array. Typically we are given an array, and a target element to search for.

The idea behind binary search is similar to how we would search for a word in a dictionary. We would open the dictionary in the middle and determine if the word we are looking for is in the left or right half. We would then repeat this process until we find the word or determine that it doesn't exist in the dictionary.

Similarly, binary search divides a given array by the middle index, called mid and compares the value at mid to the target value. If the target is greater than the mid value, we will search the right half of the array. If the target is less than the mid value, we will search the left half of the array.

In interviews and algorithmic problems, there are two common variations of binary search problems:

-Search Array - a sorted array, and a target is given and the task is to determine if the target is found in the array.
-Search Range - a range of numbers is given rather than an array, without a specific target.

## Binary Search (Search Range)
Imagine you picked a number from 1 - 100 and asked your friend to guess the number you were thinking of. There are three outcomes. Either their guess is correct, too small or too large. 

At its core, this is a binary search problem. As long as there is a way to determine if the number is too big, too small or correct, we can adjust the search space accordingly.

In many problems, comparing the guess to the target is done by a predefined function or some math equation.

## Exercises

- [binary-search.js](binary-search.js)
- [guess-number-higher-or-lower.js](guess-number-higher-or-lower.js)
- [koko-eating-bananas.js](koko-eating-bananas.js)
- [search-a-2d-matrix.js](search-a-2d-matrix.js)

## Other topics

- [Back to the main index](../README.md)
- [Arrays & Stacks](../arrays-stacks/README.md)
- [Linked Lists](../linked-lists/README.md)
- [Recursion](../recursion/README.md)
- [Sorting](../sorting/README.md)
- [Trees](../trees/README.md)