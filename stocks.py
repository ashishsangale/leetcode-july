
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        if not prices:
            return 0
        n = len(prices)
        dp  = [0] * (n+1)
        
        min_price = prices[0]
        for i in range(1, n+1):
            min_price = min(min_price, prices[i-1]-dp[i-2])
            dp[i] = max(dp[i-1], prices[i-1]-min_price)
        
        return dp[n]