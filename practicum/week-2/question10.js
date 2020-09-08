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
    var diffPairs = [];
    let minDiff = 10^5;
    for (let i = 0; i < input.length; i++)
    {
        for(let j = 0; j < input.length; j++)
        {
            if(input[i] < input[j])
            {
                if(input[j] - input[i] < minDiff)
                {
                    diffPairs = [[input[i],input[j]]];
                    minDiff = input[j] - input[i];
                }
                else if(input[j] - input[i] == minDiff)
                {
                    diffPairs.push([input[i],input[j]]);
                }
            }
        }
    }
    return diffPairs;
};