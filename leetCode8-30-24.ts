function removeDuplicateLetters(s: string): string {
  const counter: { [key: string]: number } = {};
  for (const char of s) {
    counter[char] = (counter[char] || 0) + 1;
  }

  const stack: string[] = [];
  const inStack = new Set();

  for (const char of s) {
    counter[char] -= 1;

    while (stack.length > 0 && stack[stack.length - 1] > char && counter[stack[stack.length - 1]] > 0) {
      inStack.delete(stack.pop());
    }

    if (inStack.has(char)) continue;
    stack.push(char);
    inStack.add(char);
  }

  return stack.join("");
}

console.log(removeDuplicateLetters("bcabc"));
console.log(removeDuplicateLetters("cbacdcbc"));

/**
Example 1:

Input: s = "bcabc"
Output: "abc"

Example 2:

Input: s = "cbacdcbc"
Output: "acdb"

**/
