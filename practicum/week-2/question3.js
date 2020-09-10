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
  var triangle = [];
  while(triangle.length <= n)
  {
    triangle.push(1);
    for (let i = 1; i < triangle.length; i++)
    {
      triangle[i] += triangle[i-1];
    }
    
    console.log(triangle);
    console.log(triangle.length);
  }
  return triangle;
};
console.log(PascalTriangle(4));