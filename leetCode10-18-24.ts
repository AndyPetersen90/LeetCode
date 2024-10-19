function findRepeatedDnaSequences(s: string): string[] {
  if (s.length < 10) return [];
  let dnaSections: string[] = [];
  // let dnaSection = "";
  for (let i = 0; i < s.length; i++) {
    // dnaSection += s[i];
    dnaSections.push(s.slice(i, i + 10));
    // if (dnaSection.length === 10) {
    //   dnaSections.push(dnaSection);
    //   dnaSection = dnaSection.slice(1);
    // }
  }
  const counts: { [key: string]: number } = {};
  const duplicates: string[] = [];
  dnaSections.forEach((dna) => {
    counts[dna] = (counts[dna] || 0) + 1;
  });
  for (let key in counts) {
    if (counts[key] > 1) {
      duplicates.push(key);
    }
  }
  return duplicates;
}

// Example 1:
console.log(findRepeatedDnaSequences("AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"));
// Output: ["AAAAACCCCC","CCCCCAAAAA"]

// Example 2:
console.log(findRepeatedDnaSequences("AAAAAAAAAAAAA"));
// Output: ["AAAAAAAAAA"]
