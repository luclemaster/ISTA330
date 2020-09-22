/*
Given an array of distinct integers, input, 
find all pairs of elements with the minimum  difference (that is the minimum of the absolute value of the difference)
 of any two elements. 

Return a list of pairs in ascending order. 
For each pair [a, b] we have:

 1. a, b are from the input array
 2. a < b
 3. b - a equals to the minimum difference of any two elements in the input array
 
Example:
input: [1,-5,-10,24,19,-4,-14,23]
output: [[-5, -4], [23, 24]]
*/

var minPairs = function(input) {
    let pairs = []
    let output = []
    // Picks out pairs in order with a < b
    for (i = 0; i < input.length; i++){
        let current = input[i]
        for (x = 0; x < input.length; x++){
            if ((current < input[x]) && (x != i)){
                pairs.push([current, input[x]])
            }
        }
    }
    // Finds the minimum difference between pairs
    let min = pairs[0][1] - pairs[0][0]
    for (i = 1; i < pairs.length; i++){
        let current = pairs[i]
        if ((current[1] - current[0]) < min){
            min = current[1] - current[0]
        }
    }
    // Pushes minimally different pairs to output
    for (i = 1; i < pairs.length; i++){
        let current = pairs[i]
        if ((current[1] - current[0]) == min){
            output.push(current)
        }
    }
    return output
};