/**
 * Sliding Windows - A Comprehensive Guide
 *
 * A sliding window is an algorithmic technique that processes sequential data by maintaining
 * a "window" that slides through the data. This window can be:
 * - Fixed size (like our minimumRecolors problem)
 * - Variable size (expands/contracts based on conditions)
 *
 * Key Characteristics:
 * 1. Sequential access pattern
 * 2. Maintains state for current window
 * 3. O(n) time complexity in most cases
 * 4. Usually O(1) space complexity
 */

// Example 1: Fixed Window Size
// Find maximum sum of k consecutive elements
function maxSumFixedWindow(arr: number[], k: number): number {
  if (k > arr.length) return 0;

  // Step 1: Calculate initial window sum
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  // Step 2: Slide window and track maximum
  let maxSum = windowSum;
  for (let i = k; i < arr.length; i++) {
    // Remove leftmost element
    windowSum -= arr[i - k];
    // Add new element
    windowSum += arr[i];
    // Update maximum
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

// Example 2: Variable Window Size
// Find longest subarray with sum <= target
function longestSubarrayWithSum(arr: number[], target: number): number {
  let start = 0;
  let currentSum = 0;
  let maxLength = 0;

  for (let end = 0; end < arr.length; end++) {
    // Expand window
    currentSum += arr[end];

    // Contract window if sum exceeds target
    while (currentSum > target && start <= end) {
      currentSum -= arr[start];
      start++;
    }

    // Update maximum length if current window is valid
    if (currentSum <= target) {
      maxLength = Math.max(maxLength, end - start + 1);
    }
  }

  return maxLength;
}

// Example 3: String Processing (similar to minimumRecolors)
// Find minimum window containing all vowels
function minWindowWithVowels(s: string): number {
  const isVowel = (char: string) => "aeiou".includes(char.toLowerCase());

  // Count vowels in first possible window
  let vowelCount = 0;
  let minWindow = s.length + 1;
  let start = 0;

  // Expand window until we have all vowels
  for (let end = 0; end < s.length; end++) {
    if (isVowel(s[end])) {
      vowelCount++;
    }

    // Try to minimize window when we have enough vowels
    while (vowelCount >= 5) {
      minWindow = Math.min(minWindow, end - start + 1);
      if (isVowel(s[start])) {
        vowelCount--;
      }
      start++;
    }
  }

  return minWindow === s.length + 1 ? -1 : minWindow;
}

// Example 4: Two Pointers with Window
// Find number of subarrays with product less than target
function numSubarrayProductLessThanK(nums: number[], k: number): number {
  if (k <= 1) return 0;

  let count = 0;
  let product = 1;
  let left = 0;

  for (let right = 0; right < nums.length; right++) {
    product *= nums[right];

    while (product >= k) {
      product /= nums[left];
      left++;
    }

    count += right - left + 1;
  }

  return count;
}

// Testing our examples
console.log("Example 1: Fixed Window Size");
console.log(maxSumFixedWindow([1, 4, 2, 10, 2, 3, 1, 0, 20], 4)); // 24

console.log("\nExample 2: Variable Window Size");
console.log(longestSubarrayWithSum([1, 2, 3, 4, 5], 9)); // 4

console.log("\nExample 3: String Processing");
console.log(minWindowWithVowels("aeiouaeiou")); // 5
console.log(minWindowWithVowels("leetcode")); // -1

console.log("\nExample 4: Two Pointers with Window");
console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100)); // 8

/**
 * Common Sliding Window Patterns:
 *
 * 1. Fixed Size Window:
 *    - Initialize window with first k elements
 *    - Slide window by removing leftmost and adding rightmost
 *    - Example: Our minimumRecolors problem
 *
 * 2. Variable Size Window:
 *    - Expand window until condition is violated
 *    - Contract window until condition is satisfied
 *    - Example: Longest subarray with sum <= target
 *
 * 3. Two Pointers with Window:
 *    - Use left and right pointers to define window
 *    - Move pointers based on conditions
 *    - Example: Subarrays with product < k
 *
 * When to Use Sliding Windows:
 * 1. Sequential data (arrays, strings)
 * 2. Need to process consecutive elements
 * 3. Looking for optimal subarray/substring
 * 4. Need O(n) time complexity
 *
 * Tips for Implementation:
 * 1. Always handle edge cases first
 * 2. Be clear about window boundaries (inclusive/exclusive)
 * 3. Track necessary state within window
 * 4. Consider what happens at window edges
 * 5. Test with small examples first
 */
