# Recursion

Notes and exercises about recursion.

## Table of contents

- [What is recursion?](#what-is-recursion)
- [Time and space complexity](#time-and-space-complexity)
  - [Time: O(n)](#time-on)
  - [Space: O(n)](#space-on)
- [Exercises](#exercises)
- [Other topics](#other-topics)

## What is recursion?

Recursion is when a function calls itself, usually with a different input. This is
known as a recursive function.

Recursive functions can be thought of as functions that break down a problem into
smaller sub-problems and solve them in reverse order. It's usually possible to
convert a recursive function into an iterative one, and vice versa.

> For some problems an iterative solution can be much simpler to implement than a
> recursive one, and vice versa.

Recursive functions have two parts:

1. The base case.
2. The recursive case.

The concept of recursion applies to the real world as well. Consider a box that
contains another box, which contains another box, and so on. This is a recursive
structure.

There are two types of recursion:

- **One-branch (linear) recursion** — each call makes at most one further
  recursive call, so the calls form a single chain. `factorial(n)` is a classic
  example: `factorial(n) = n * factorial(n - 1)`.
- **Multi-branch (tree) recursion** — a call makes more than one recursive call,
  so the calls branch out like a tree. Counting the ways to climb `n` stairs by
  taking 1 or 2 steps at a time is an example: `ways(n) = ways(n - 1) + ways(n - 2)`.

Multi-branch recursion tends to recompute the same sub-problem many times (e.g.
`ways(3)` gets solved over and over while solving `ways(6)`), which is why it
often benefits from memoization or a rewrite into an iterative solution.

## Time and space complexity

### Time: O(n)

For one-branch recursion, `n` calls are being made to the function (e.g.
`factorial`), where each individual call does `O(1)` work, making the total time
complexity `O(n)`.

> Multi-branch recursion without memoization is usually much more expensive. The
> naive `ways(n) = ways(n - 1) + ways(n - 2)` solution above makes roughly two
> calls per call, which results in `O(2^n)` time — exponential, not linear.

### Space: O(n)

While we aren't using any data structures, recursion operates off of an implicit
stack, known as the function call stack. That is how we are able to return from one
function call to the previous one. Since there are `n` recursive calls, there will
be `n` function calls placed on the stack, which results in `O(n)` space.

## Exercises

- [climbing-stairs.js](climbing-stairs.js)
- [factorial.js](factorial.js)

## Other topics

- [Back to the main index](../README.md)
- [Arrays & Stacks](../arrays-stacks/README.md)
- [Binary Search](../binary-search/) *(WIP — no notes yet)*
- [Linked Lists](../linked-lists/README.md)
- [Sorting](../sorting/README.md)
