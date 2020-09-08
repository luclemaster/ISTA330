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
  for (i = 0; i < n; i++) {
    let addition = [];

    for (x = 0; x <= i; x++) {
      if ((x == 0) || (x == i)) {
        addition.push(1);
      }
      if ((x > 0) && (x < i) && (i > 1)) {
        let sum = last_line[x-1] + last_line[x];
        addition.push(sum);
      }
    }

    let last_line = [];
    for (a = 0; a < addition; a++) {
      last_line.push(addition[a]);
    }
    
    output.push(addition);
  }
  return output;
};