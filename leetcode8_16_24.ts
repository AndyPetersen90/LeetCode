function isValidSudoku(board: string[][]): boolean {
  let validSoduko = true;
  const verdicts: boolean[] = [];
  const colNums: string[][] = [[], [], [], [], [], [], [], [], []];
  const threeByThree: string[][] = [[], [], [], [], [], [], [], [], []];

  const checkValid = (arr: string[]) => {
    let nums: number[] = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === ".") continue;
      if (Number(arr[i])) {
        nums.push(Number(arr[i]));
      }
    }
    const setNums = new Set(nums.map((num) => num));
    if (setNums.size !== nums.length) {
      verdicts.push(false);
    }
    verdicts.push(true);
  };

  board.forEach((row, rInd) => {
    checkValid(row);
    row.forEach((item, ind) => {
      const mod = rInd < 3 ? 0 : 3;
      const mod2 = rInd > 5 ? 2 : 1;
      colNums[ind].push(item);
      threeByThree[Math.floor(ind / 3) + mod * mod2].push(item);
    });
  });

  colNums.forEach((col) => checkValid(col));
  threeByThree.forEach((three) => checkValid(three));

  verdicts.filter((verdict) => {
    if (!verdict) {
      validSoduko = false;
    }
  });

  return validSoduko;
}

console.log(
  isValidSudoku([
    ["5", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
console.log(
  isValidSudoku([
    ["8", "3", ".", ".", "7", ".", ".", ".", "."],
    ["6", ".", ".", "1", "9", "5", ".", ".", "."],
    [".", "9", "8", ".", ".", ".", ".", "6", "."],
    ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
    ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
    ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
    [".", "6", ".", ".", ".", ".", "2", "8", "."],
    [".", ".", ".", "4", "1", "9", ".", ".", "5"],
    [".", ".", ".", ".", "8", ".", ".", "7", "9"],
  ])
);
