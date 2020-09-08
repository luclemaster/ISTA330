/*
Given an integer n, return difference between the maximum and the minimum of its digits.


Example:
input: 472
output: 7 - 2 = 5
*/

var maxMinusMin = function(n) {
    let nString = n.toString()
    var max = parseInt(nString[0]);
    var min = parseInt(nString[0]);
    for (let i = 0; i < nString.length; i++)
    {
        if(parseInt(nString[i]) < min)
        {
            min = parseInt(nString[i]);
        }
        if(parseInt(nString[i]) > max)
        {
            max = min = parseInt(nString[i]);
        }
    }
    return max - min;
};
console.log(maxMinusMin(472));