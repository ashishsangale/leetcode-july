from collections import Counter

class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        occurances = list(Counter(tasks).values())
		return max((max(occurances)-1) * (n+1) + occurances.count(max(occurances)), len(tasks))