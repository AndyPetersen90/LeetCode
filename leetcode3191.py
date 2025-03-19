class Solution(object):
    def minOperations(self, nums):
        operations = 0
        for i in range(len(nums) - 2):
            if nums[i] == 0:
                nums[i] = 1
                nums[i + 1] = 1 - nums[i + 1]
                nums[i + 2] = 1 - nums[i + 2]
                operations += 1

        for i in range(len(nums)):
            if nums[i] == 0:
                return -1

        return operations
        """
        :type nums: List[int]
        :rtype: int
        """
