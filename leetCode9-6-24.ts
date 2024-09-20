function countingSortByDigit(arr: number[], exp: number): void {
  const output = new Array(arr.length).fill(0);
  const count = new Array(10).fill(0);

  // Count occurrences of each digit
  for (const num of arr) {
    const digit = Math.floor(num / exp) % 10;
    count[digit]++;
  }

  // Adjust count array to contain positions
  for (let i = 1; i < 10; i++) {
    count[i] += count[i - 1];
  }

  // Build the output array using the count array
  for (let i = arr.length - 1; i >= 0; i--) {
    const num = arr[i];
    const digit = Math.floor(num / exp) % 10;
    output[count[digit] - 1] = num;
    count[digit]--;
  }

  // Copy the sorted numbers back into the original array
  for (let i = 0; i < arr.length; i++) {
    arr[i] = output[i];
  }
}

function maximumGap(nums: number[]): number {
  // let maxDif = 0;
  // if (nums.length < 2) {
  //   return maxDif;
  // }
  // nums
  //   .sort((a, b) => a - b)
  //   .forEach((num, i) => {
  //     const curDif = nums[i + 1] - num;
  //     maxDif = maxDif < curDif ? curDif : maxDif;
  //   });
  // return maxDif;
  const maxNum = Math.max(...nums);
  let exp = 1;

  console.log(maxNum);

  while (Math.floor(maxNum / exp) > 0) {
    countingSortByDigit(nums, exp);
    exp *= 10;
  }
  console.log("final array", nums);
  return 0;
}

console.log(maximumGap([3, 6, 9, 1]));
// console.log(maximumGap([10]));
// console.log(maximumGap([3, 1]));

/**
 * Example 1:

Input: nums = [3,6,9,1]
Output: 3
Explanation: The sorted form of the array is [1,3,6,9], either (3,6) or (6,9) has the maximum difference 3.

Example 2:

Input: nums = [10]
Output: 0
Explanation: The array contains less than 2 elements, therefore return 0.

 

Constraints:

    1 <= nums.length <= 105
    0 <= nums[i] <= 109

 */
