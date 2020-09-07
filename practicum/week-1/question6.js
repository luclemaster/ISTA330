/*
Given an array of non-negative integers, return  the median (https://en.wikipedia.org/wiki/Median) of the array. 
Example: 
input: [1, 2, 2, 3, 4, 7, 9]
output: 3 
*/

var median = function(input) {
    //Middle + middle / 2
    let median = 0
    let size = input.length;
    if (size % 2 != 0) {
        median = input[((size + 1) / 2)];
    }
    median = (input[(size / 2) - 1] + input[size / 2]) / 2;
    return median;
};