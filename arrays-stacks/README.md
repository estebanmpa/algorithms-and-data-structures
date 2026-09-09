# Arrays & Stacks

Notes and exercises about arrays (static and dynamic) and stacks.

## Table of contents

- [Arrays](#arrays)
  - [Static arrays](#static-arrays)
  - [Dynamic arrays](#dynamic-arrays)
- [Stacks](#stacks)
  - [Push](#push)
  - [Pop](#pop)
  - [Peek](#peek)
- [Exercises](#exercises)
- [Other topics](#other-topics)

## Arrays

An array is a contiguous block of data. The elements are always stored one right
after another in RAM, which is what makes indexing so fast: from the address of
the first element and the index, the computer can jump straight to any element.

### Static arrays

They are called static because the size of the array cannot change once it is
declared. Once the array is full it cannot store additional elements. Some
dynamically typed languages such as Python and JavaScript do not have static
arrays to begin with.

- **Read by index** — instant. The first value is at index `0`, and any index maps
  directly to a memory address. `O(1)`.
- **Append / remove at the end** — also instant, as long as there is free space.
  `O(1)`.
- **Insert in the middle** — every element after the insertion point has to be
  *shifted* one position to the right. `O(n)`.
- **Remove from the middle** — every element after the gap has to be shifted one
  position to the left. `O(n)`.

### Dynamic arrays

These are the more common and useful ones, and the default array type in Python
and JavaScript.

What makes them dynamic is that you can keep adding elements even when there is no
allocated space left. When that happens the array:

1. allocates a new array, usually **double** the current size,
2. copies every element into the new array,
3. adds the new element,
4. frees the old array and tells the operating system it is no longer used.

The size is doubled (instead of grown by one) so that this expensive copy does not
happen on every insert. Spread across many inserts the cost averages out to `O(1)`
per operation — this is called **amortized complexity**. Only the resize itself is
`O(n)`.

## Stacks

A stack is a data structure that supports a subset of the operations of a dynamic
array. With a stack you may only add and remove elements from **one end** of the
array, referred to as the *top* of the stack.

Think of a stack of plates: you can take the plate from the top or add a plate to
the top, but you cannot touch a plate in the middle. A stack works on a **LIFO**
(Last In, First Out) basis — the last element added is the first one to come out.
A common use case is reversing a sequence.

The stack supports three operations: `push`, `pop` and `peek`.

### Push

Adds an element to the top of the stack — in dynamic array terms, appending to the
end. `O(1)`.

### Pop

Removes and returns the element on top of the stack — reading and removing the
last element of the array. `O(1)`.

### Peek

Returns the top element without removing it. `O(1)`.

## Exercises

- [baseball-game.js](baseball-game.js)
- [max-consecutive-ones.js](max-consecutive-ones.js)
- [min-stack.js](min-stack.js)
- [remove-element-in-place.js](remove-element-in-place.js)
- [replace-elements-with-greatest-element-on-right-side.js](replace-elements-with-greatest-element-on-right-side.js)
- [valid-parentheses.js](valid-parentheses.js)

## Other topics

- [Back to the main index](https://github.com/estebanmpa/algorithms-and-data-structures)
- [Binary Search](https://github.com/estebanmpa/algorithms-and-data-structures/tree/main/binary-search)
- [Linked Lists](https://github.com/estebanmpa/algorithms-and-data-structures/tree/main/linked-lists)
- [Recursion](https://github.com/estebanmpa/algorithms-and-data-structures/tree/main/recursion)
- [Sorting](https://github.com/estebanmpa/algorithms-and-data-structures/tree/main/sorting)
