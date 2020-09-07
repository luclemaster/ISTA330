
/*
Given an integer array, input, 
find the subarray
 which has the largest sum and return its sum.

Example: input: [-12,3,-1,5,-2,1,-7]
         output: 7
                 because [3,-1,5] has the largest sum.
          */

 var largestSubarray = function(input) {
         let current = 0
         let largest = 0
         for (let num of input) {
                 if (0 > (current + num)) {
                         current = 0;
                 }
                 else {
                         current = current + num;
                 }
                 if (current > largest) {
                         largest = current;
                 }
         }
         return largest;
 };
