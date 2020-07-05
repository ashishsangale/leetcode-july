class Solution:
    def hammingDistance(self, x: int, y: int) -> int:
        #XOR
        temp = x^y
        #count the number of 1's in the diff
        counter = 0
        while temp != 0:
            # clear the least significant bit
            temp &= temp-1
            counter += 1
        return counter