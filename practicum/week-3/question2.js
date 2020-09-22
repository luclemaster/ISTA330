
/*
Given an array of integers, 
some elements appear twice and others appear once.

Find all the elements that appear twice in this array.

Example: input: [19,3,2,10,8,2,3,5]
         output: [2,3]
                
          */

 var findDuplicates = function(input) {
     var duplicateDict = {};
     for(let i =0; i < input.length; i++)
        if(!(input[i] in duplicateDict)) 
        {
            duplicateDict[input[i]] = 0;
        }
        else
        {
            duplicateDict[input[i]]++;
        }
    duplicateList = [];
    for (let e in duplicateDict)
    {
        if(duplicateDict[e]> 0)
        {
            duplicateList.push(parseInt(e));
        }
    }
    return duplicateList;
 };
 console.log(findDuplicates([19,3,2,10,8,2,3,5]));
