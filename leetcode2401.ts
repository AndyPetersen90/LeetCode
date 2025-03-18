function longestNiceSubarray(nums: number[]): number {
  if (nums.length === 1) return 1;
  let start = 0;
  let maxLength = 1;

  for (let end = 0; end < nums.length; end++) {
    for (let i = start; i < end; i++) {
      if ((nums[i] & nums[end]) !== 0) {
        start = i + 1;
        break;
      }
    }
    maxLength = Math.max(maxLength, end - start + 1);
  }
  return maxLength;
}

console.log(longestNiceSubarray([1, 3, 8, 48, 10]));
console.log(longestNiceSubarray([3, 1, 5, 11, 13]));
console.log(
  longestNiceSubarray([
    178830999, 19325904, 844110858, 806734874, 280746028, 64, 256, 33554432, 882197187, 104359873, 453049214, 820924081, 624788281, 710612132,
    839991691,
  ])
);

/**
 You are given an array nums consisting of positive integers.

We call a subarray of nums nice if the bitwise AND of every pair of elements that are in different positions in the subarray is equal to 0.

Return the length of the longest nice subarray.

A subarray is a contiguous part of an array.

Note that subarrays of length 1 are always considered nice.

 

Example 1:

Input: nums = [1,3,8,48,10]
Output: 3
Explanation: The longest nice subarray is [3,8,48]. This subarray satisfies the conditions:
- 3 AND 8 = 0.
- 3 AND 48 = 0.
- 8 AND 48 = 0.
It can be proven that no longer nice subarray can be obtained, so we return 3.
Example 2:

Input: nums = [3,1,5,11,13]
Output: 1
Explanation: The length of the longest nice subarray is 1. Any subarray of length 1 can be chosen.
 
 */
