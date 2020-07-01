var arrangeCoins = function(n) {
    let coins = 1;
    let count = 0;
    while(n>0){
        n -= coins;
        if(n>=0){
            count++;
            coins++
        }
    }
    return count;
};