/*
Given an array of non-negative integers, return  the median (https://en.wikipedia.org/wiki/Median) of the array. 
Example: 
input: [1, 2, 2, 3, 4, 7, 9]
output: 3 
*/

var median = function(input) {
    //Middle + middle / 2
    if (input.length % 2 != 0) {
        return input[(input.length + 1) / 2];
    }
    let median = (input[(input.length / 2) + 1] + input[input.length / 2]) / 2;
    return median;
};