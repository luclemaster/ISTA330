/*
Given an integer n, return difference between the maximum and the minimum of its digits.


Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
    digits = ("" + n).split("");
    /* Adding the integer to a string turns it into a string so that I
    can split it into a workable array. */
    let max = 0;
    let min = 9;
    for (i = 0; i < digits.length; i++) {
        if (digits[i] > max) {
            max = digits[i];
        }
        if (digits[i] < min) {
            min = digits[i];
        }
    }
    return (max - min);
};