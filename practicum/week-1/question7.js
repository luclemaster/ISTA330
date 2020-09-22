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
       let sum = 0
       let largest = 0
       while (input.length >= 2) {
              largest = 0
              let remove = 0
              for (i = 0; i < input.length; i++) {
                     if (input[i] > largest){
                            largest = input[i]
                            remove = i
                     }
              }
              largest = 0
              input.splice(remove,1)
              for (i = 0; i < input.length; i++) {
                     if (input[i] > largest){
                            largest = input[i]
                            remove = i
                     }
              }
              sum += largest
              input.splice(remove,1)
       }
       return sum
};