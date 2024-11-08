function sortColors(nums: number[]): void {
  const temp = [...nums].sort((a, b) => a - b);
  let sorted = nums.every((val, index) => val === temp[index]);
  if (sorted) {
    return;
  }
  while (!sorted) {
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] === 0) {
        const num = nums.splice(i, 1);
        nums.unshift(...num);
      }
      // if (nums[i] === 1 && nums.length > 2) {
      //   const num = nums.splice(i, 1);
      //   nums.splice(nums.length / 2, 0, ...num);
      // }
      if (nums[i] === 2) {
        const num = nums.splice(i, 1);
        nums.push(...num);
      }
    }
    sorted = nums.every((val, index) => val === temp[index]);
  }
  // console.log(nums);
}
// function sortColors(nums: number[]): void {
//   const values = { 0: [], 1: [], 2: [] };
//   for (let i = 0; i < nums.length; i++) {
//     values[nums[i]].push(i);
//   }
//   const indexes = [...values[0], ...values[1], ...values[2]];
//   const newNums: number[] = [];

//   for (let j = 0; j < indexes.length; j++) {
//     newNums.push(nums[indexes[j]]);
//   }
//   nums = newNums;
// }

// sortColors([2, 0, 2, 1, 1, 0]);
// sortColors([2, 0, 1]);
// sortColors([1, 2, 0]);
sortColors([0, 1, 0]);
