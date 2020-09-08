/*
Given an array of integers, input, representing a list encoded, decode the list.
Every pair (2*i, 2*i + 1) of elements in the input, 
means in the decoded list we have as many as input[2*i]'s of the quantity  input[2*i + 1].


Example:
input: [2, 5, 4, 2] (this means in the encoded list we will have two 5's and four 2's )
output: [5, 5, 2, 2, 2, 2]
*/

var decode = function(input) {
    let output = []
    let repeat = 0
    let num = 0
    for (i = 0; i < input.length; i++) {
        if (i % 2 == 0) {
            repeat = input[i]
        }
        if (i % 2 != 0) {
            num = input[i]
            for (x = 0; x < repeat; x++) {
                output.push(num)
            }
        }
    }
    return output
};