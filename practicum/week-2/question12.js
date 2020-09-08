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
    if (n == 1 || n == 2){
        return 1
    }
    let nums = [0,1]
    for (i = 1; i < n; i++){
        nums.push(nums[i-1] + nums[i-0])
    }
    return nums[n-1]
};