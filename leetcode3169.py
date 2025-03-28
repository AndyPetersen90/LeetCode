class Solution(object):
    def countDays(self, days, meetings):
        if not meetings:
            return days
        meetings.sort()
        free_days = days
        last_end = 0

        for start, end in meetings:
            if end <= last_end:
                continue

            if start > last_end + 1:
                free_days -= end - start + 1
            else:
                free_days -= end - last_end

            last_end = max(last_end, end)

        return free_days
        """
        :type days: int
        :type meetings: List[List[int]]
        :rtype: int
        """


print(
    Solution().countDays(
        10,
        [
            [5, 7],
            [1, 3],
            [9, 10],
        ],
    )
)
print(
    Solution().countDays(
        5,
        [
            [2, 4],
            [1, 3],
        ],
    )
)
print(Solution().countDays(6, [[1, 6]]))
