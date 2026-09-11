/*
You are given an 2-D array points where points[i] = [xi, yi] represents the coordinates of a point on an X-Y axis plane. You are also given an integer k.

Return the k closest points to the origin (0, 0).

The distance between two points is defined as the Euclidean distance (sqrt((x1 - x2)^2 + (y1 - y2)^2)).

You may return the answer in any order. The answer is guaranteed to be unique(except for the order in which the points are returned.)

Example 1:

Input: points = [[0,2],[2,2]], k = 1

Output: [[0,2]]

Explanation : The distance between (0, 2) and the origin (0, 0) is 2. The distance between (2, 2) and the origin is sqrt(2^2 + 2^2) = 2.82842. So the closest point to the origin is (0, 2).

Example 2:

Input: points = [[0,2],[2,0],[2,2]], k = 2

Output: [[0,2],[2,0]]

Explanation: The output [2,0],[0,2] would also be accepted.

Constraints:

    1 <= k <= points.length <= 1000
    -100 <= points[i][0], points[i][1] <= 100
*/
class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        function distance(x1, y1, x2, y2) {
            return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2);
        }

        // Measure distance for all points
        let distances = {}
        points.forEach(coord => {
            const x1 = coord[0]
            const y1 = coord[1]
            distances[coord] = distance(x1, y1, 0, 0)
        })

        // Sort distances object
        const sorted = Object.entries(distances).sort((a, b) => a[1] > b[1] ? 1 : -1)

        points = sorted.map(element => element[0].split(',').map(Number))

        return points.slice(0, k)
    }
}


const solution = new Solution()
//console.log(solution.kClosest([[0, 2], [2, 0], [2, 2]], 2))
console.log(solution.kClosest([[1, 3], [-2, 2]], 1))