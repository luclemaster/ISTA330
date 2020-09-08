/*
An array is monotonic if it is 
either monotone increasing 
or monotone decreasing.

An array A is monotone increasing 
if for all i <= j, A[i] <= A[j].  
An array A is monotone decreasing 
if for all i <= j, A[i] >= A[j].

For a given array, input, 
return true if and only if the input array is monotonic.

Example: 
input: [12, 6, 2, 2, 2, 0]
output: true
*/

var isMonotonic = function(input) {
    let isIncrasing = input[0] < input[1];
    for (let i = 2; i < input.length; i ++)
    {
        if (isIncrasing && input[i-1] > input[i])
        {
            return false;
        }
        else if(input[i-1] < input[i])
        {
            return false;
        }
    }
    return true;
};
console.log('hi');