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
  var triangle = [1];
  if (n == 1)
  {
    return triangle;
  }
  for (let i = 1; i < n; i++)
  {
    let tmpList = [1];
    for (let j = 1; j < triangle[i-1].length; j++)
    {
      tmpList[j] = triangle[i-1][j-1] + triangle[i-1][j];
    }
    tmpList.push(1);
    triangle.push(tmpList);
  }
  return triangle;
};
console.log(PascalTriangle(6)[5])