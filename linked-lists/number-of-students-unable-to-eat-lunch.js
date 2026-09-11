/*
The school cafeteria offers circular and square sandwiches at lunch break, referred to by numbers 0 and 1 respectively. All students stand in a queue. Each student either prefers square or circular sandwiches.

The number of sandwiches in the cafeteria is equal to the number of students. The sandwiches are placed in a stack. At each step:

    If the student at the front of the queue prefers the sandwich on the top of the stack, they will take it and leave the queue.
    Otherwise, they will leave it and go to the queue's end.

This continues until none of the queue students want to take the top sandwich and are thus unable to eat.

You are given two integer arrays students and sandwiches where sandwiches[i] is the type of the i-th sandwich in the stack (i = 0 is the top of the stack) and students[j] is the preference of the j-th student in the initial queue (j = 0 is the front of the queue). Return the number of students that are unable to eat.

Example 1:

Input: students = [1,1,0,0], sandwiches = [0,1,0,1]

Output: 0

Explanation:

    Front student leaves the top sandwich and returns to the end of the line making students = [1,0,0,1].
    Front student leaves the top sandwich and returns to the end of the line making students = [0,0,1,1].
    Front student takes the top sandwich and leaves the line making students = [0,1,1] and sandwiches = [1,0,1].
    Front student leaves the top sandwich and returns to the end of the line making students = [1,1,0].
    Front student takes the top sandwich and leaves the line making students = [1,0] and sandwiches = [0,1].
    Front student leaves the top sandwich and returns to the end of the line making students = [0,1].
    Front student takes the top sandwich and leaves the line making students = [1] and sandwiches = [1].
    Front student takes the top sandwich and leaves the line making students = [] and sandwiches = [].
    Hence all students are able to eat.

Example 2:

Input: students = [1,1,1,0,0,1], sandwiches = [1,0,0,0,1,1]

Output: 3

Constraints:

    1 <= students.length, sandwiches.length <= 100
    students.length == sandwiches.length
    sandwiches[i] is 0 or 1.
    students[j] is 0 or 1.

*/
class Queue {
    constructor() {
        this.items = {};
        this.head = 0;
        this.tail = 0;
    }

    // Add an element to the back of the queue
    enqueue(element) {
        this.items[this.tail] = element;
        this.tail++;
    }

    // Remove and return the front element of the queue
    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        const item = this.items[this.head];
        delete this.items[this.head];
        this.head++;
        return item;
    }

    // Look at the front element without removing it
    peek() {
        if (this.isEmpty()) {
            return null;
        }
        return this.items[this.head];
    }

    // Check if the queue is empty
    isEmpty() {
        return this.tail - this.head === 0;
    }

    // Get the current size of the queue
    size() {
        return this.tail - this.head;
    }

    // Clear all elements from the queue
    clear() {
        this.items = {};
        this.head = 0;
        this.tail = 0;
    }
}

class Solution {
    /**
     * @param {number[]} students
     * @param {number[]} sandwiches
     * @return {number}
     */
    countStudents(students, sandwiches) {
        const studentQueue = new Queue();
        const sandwichStack = [];

        // Initialize the student queue
        for (const student of students) {
            studentQueue.enqueue(student);
        }

        // Initialize the sandwich stack
        for (const sandwich of sandwiches) {
            sandwichStack.push(sandwich);
        }

        for (let i = 0; i < sandwiches.length; i++) {
            let rotations = 0;
            const currentSandwich = sandwichStack[i];
            let tookSandwich = false;

            while (rotations < studentQueue.size()) {
                const currentStudent = studentQueue.peek();

                if (currentStudent === currentSandwich) {
                    // Student takes the sandwich and leaves the queue
                    studentQueue.dequeue();
                    tookSandwich = true;
                    break;
                } else {
                    // Student goes to the end of the queue
                    studentQueue.enqueue(studentQueue.dequeue());
                    rotations++;
                }
            }

            // If we rotated through all students and no one took the sandwich, break the loop
            if (!tookSandwich) {
                break;
            }
        }

        // The number of students unable to eat is the size of the remaining queue
        const unableToEatCount = studentQueue.size();

        return unableToEatCount;
    }
}

const solution = new Solution()
console.log(solution.countStudents([1, 1, 0, 0], [0, 1, 0, 1])) // Output: 0

const solution2 = new Solution()
console.log(solution2.countStudents([1, 1, 1, 0, 0, 1], [1, 0, 0, 0, 1, 1])) // Output: 3
