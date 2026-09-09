# algorithms-and-data-structures

Personal notes and exercises about algorithms and data structures.

## Table of contents

- [What is a data structure?](#what-is-a-data-structure)
- [What is an algorithm?](#what-is-an-algorithm)
- [Big O notation in one minute](#big-o-notation-in-one-minute)
- [Topics](#topics)

## What is a data structure?

A data structure is a way of organizing and storing data in memory (RAM) so that
it can be used efficiently.

Memory can be pictured as a very long list of numbered slots. Each slot has an
address, and every value we store lives at one of those addresses. A data
structure defines **how** those slots are used: are the values next to each other,
scattered around and linked together, arranged as a tree, and so on.

The layout we choose has a direct impact on performance. Reading a value when you
already know its address is instant, but shifting thousands of values one slot to
the side is not. Picking the right structure for the problem is what keeps a
program fast.

## What is an algorithm?

An algorithm is a finite sequence of steps that takes an input and produces an
output. Data structures and algorithms go together: the structure decides how the
data is stored, and the algorithm decides how we read, search, insert or transform
it.

## Big O notation in one minute

Big O describes how the cost of an operation grows as the amount of data `n`
grows. It ignores constants and focuses on the shape of the growth.

- `O(1)` — constant: the cost does not depend on `n` (e.g. reading `array[5]`).
- `O(log n)` — logarithmic: the input is cut roughly in half each step (binary search).
- `O(n)` — linear: you touch every element once (a simple loop).
- `O(n^2)` — quadratic: nested loops over the same data (naive sorting).

## Topics

Each folder is a topic with its own notes and solved exercises.

- [Arrays & Stacks](https://github.com/estebanmpa/algorithms-and-data-structures/tree/main/arrays-stacks)
- [Binary Search](https://github.com/estebanmpa/algorithms-and-data-structures/tree/main/binary-search)
- [Linked Lists](https://github.com/estebanmpa/algorithms-and-data-structures/tree/main/linked-lists)
- [Recursion](https://github.com/estebanmpa/algorithms-and-data-structures/tree/main/recursion)
- [Sorting](https://github.com/estebanmpa/algorithms-and-data-structures/tree/main/sorting)
