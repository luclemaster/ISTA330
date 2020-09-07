/*
Given a non-negative integer n, 
generate the first n rows of Pascal's triangle (https://en.wikipedia.org/wiki/Pascal%27s_triangle).

Example:
input: 4
output: [
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1] 
]
*/

var PascalTriangle = function(n) {
  let output = [];
  for (i = 1; i <= n; i++) {
    let addition = [];
    for (x = 1; x <= i; x++) {
      if ((x = 1) || (x = i)) {
        addition.push(1);
      }
      else {
        addition.push(output[i-1][x-1] + output[i-1][x+1]);
      }
    }
    output.push(addition);
  }
  return output;
};