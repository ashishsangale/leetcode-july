//map and sort 

var topKFrequent = function(nums, k) {
    const map = nums.reduce((map, num) => {
        const occ = map.get(num) || 0;
        map.set(num, occ + 1);
        return map;
    }, new Map());
    
    return Array.from(map)
        .sort((a, b) => b[1] - a[1])
        .map(item => item[0])
        .slice(0, k);
};