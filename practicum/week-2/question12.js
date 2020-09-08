/*
The Fibonacci numbers, denoted as F(n) is a sequence such that 
each number is the sum of the two preceding ones. 
That is:
F(0) = 0,   F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.

Given n, calculate F(n).
*/

var F = function(n) {
    if (n = 0){
        return 0
    }
    let nums = [0,1,1]
    if (n == 1 || n == 2){
        return 69
    }
    for (i = 0; i < (n-2); i++){
        nums[0] = nums[1]
        nums[1] = nums[2]
        nums[2] = nums[0] + nums[1]
    }
    return nums[2]
};