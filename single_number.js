/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    let arr = new Set();
    nums.forEach(i => arr.has(i) ? arr.delete(i) : arr.add(i))
    
    
    return Array.from(arr)
};