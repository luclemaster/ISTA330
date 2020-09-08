/*
Given an array of integers, input, 
a d-integer is an integer which has 
a frequency in the array equal to its value.

Return a d-integer. If there are multiple 
d-integers return the largest of them.
If there is no d-integer return -1.

Example:
input: [3,5,3,3,5,1]
output: 3
*/

var d_integer = function(input) {
    let outputs = []
    for (i = 0; i < input.length; i++) {
        let number = 0
        let current = input[i]
        for (x = 0; x < input.length; x++) {
            if (input[x] == current) {
                number += 1
            }
        }
        if (number = current) {
            outputs.push(current)
        }
    }
    if (outputs.length > 0) {
        let max = 0
        for (i = 0; i < outputs.length; i++) {
            if (outputs[i] > max) {
                max = outputs[i]
            }
        }
        return max
    }
    return -1
};