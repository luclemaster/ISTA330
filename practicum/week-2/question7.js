/*
Given a matrix M, return the transpose of M.

The transpose of a matrix is a 
new matrix whose rows are the columns 
of the original.

Example: 
input: [[1,2,3],[4,5,6]]
output: [[1,4], [2,5], [3,6]]

*/

var transpose = function(M) {
    let output = []
    for (column = 0; column < M[0].length; column++) {
        let current = []
        for (row = 0; row < M.length; row++) {
            current.push(M[row][column])
        }
        output.push(current)
    }
    return output
};