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
  let output = [[1],[1,1]]
  let last_line = []
  if (n > 2) {
    for (i = 2; i < n; i++) {
      let addition = [1]
      let prev = output[output.length - 1]
      for (x = 0; x < prev.length - 1; x++) {
        let sum = (prev[x+1] + prev[x])
        addition.push(sum)
      }
      addition.push(1)
      output.push(addition)
    }
  }
  return output;
};