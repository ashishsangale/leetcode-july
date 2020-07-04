var nthUglyNumber = function(n) {
    
    if(n <= 0) return false; 
    // start number 1
    if(n == 1) return true; 
    
    //pointers for 2, 3, 5
    var p2 = 0, p3 = 0, p5 = 0; 
    
    var k = [];
    k[0] = 1;
    for(var i = 1; i < n ; i++)
    {
        k[i] = Math.min(k[p2]*2, Math.min(k[p3]*3 ,k[p5]*5));
        if(k[i] == k[p2]*2) p2++; 
        if(k[i] == k[p3]*3) p3++;
        if(k[i] == k[p5]*5) p5++;
    }
    return k[n-1];

};