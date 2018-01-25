function biggestNumInMatrx (matrix) {
    
    let biggestNum = Number.NEGATIVE_INFINITY;

    matrix.forEach((row) => row.forEach( (e) => {
        if(e > biggestNum) {
            biggestNum = e;
        }
    }));

    return biggestNum;
}

//Version 2
function biggestNumInMatrxV2 (matrix) {
    let biggestNum = Number.NEGATIVE_INFINITY;

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            let element = matrix[row][col];
            if(element > biggestNum)
                biggestNum = element;
        }
    }

    return biggestNum;
}

let matrix1 = [[20, 50, 10],
[8, 33, 145]];

let matrix2 = [[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]];

console.log(biggestNumInMatrx(matrix1));
console.log(biggestNumInMatrxV2(matrix2));



