/*
Given an array of numbers, input, 
find whether the largest element in the array 
is at least twice as much as every other number
 in the array. If this is the case return true otherwise return false.

 Example:
         input: [3,2,21,50]
         output: true
*/

var largestNumberIsAtLeastTwice = function(input) {
        maxNum = input[0];
        for(let i = 0; i < input.length; i++)
        {
             if(maxNum < input[i])
             {
                     maxNum = input[i];
             }
        }
        for(let i = 0; i < input.length; i++)
        {
                if(input[i] != maxNum && (input[i] *2) > maxNum )
                {
                     return false;
                }
        }
        return true;
};