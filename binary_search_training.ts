/**
 * # Binary Search Training File
 *
 * ## Overview
 * Binary search is an efficient algorithm for finding an item from a sorted list of items.
 * It works by repeatedly dividing the search interval in half.
 * If the value of the search key is less than the item in the middle of the interval,
 * narrow the interval to the lower half. Otherwise, narrow it to the upper half.
 * Repeatedly check until the value is found or the interval is empty.
 *
 * ## Visual Explanation
 * Consider the sorted array: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 * To find the target value 7:
 * 1. Start with left = 0, right = 9 (length - 1).
 * 2. Calculate mid = (0 + 9) / 2 = 4 (value is 5).
 * 3. Since 7 > 5, move left to mid + 1 = 5.
 * 4. Calculate mid = (5 + 9) / 2 = 7 (value is 8).
 * 5. Since 7 < 8, move right to mid - 1 = 6.
 * 6. Calculate mid = (5 + 6) / 2 = 5 (value is 6).
 * 7. Since 7 > 6, move left to mid + 1 = 6.
 * 8. Calculate mid = (6 + 6) / 2 = 6 (value is 7).
 * 9. Target found at index 6.
 *
 * ## Time Complexity
 * - **Best Case**: O(1) - The target is found at the first middle check.
 * - **Average Case**: O(log n) - The search space is halved with each iteration.
 * - **Worst Case**: O(log n) - The search continues until the interval is empty.
 *
 * ## Space Complexity
 * - O(1) for iterative implementation.
 * - O(log n) for recursive implementation due to call stack.
 *
 * ## Requirements
 * - The array must be sorted before applying binary search.
 *
 * ## Iterative Implementation
 */

function binarySearchIterative(arr: number[], target: number): number {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Target found
    } else if (arr[mid] < target) {
      left = mid + 1; // Search in the right half
    } else {
      right = mid - 1; // Search in the left half
    }
  }

  return -1; // Target not found
}

/**
 * ## Recursive Implementation
 */

function binarySearchRecursive(arr: number[], target: number, left: number, right: number): number {
  if (left > right) {
    return -1; // Base case: target not found
  }

  const mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid; // Target found
  } else if (arr[mid] < target) {
    return binarySearchRecursive(arr, target, mid + 1, right); // Search in the right half
  } else {
    return binarySearchRecursive(arr, target, left, mid - 1); // Search in the left half
  }
}

/**
 * ## Common Use Cases
 * - Searching for an element in a sorted array.
 * - Finding the first or last occurrence of a target in a sorted array with duplicates.
 * - Finding the square root of a number.
 * - Searching in a rotated sorted array.
 * - Finding the peak element in an array.
 *
 * ## Edge Cases
 * - Searching for a target that does not exist in the array.
 * - Handling arrays with duplicate values.
 * - Searching in an empty array.
 *
 * ## Example Usage
 */

const sortedArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const target = 7;

const iterativeResult = binarySearchIterative(sortedArray, target);
console.log(`Iterative: Target ${target} found at index: ${iterativeResult}`);

const recursiveResult = binarySearchRecursive(sortedArray, target, 0, sortedArray.length - 1);
console.log(`Recursive: Target ${target} found at index: ${recursiveResult}`);

/**
 * ## Practice Problems
 * - LeetCode Problem 704: Binary Search
 * - LeetCode Problem 33: Search in Rotated Sorted Array
 * - LeetCode Problem 69: Sqrt(x)
 * - LeetCode Problem 278: First Bad Version
 *
 * ## Conclusion
 * Binary search is a powerful algorithm for searching in sorted arrays.
 * Understanding how to implement it both iteratively and recursively is essential for efficient problem-solving in computer science.
 * Practice using binary search in various problems to become proficient.
 */
