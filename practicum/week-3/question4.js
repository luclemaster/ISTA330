/*
Given a set of distinct integers, input, 
return all possible subsets (the power set).

The solution set must not contain duplicate subsets.
 
Example:
 input: [1,2,3]
 output: [
  [],   
  [1],
  [2],
  [3],  
  [1,3],
  [2,3],
  [1,2],
  [1,2,3]
]
*/

var powerSet = function(input) {
  var powerList = [[]]
  for (let e of input)
  {
    let length = powerList.length;
    for(let i = 0; i < length; i++)
    {
      let temp = powerList[i].slice(0);
      temp.push(e);
      powerList.push(temp);
    }
  }
  return powerList;
};