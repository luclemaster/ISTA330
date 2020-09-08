/*
Given an array of size n, 
find the m-element. 
The m-element is 
the element that appears more than ⌊ n/2 ⌋ times.

If the majority element does not exist return undefined.

Example: 
input: [1, 2, 2, 3, 2, 7, 2]
output: 2 
*/

var m_element = function(input) {
    var pair = {};
    for (let i = 0; i < input.length; i++){
        if(input[i] in pair)
        {
            pair[input[i]]++;
        }
        else
        {
            pair[input[i]] = 1;
        }
    }
    for (let e in pair)
    {
        if(pair[e] > Math.floor(input.length / 2))
        {
            return e.toString();
        }
    }
    return -1;
};
console.log(m_element([1, 2, 2, 3, 2, 7, 2]));