module.exports = function solveSudoku(matrix) {
    let num1 = []
    for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
            if (matrix[i][j] === 0) {
                num1 = getArr(matrix, i, j);
            } else { continue; }
            for (let i1 = 0; i1 < num1.length; i1++) {
                matrix[i][j] = num1[i1];
                if (solveSudoku(matrix)) {
                    return matrix;
                }
            }
            matrix[i][j] = 0;
            return false;

        }
    }

    return matrix;

}
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function getArr(mat, n1, n2) {
    var arr = [];

    arr.length = 0;
    for (let k = 0; k < 9; k++) {
        if (mat[n1][k] != 0) {
            arr.push(mat[n1][k]);
        }
    }
    for (let k = 0; k < 9; k++) {
        if (mat[k][n2] != 0) {
            arr.push(mat[k][n2]);
        }
    }
    var sq1 = Math.floor(n1 / 3);
    var sq2 = Math.floor(n2 / 3);
    for (let i1 = 3 * sq1; i1 < 3 * sq1 + 3; i1++) {
        for (let j1 = 3 * sq2; j1 < 3 * sq2 + 3; j1++) {
            if (mat[i1][j1] != 0) {
                arr.push(mat[i1][j1]);
            }
        }
    }
    let newArr = num.filter(function(el) { return arr.indexOf(el) < 0; });
    return newArr;
}