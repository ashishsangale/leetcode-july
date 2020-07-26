/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    let curr = 0;
    while(num > 9){
        const str = num.toString();
        for(const digit of str){
            curr += parseInt(digit)
        }
        
        num = curr;
        curr = 0
    }
    return num;
};