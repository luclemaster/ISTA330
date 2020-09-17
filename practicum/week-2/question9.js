/*
Given an integer n, 
put each number from 1 to n 
into groups based on the sum of its digits. 

Return how many groups have the largest size.

Example:
input: n = 11
output: 2
The groups are: [1, 10], [2, 11], [3], [4], [5], [6], [7], [8], [9]
so there are two groups with the largest size.
*/

var largestGroupsCount = function(n) {
    var countList = [];
    for(let i = 1; i <= n; i++)
    {
        countList.push([i]);
    }
    var largestDigit
    for (let i = 0; i < countList.length; i++)
    {
        
    }
};