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
  let last_line = [];
  for (i = 1; i <= n; i++) {
    let addition = [];
    for (x = 1; x <= i; x++) {
      if ((x == 1) || (x == i)) {
        addition.push(1);
      }
      if ((x != 1) && (x != i)) {
        let sum = last_line[x] + 1;
        addition.push(sum);
      }
    }
    output.push(addition);
    last_line = addition.slice();
  }
  return output;
};