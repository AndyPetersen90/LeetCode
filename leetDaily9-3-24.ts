const reRun = (value: string) => {
  const numArray = Array.from(value).map((char) => {
    return Number(char);
  });
  // console.log(numArray, "numArray");
  const sum = numArray.reduce((acc, curr) => {
    return acc + curr;
  }, 0);
  return sum;
};

function getLucky(s: string, k: number): number {
  const values: { [key: string]: number } = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  let newValues: number[] = [];
  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    const letter = s[i];
    const value = values[letter];
    newValues.push(value);
    if (i === s.length - 1) {
      sum = reRun(newValues.join(""));
    }
  }
  for (let i = 1; i < k; i++) {
    // console.log(sum, "pre calc", i);
    sum = reRun(sum.toString());
  }

  return Number(sum);
}

console.log(getLucky("iiii", 1));
console.log(getLucky("leetcode", 2));
console.log(getLucky("zbax", 2));
console.log(getLucky("dbvmfhnttvr", 5));

// Example 1:

// Input: s = "iiii", k = 1
// Output: 36
// Explanation: The operations are as follows:
// - Convert: "iiii" ➝ "(9)(9)(9)(9)" ➝ "9999" ➝ 9999
// - Transform #1: 9999 ➝ 9 + 9 + 9 + 9 ➝ 36
// Thus the resulting integer is 36.

// Example 2:

// Input: s = "leetcode", k = 2
// Output: 6
// Explanation: The operations are as follows:
// - Convert: "leetcode" ➝ "(12)(5)(5)(20)(3)(15)(4)(5)" ➝ "12552031545" ➝ 12552031545
// - Transform #1: 12552031545 ➝ 1 + 2 + 5 + 5 + 2 + 0 + 3 + 1 + 5 + 4 + 5 ➝ 33
// - Transform #2: 33 ➝ 3 + 3 ➝ 6
// Thus the resulting integer is 6.

// Example 3:

// Input: s = "zbax", k = 2
// Output: 8
