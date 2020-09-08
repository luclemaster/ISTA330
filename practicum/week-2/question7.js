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
    transposedMatrix = [[]];
    for (let j = 0; j < M[0].length; j++)
    {
        //transposedMatrix[j] = [];
        let tmpList = [];
        for (let i = 0; i < M.length; i++)
        { 
            tmpList[i] = M[i][j];
            //transposedMatrix[j,i] = M[i][j];
        }
        transposedMatrix[j] = tmpList;
    }
    return transposedMatrix;
};