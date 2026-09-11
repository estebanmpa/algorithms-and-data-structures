# Linked Lists

Notes and exercises about singly linked lists, doubly linked lists and queues.

## Table of contents

- [What is a linked list?](#what-is-a-linked-list)
  - [Time complexity](#time-complexity)
- [Doubly linked lists](#doubly-linked-lists)
  - [Time complexity](#time-complexity-1)
- [Queues](#queues)
  - [Implementation example](#implementation-example)
- [Exercises](#exercises)
- [Other topics](#other-topics)

## What is a linked list?

A linked list is another data structure that is like an array in the sense that it
stores elements in an ordered sequence. But there are also some key differences.

The main difference is that linked lists are made up of objects called `ListNode`s.
This object contains two attributes:

- **value** — stores the value of the node. It could be a character, an integer, etc.
- **next** — stores the reference to the next node in the linked list.

An advantage that linked lists have over arrays is that inserting a new element can
be performed in `O(1)` time, even if we insert in the middle. We do not have to
shift any elements since there is no requirement for the elements to be stored
contiguously in memory.

Deleting a node from a singly linked list also takes `O(1)`, since we can
accomplish this by updating a single pointer.

### Time complexity

Unlike an array, nodes are not stored at contiguous, indexable addresses — the
only way to reach the k-th node is to start at the head and follow `next` pointers
one at a time. That's why access and search are `O(n)`.

| Operation | Big-O time complexity | Note |
| --- | --- | --- |
| Access | `O(n)` | |
| Search | `O(n)` | |
| Insertion | `O(1)`* | Assuming you already have a reference to the node at the desired position |
| Deletion | `O(1)`* | Assuming you already have a reference to the node at the desired position |

## Doubly linked lists

As the name implies, each node now has two pointers. In addition to the `next`
pointer, we have a `prev` pointer which points to the previous node. If the `prev`
pointer points to `null`, it is an indication that we are at the head of the linked
list.

The main advantage over a singly linked list is that a node can be unlinked using
only a reference to itself. In a singly linked list, deleting a node in `O(1)`
requires a reference to its *predecessor*, since there's no way to go backwards —
the `prev` pointer removes that requirement, and it also makes backward traversal
possible.

### Time complexity

| Operation | Big-O time complexity | Note |
| --- | --- | --- |
| Access | `O(n)` | |
| Search | `O(n)` | |
| Insertion | `O(1)`* | Assuming you have a reference to the node at the desired position |
| Deletion | `O(1)`* | Assuming you have a reference to the node at the desired position |

## Queues

Another data structure that overlaps with arrays is a queue. Queues are also
similar to stacks, except they follow a FIFO approach (First In, First Out).

A real world example would be a line at the bank: the first person added to the
line (queue) is the first person to be served.

The easiest way to implement a queue is using a linked list.

> It is also possible to implement a queue using a dynamic array, but it is more
> involved. To get the same time complexity as a linked list, you would need to use
> a circular array and perform some additional operations.

The two main operations that queues support are `enqueue` and `dequeue`.

### Implementation example

This mirrors the linked-list approach described above: `head` points at the front
node (the next one to leave), `tail` points at the node most recently added, and
`enqueue` / `dequeue` only ever touch those two ends — no shifting, no
reindexing.

```js
class QueueNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // Add an element to the back of the queue
  enqueue(value) {
    const node = new QueueNode(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      this.tail.next = node;
    }
    this.tail = node;
    this.length++;
  }

  // Remove and return the front element of the queue
  dequeue() {
    if (this.isEmpty()) {
      return null;
    }
    const node = this.head;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = null;
    }
    this.length--;
    return node.value;
  }

  // Look at the front element without removing it
  peek() {
    return this.isEmpty() ? null : this.head.value;
  }

  // Check if the queue is empty
  isEmpty() {
    return this.length === 0;
  }

  // Get the current size of the queue
  size() {
    return this.length;
  }
}
```

## Exercises

- [merge-two-sorted-lists.js](merge-two-sorted-lists.js)
- [number-of-students-unable-to-eat-lunch.js](number-of-students-unable-to-eat-lunch.js)
- [reverse-linked-list.js](reverse-linked-list.js)

## Other topics

- [Back to the main index](../README.md)
- [Arrays & Stacks](../arrays-stacks/README.md)
- [Binary Search](../binary-search/) *(WIP — no notes yet)*
- [Recursion](../recursion/README.md)
- [Sorting](../sorting/README.md)
