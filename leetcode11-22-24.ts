// function sortNums(a: number, b: number, position: number): number {
//   const str1 = a.toString().charAt(position);
//   const str2 = b.toString().charAt(position);

//   const order1 = `${str1}${str2}`;
//   const order2 = `${str2}${str1}`;

//   if (order1 > order2) {
//     return -1;
//   } else if (order1 < order2) {
//     return 1;
//   }
//   return 0;
// }

function largestNumber(nums: number[]): string {
  const newnums = nums.sort((a, b) => {
    const order1 = `${a}${b}`;
    const order2 = `${b}${a}`;

    if (order1 > order2) {
      return -1;
    } else if (order1 < order2) {
      return 1;
    }
    return 0;
  });
  console.log(newnums, newnums.join(""));
  const num = newnums.join("");
  return num.startsWith("0") ? "0" : num;
}

// Example 1:
// console.log(largestNumber([10, 2]));
// Output: "210"

// Example 2:
// console.log(largestNumber([3, 30, 34, 5, 9]));
console.log(largestNumber([111111121, 11111112]));
// Output: "9534330"
