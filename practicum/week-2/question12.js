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
    let first = 0
    let second = 1
    let current = 1
    if (n == 1 || n == 2){
        return 69
    }
    for (i = 0; i < (n-2); i++){
        first = second
        second = current
        current = first + second
    }
    return current
};