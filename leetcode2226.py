class Solution(object):
    def maximumCandies(self, candies, k):
        """
        :type candies: List[int]
        :type k: int
        :rtype: int
        """
        s = sum(candies)
        if s < k:
            return 0
        
        mink = s // k  # Use integer division

        def isPossible(c):
            count = 0
            for candy_count in candies:
                count += candy_count // c  # Use integer division
            return count >= k

        left = 1
        right = mink
        ans = 0

        while left <= right:
            c = (left + right) // 2  # Use integer division

            if isPossible(c):
                ans = max(ans, c)
                left = c + 1
            else:
                right = c - 1

        return ans

# Example usage
solution = Solution()
print(solution.maximumCandies([5, 8, 6], 3))  # Output: 5
print(solution.maximumCandies([2, 5], 11))