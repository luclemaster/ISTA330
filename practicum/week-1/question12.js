/*
A string, input, which contains only letters a and b is given.
A list of substrings s1, s2, .., sn is called a partition for input if and only if
  input == s1 + s2 + ... + sn.

  
A substring is balanced if it has equal number of a's and b's.
The number of balanced substrings in a partition is called the balence number of the partition.
Among all the possible partitions of the input string, what is the maximum balance number?

Example:
input: 'abaabbabab'
output: 4 because the following partition has the highest number of balanced substrings:
          'ab', 'aabb', 'ab', 'ab'
*/

var maxBalanceNumber = function(input) {

  let aCount = 0;
  var balanceCount = 0;
  for(let i = 0; i < input.length; i++)
  {
    if(input[i] == 'a')
    {
      aCount++;
    }
    else if(input[i] == 'b' && aCount == 1)
    {
      balanceCount++;
      aCount = 0;
    }
    else if(aCount > 1)
    {
      aCount--;
    }
  }
  return balanceCount;
};
console.log(maxBalanceNumber('abaabbabab'));