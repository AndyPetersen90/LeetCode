// function removeSubfolders(folder: string[]): string[] {
//   const nonSubfolders: string[] = [];
//   // const subfolders: string[] = [];
//   const subfolders: Set<string> = new Set();

//   folder.sort();

//   // for (let i = 0; i < folder.length; i++) {
//   //   if (subfolders.includes(folder[i])) continue;

//   //   for (let j = 0; j < folder.length; j++) {
//   //     if (i === j) continue;
//   //     if (folder[j].startsWith(folder[i] + "/")) {
//   //       subfolders.push(folder[j]);
//   //     } else if (folder[i].startsWith(folder[j] + "/")) {
//   //       subfolders.push(folder[i]);
//   //     }
//   //   }
//   //   if (!subfolders.includes(folder[i]) && !nonSubfolders.includes(folder[i])) {
//   //     nonSubfolders.push(folder[i]);
//   //     continue;
//   //   }
//   // }

//   for (let i = 0; i < folder.length; i++) {
//     if (folder[i].startsWith(nonSubfolders[nonSubfolders.length - 1] + "/")) {
//       subfolders.add(folder[i]);
//       continue;
//     }

//     if (!subfolders.has(folder[i])) {
//       nonSubfolders.push(folder[i]);
//     }
//   }

//   return nonSubfolders;
// }

// Example 1:
// console.log(removeSubfolders(["/a", "/a/b", "/c/d", "/c/d/e", "/c/f"]));
// Output: ["/a","/c/d","/c/f"]
// Explanation: Folders "/a/b" is a subfolder of "/a" and "/c/d/e" is inside of folder "/c/d" in our filesystem.

// Example 2:
// console.log(removeSubfolders(["/a", "/a/b/c", "/a/b/d"]));
// Output: ["/a"]
// Explanation: Folders "/a/b/c" and "/a/b/d" will be removed because they are subfolders of "/a".

// Example 3:
// console.log(removeSubfolders(["/a/b/c", "/a/b/ca", "/a/b/d"]));
// Output: ["/a/b/c","/a/b/ca","/a/b/d"]

// console.log(removeSubfolders(["/ah/al/am", "/ah/al"]));

function isStrictlyPalindromic(n: number): boolean {
  const onlyTrues: boolean[] = [];
  for (let i = 2; i <= n; i++) {
    if (n > 36) break;
    const baseStr = n.toString(i);
    const reversedStr = baseStr.split("").reverse().join("");
    if (baseStr === reversedStr) {
      onlyTrues.push(true);
    }
  }

  return onlyTrues.length === n ? true : false;
}

// Example 1:
console.log(isStrictlyPalindromic(9));
// Output: false
// Explanation: In base 2: 9 = 1001 (base 2), which is palindromic.
// In base 3: 9 = 100 (base 3), which is not palindromic.
// Therefore, 9 is not strictly palindromic so we return false.
// Note that in bases 4, 5, 6, and 7, n = 9 is also not palindromic.

// Example 2:
console.log(isStrictlyPalindromic(4));
// Output: false
// Explanation: We only consider base 2: 4 = 100 (base 2), which is not palindromic.
// Therefore, we return false.
console.log(isStrictlyPalindromic(37));
