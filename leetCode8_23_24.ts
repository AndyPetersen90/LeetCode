function reverseWords(s: string): string {
  return s
    .split(" ")
    .filter((word) => word !== "")
    .reverse()
    .join(" ")
    .trim();
}

reverseWords("the sky is blue");
// Output: "blue is sky the"
reverseWords("  hello world  ");
// Output: "world hello"
reverseWords("a good   example");
// Output: "example good a"

// function restoreIpAddresses(s: string): string[] {
//   console.log(s.length);
//   return [];
// }

// restoreIpAddresses("25525511135");
// // Output: ["255.255.11.135","255.255.111.35"]

// restoreIpAddresses("0000");
// // Output: ["0.0.0.0"]

// restoreIpAddresses("101023");
// // Output: ["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]

// function restoreIpAddresses(s: string): string[] {
//   const res: string[] = [];
//   function findSub(prefix: string[], subfix: string, count: number): void {
//     if (subfix.length > count * 3 || subfix.length === 0) {
//       return;
//     }
//     if (count === 1 && isValid(subfix)) {
//       res.push([...prefix, subfix].join("."));
//       return;
//     }
//     for (let i = 1; i <= 3; i++) {
//       const s2 = subfix.slice(0, i);
//       const s3 = subfix.slice(i);
//       if (!isValid(s2)) break;

//       findSub([...prefix, s2], s3, count - 1);
//     }
//   }
//   findSub([], s, 4);
//   return res;
// }

// function isValid(s: string): boolean {
//   if (s[0] === "0" && s.length > 1) {
//     return false;
//   }
//   const p = parseInt(s);
//   if (p > 255) {
//     return false;
//   }
//   return true;
// }
