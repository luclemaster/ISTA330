/*
Given an array of 2n numbers, group the numbers into n pairs of integer,
such that the sum of the minimum of each pair is the largest.

Example: 
input: [4, 3, 8, 0]
output: 4
       because we can make the following pairs: (4, 8) and (3, 0) and 
       min(4,8) + min(3,0) = 4
       whatever other pairs we choose the sum of the minimums will not exceed 4.
*/

var maxSumOfMins = function(input) {
   for (var i = input.length -1; i >= 0; i--)
   {
       for(var j = 1; j <= i; j++)
       {
              if(input[j-1] > input[j])
              {
              var tmp = input[j-1];
              input[j-1] = input[j];
              input[j] = tmp;
              }
       }
       }
       var sum = 0;
       for(let i = 0; i < input.length; i+=2)
       {
              if(input[i] > input[i+1])
              {
                     sum += input[i+1];
              }
              else 
              {
                     console.log(input[i]);
                     sum += input[i];
              }
       }
       return sum;
};