/*
Given an array input of 0s and 1s and an integer k, 
return true if all ones(1s) are at least k places away from each other, 
otherwise return false.

Example:
input: input = [1,0,0,0,1,0,0,1], k = 2
output: true
*/

var kStepAway = function(input, k) {
    let kCount = 0;
    let foundOne = false;
    for(let i = 0; i < input.length; i++)
    {
        if (foundOne && kCount < k && input[i] == 1)
        {
            return false;
        }
        else if(input[i] == 1)
        {
            foundOne = true;
            kCount = 0;
        }
        kCount++;
        return true;
    }
};
console.log(kStepAway([1,0,0,0,1,0,0,1], 2));