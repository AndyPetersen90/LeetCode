function maxCount(banned: number[], n: number, maxSum: number): number {
  if (maxSum === 0) {
    return 0;
  }
  const allowedNums: number[] = [];
  for (let i = 1; i <= n; i++) {
    if (!banned.includes(i)) {
      allowedNums.push(i);
    }
  }
  let maxCount = 0;
  let sum = 0;
  for (let i = 0; i < allowedNums.length; i++) {
    sum += allowedNums[i];
    if (sum > maxSum) {
      break;
    }
    maxCount++;
  }
  return maxCount;
}

// Example 1:
console.log(maxCount([1, 6, 5], 5, 6));
// Output: 2
// Explanation: You can choose the integers 2 and 4.
// 2 and 4 are from the range [1, 5], both did not appear in banned, and their sum is 6, which did not exceed maxSum.

// Example 2:
console.log(maxCount([1, 2, 3, 4, 5, 6, 7], 8, 1));
// Output: 0
// Explanation: You cannot choose any integer while following the mentioned conditions.

// Example 3:
console.log(maxCount([11], 7, 50));
// Output: 7
// Explanation: You can choose the integers 1, 2, 3, 4, 5, 6, and 7.
// They are from the range [1, 7], all did not appear in banned, and their sum is 28, which did not exceed maxSum.
