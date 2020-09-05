/*
Given an array of non-negative integers, return  the median (https://en.wikipedia.org/wiki/Median) of the array. 
Example: 
input: [1, 2, 2, 3, 4, 7, 9]
output: 3 
*/

var median = function(input) {
    var sortList = [];
    while(input.length > 0)
    {
        let i;
        let min = 0;
        for (i=0; i< input.length; i++)
        { 
            if (input[i] < input[min])
            {
                min = i;
            }
        }
        let removed = input.splice(min, 1);
        sortList += removed;
    }
    console.log(sortList);
    if (sortList.length % 2 == 1)
    {
        return sortList[Math.floor(sortList.length / 2)];
    }
    else 
    {
        return (sortList[(sortList.length / 2)] + sortList[(sortList.length / 2) - 1]) / 2;
    }
};