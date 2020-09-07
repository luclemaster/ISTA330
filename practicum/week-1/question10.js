/*
Given an integer n, return difference between the maximum and the minimum of its digits.


Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
    let max = 0;
    let min = 9;
    for (i = 0; i < n.length; i++) {
        if (n[i] > max) {
            max = n[i];
        }
        if (n[i] < min) {
            min = n[i];
        }
    }
    return (max - min);
};