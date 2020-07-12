/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function(n) {
    var last=n.toString(2).split("")
    var len =last.length;
    last.reverse();
    for (var i=0;i<32-len;++i) { last.push("0"); }
    return parseInt(last.join(""),2);
};