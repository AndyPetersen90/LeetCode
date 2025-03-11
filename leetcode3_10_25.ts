// ORIGINAL PASSING SOLUTION
// function numberOfSubstrings(s: string): number {
//   const counts = new Map<string, number>();
//   let result = 0;
//   let left = 0;

//   for (let right = 0; right < s.length; right++) {
//     counts.set(s[right], (counts.get(s[right]) || 0) + 1);

//     while (counts.has("a") && counts.has("b") && counts.has("c")) {
//       result += s.length - right;

//       const leftChar = s[left];
//       counts.set(leftChar, counts.get(leftChar)! - 1);
//       if (counts.get(leftChar) === 0) {
//         counts.delete(leftChar);
//       }
//       left++;
//     }
//   }

//   return result;
// }

// Most optimized version using last occurrence tracking
function numberOfSubstrings(s: string): number {
  let count = 0;
  let left = 0;
  const freq = new Map<string, number>();

  for (let right = 0; right < s.length; right++) {
    // Add current character to frequency map
    freq.set(s[right], (freq.get(s[right]) || 0) + 1);

    // While we have all three characters
    while (freq.get("a") && freq.get("b") && freq.get("c")) {
      // All substrings from current window to end are valid
      count += s.length - right;

      // Remove leftmost character
      const leftChar = s[left];
      freq.set(leftChar, freq.get(leftChar)! - 1);
      left++;
    }
  }

  return count;
}

// Test cases
console.log(numberOfSubstrings("abcabc")); // Expected: 10
console.log(numberOfSubstrings("aaacb")); // Expected: 3
console.log(numberOfSubstrings("abc")); // Expected: 1

/**
 * 
1358. Number of Substrings Containing All Three Characters
Given a string s consisting only of characters a, b and c.

Return the number of substrings containing at least one occurrence of all these characters a, b and c.

 

Example 1:

Input: s = "abcabc"
Output: 10
Explanation: The substrings containing at least one occurrence of the characters a, b and c are "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" and "abc" (again). 
Example 2:

Input: s = "aaacb"
Output: 3
Explanation: The substrings containing at least one occurrence of the characters a, b and c are "aaacb", "aacb" and "acb". 
Example 3:

Input: s = "abc"
Output: 1
 

Constraints:

3 <= s.length <= 5 x 10^4
s only consists of a, b or c characters.
 */
