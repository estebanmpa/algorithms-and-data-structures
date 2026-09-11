# Sorting

Notes and exercises about common sorting algorithms.

## Table of contents

- [Insertion sort](#insertion-sort)
  - [Time complexity](#time-complexity)
  - [Stability](#stability)
  - [Concept](#concept)
- [Merge sort](#merge-sort)
  - [Time complexity](#time-complexity-1)
  - [Stability](#stability-1)
- [Quick sort](#quick-sort)
  - [Time complexity](#time-complexity-2)
- [Bucket sort](#bucket-sort)
  - [Concept](#concept-1)
  - [Time complexity](#time-complexity-3)
  - [Stability](#stability-2)
- [Exercises](#exercises)
- [Other topics](#other-topics)

## Insertion sort

Insertion sort is one of many sorting algorithms used to sort data in different
data structures.

Each sorting algorithm has its own advantages and disadvantages. Insertion sort is
no exception. It is a simple algorithm that is easy to implement and understand.
However, it is not the most efficient sorting algorithm when it comes to large data
sets.

### Time complexity

- **Best case:** `O(n)` — if the array is already sorted, each element only needs
  one comparison with its left neighbor and no shifting.
- **Average / worst case:** `O(n^2)` — for each of the `n` elements we may have to
  shift it across the entire sorted portion built so far.
- **Space:** `O(1)` — the array is sorted in place, with no extra data structures.

### Stability

Stability in a sorting algorithm refers to the relative order of the elements after
the sorting is done. Take `[7, 3, 7]` for example. There are two 7s, one at index 0
and the other at index 2. We know that the relative order of these two 7s will stay
the same, since 3 will swap with the 7 at index 0 and then the while loop will never
run again.

This is called a stable sorting algorithm. Insertion sort is stable, meaning that
it is guaranteed that the relative order will remain the same. Not all sorting
algorithms are stable, as we will see later on.

### Concept

Given the array `[2, 3, 4, 1, 6]`, our goal is to sort the array so that it looks
like `[1, 2, 3, 4, 6]`.

Insertion sort accomplishes this by sorting portions of the array at a time.

Consider this: if we had an array of size 1, it would already be sorted, because
there is no other element to compare it to. As such, we assume that the first
element is sorted, since we treat it as its own subarray.

The next subarray will be of size 2, starting from the beginning. In this example
that is `[2, 3, ...]`. To sort only these two elements we need to compare them. For
an array of size 2 this is trivial. However, once we get to the full array of size
5, there is no way to keep track of where each element is without using pointers.
So let's take two pointers, `i` and `j`.

1. The `i` pointer points at the element we are currently inserting into the sorted
   portion of the array.
2. The `j` pointer starts off one index to the left of `i`.
3. Our goal is to find the position where `arr[i]` should be inserted into the
   sorted portion of the array.
4. We continue swapping it with `arr[j]` until we find the correct position.
5. After each swap we shift `j` to the left by 1.
6. We stop once the element is greater than or equal to the element to its left.

## Merge sort

Merge sort is an extremely common sorting algorithm that is used by many
programming languages as part of their standard library.

The concept behind it is very simple: keep splitting the array into halves until
the subarrays hit a size of one, then recursively sort the subarrays by merging two
subarrays at a time. The final array will be fully sorted.

This is a technique known as divide and conquer. We divide the problem into smaller
subproblems, solve them, and then combine the solutions to get the final answer.

### Time complexity

- **Time:** `O(n log n)` in every case — the array is split in half `log n`
  times, and merging all the pieces back together at each level costs `O(n)`.
- **Space:** `O(n)` — merging needs a temporary array to hold the merged
  results, so unlike insertion sort, merge sort is not in-place.

### Stability

Merge sort is a stable algorithm because if we have a pair of duplicates, say `7`,
the `7` in the left subarray will always end up in the merged array first, followed
by the `7` in the right subarray. This is because when we compare the `i`th element
in the left subarray to the `j`th element in the right subarray for equality, we
pick the one in the left subarray, maintaining the relative order.

## Quick sort

The idea behind quicksort is to pick an index, called the pivot. We then partition
the array such that every value to the left is less than or equal to the pivot, and
every value to the right is greater than the pivot.

There are several ways to pick a pivot value. Some of the common ways are:

1. Pick the first index.
2. Pick the last index.
3. Pick the median (pick the first, last and middle value, find their median, and
   perform the split at the median).
4. Pick a random pivot.

Ideally we can pick a pivot that divides the array into two roughly equal halves.
This results in the most efficient sorting scenario.

1. Once we pick a pivot, we partition the array such that all elements less than or
   equal to the pivot are on the left and the rest are on the right.
2. We then recursively run quicksort on the left and right halves until we hit the
   base case, which is an array of size 1.

Unlike merge sort, there is no need to merge the two halves, because the
partitioning step itself is enough to sort the array.

In some sense, quick sort is the opposite of merge sort. Merge sort has a simple
recursive step, but the complexity is in handling the merging of the two halves.
Quick sort has a complex recursive step, but the complexity is in the partitioning
step.

### Time complexity

- **Average case:** `O(n log n)` — with a reasonably balanced pivot, the array is
  split roughly in half `log n` times, and partitioning each level costs `O(n)`.
- **Worst case:** `O(n^2)` — a poor pivot choice (e.g. always picking the first
  index on an already-sorted array) can produce partitions of size `1` and
  `n - 1`, which degenerates into `n` nested passes.
- **Space:** `O(log n)` on average for the recursion stack — quicksort sorts in
  place, so it doesn't need an auxiliary array like merge sort does.

## Bucket sort

It is not as popular or widely used as the previous algorithms we have covered.
Bucket sort works well when the dataset to be sorted has values within a specific
range.

### Concept

Imagine we have an array of size 6 that contains values within an inclusive range
of 0-2. The idea behind bucket sort is to create a "bucket" for each one of the
numbers and map them to their respective buckets.

There will be a bucket for 0, 1 and 2. This bucket — which is just a position in a
specified array — will contain the frequency of each one of the values within the
range. For the sake of this example, we only have three values, so we will have
three buckets.

> The term "bucket" really just translates into a position in an array where we
> will map these frequencies.

Once each one of the buckets is filled with the frequency of each one of the
values, we overwrite all the values in the original array so that they end up in
sorted order.

### Time complexity

- **Time:** `O(n + k)`, where `k` is the number of buckets — distributing the
  `n` elements into buckets is `O(n)`, and rebuilding the array from the `k`
  buckets is `O(k)`.
- **Worst case:** `O(n^2)` if the values aren't evenly spread and most of them
  land in the same bucket, since that bucket then needs its own internal sort.
- **Space:** `O(n + k)` for the buckets themselves.

### Stability

Since we are overwriting the original array, there is no way to preserve the
relative order of the values. There is no swapping that takes place either. Hence,
it stays unstable.

## Exercises

- [insertion-sorting.js](insertion-sorting.js)
- [k-closest-points-to-origin.js](k-closest-points-to-origin.js)
- [merge-k-sorted-linked-lists.js](merge-k-sorted-linked-lists.js)
- [merge-sorting.js](merge-sorting.js)
- [merge-two-sorted-array.js](merge-two-sorted-array.js)
- [quick-sort.js](quick-sort.js)
- [sort-colors.js](sort-colors.js)

## Other topics

- [Back to the main index](../README.md)
- [Arrays & Stacks](../arrays-stacks/README.md)
- [Binary Search](../binary-search/) *(WIP — no notes yet)*
- [Linked Lists](../linked-lists/README.md)
- [Recursion](../recursion/README.md)
