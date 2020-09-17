/*
Given an array of integers A, 
a move consists of choosing any A[i], 
and incrementing it by 1.

Return the least number of moves to make every value in A unique.

Example:
input: [1,2,2]
output: 1
*/

var minMoves = function(A) {
    var orderList = [];
    var minVal = A[0];
    for(let i = 1; i < A.length; i++)
    {
        if(A[i] < minVal)
        {
            minVal = A[i];
        }
    }
    orderList = [minVal];
    var totalMoves = 0;
    for(let i = 0; i < A.length; i++)
    {
        let largerVal = Math.pow(10,10);
        for(let j = 0; j < A.length; j++)
        {
            if (A[j] > orderList[orderList.length-1] && A[j] < largerVal)
            {
                largerVal = A[j];
            }
        }
        if (largerVal == Math.pow(10,10))
        {
            continue;
        }
        totalMoves += largerVal - orderList[orderList.length-1];
        orderList.push(largerVal);
    }
    return totalMoves;
};
console.log(minMoves([1,2,2]));