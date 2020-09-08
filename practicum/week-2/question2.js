
/*
Given an integer array, input, 
find the subarray
 which has the largest sum and return its sum.

Example: input: [-12,3,-1,5,-2,1,-7]
         output: 7
                 because [3,-1,5] has the largest sum.
          */

 var largestSubarray = function(input) {
         maxSum = 0;
     for(let i = 0; i < input.length; i++)
     {
             let curSum = input[i];
             if (curSum > maxSum)
             {
                     maxSum = curSum;
             }
             for(let j = i + 1; j < input.length; j++)
             {
                     curSum += input[j];
                     if (curSum > maxSum)
                     {
                             maxSum = curSum;
                     }
             }
     }
    return maxSum;
 };
