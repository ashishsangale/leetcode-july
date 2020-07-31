/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let steps = [];
    for (let i = 0; i <= n; i++) 
    {steps[i] = i <= 3 ? i : steps[i-1] + steps[i-2]};
    return steps[n];
};