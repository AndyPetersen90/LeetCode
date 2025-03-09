function minimumRecolors(blocks: string, k: number): number {
  let consecutiveBlacks = 0;
  let maxConsecutiveBlacks = 0;

  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i] === "B") {
      consecutiveBlacks++;
      maxConsecutiveBlacks = Math.max(maxConsecutiveBlacks, consecutiveBlacks);
    } else {
      consecutiveBlacks = 0;
    }
  }

  if (maxConsecutiveBlacks >= k) return 0;

  if (k === blocks.length) {
    let whites = 0;
    for (let i = 0; i < blocks.length; i++) {
      if (blocks[i] === "W") whites++;
    }
    return whites;
  }

  let whites = 0;
  for (let i = 0; i < k; i++) {
    if (blocks[i] === "W") whites++;
  }

  let minWhites = whites;

  for (let i = k; i < blocks.length; i++) {
    if (blocks[i - k] === "W") whites--;
    if (blocks[i] === "W") whites++;
    minWhites = Math.min(minWhites, whites);
  }

  return minWhites;
}

// Example 1:
console.log(minimumRecolors("WBBWWBBWBW", 7));
// Input: blocks = "WBBWWBBWBW", k = 7
// Output: 3

// Example 2:
console.log(minimumRecolors("WBWBBBW", 2));
// Input: blocks = "WBWBBBW", k = 2
// Output: 0

console.log(minimumRecolors("BWWWBB", 6));

console.log(minimumRecolors("WWBBBWBBBBBWWBWWWB", 16));

// Test cases covering constraint boundaries
console.log("Constraint boundary cases:");
console.log(minimumRecolors("W", 1)); // n=1, k=1
console.log(minimumRecolors("B", 1)); // n=1, k=1
console.log(minimumRecolors("WWWWW", 1)); // k=1
console.log(minimumRecolors("WWWWW", 5)); // k=n
console.log(minimumRecolors("BBBBB", 5)); // k=n

/**
 * Original code, the above is the optimized version from Cursor
 * 
 * function minimumRecolors(blocks: string, k: number): number {
  const whitePositions: number[] = [];

  for (let i = 0; i < blocks.length; i++) {
    if (blocks[i] === "W") {
      if (whitePositions.length === 0) {
        if (i >= k) return 0;
      } else if (i - whitePositions[whitePositions.length - 1] - 1 >= k) {
        return 0;
      }
      whitePositions.push(i);
    }
  }

  if (whitePositions.length === 0) return 0;

  if (k === blocks.length) {
    return whitePositions.length;
  }

  if (whitePositions.length > 0 && blocks.length - whitePositions[whitePositions.length - 1] - 1 >= k) return 0;

  let minOperations = blocks.length;

  // Try each position as the start of our k-length window
  for (let i = 0; i <= blocks.length - k; i++) {
    let whitesInWindow = 0;
    // Count whites that fall within this k-length window
    for (let j = 0; j < whitePositions.length; j++) {
      if (whitePositions[j] >= i && whitePositions[j] < i + k) {
        whitesInWindow++;
      }
    }
    minOperations = Math.min(minOperations, whitesInWindow);
  }

  return minOperations;
}
 */
