function magicMatrix (matrix = []) {
    let isMagic = true;
    let sum = matrix[0].reduce((a,b) => a + b); //the sum of the first row or first array if you wish

    for (let row = 1; row < matrix.length; row++) {
        let columnSum = 0;                                   // RUNTIME ERROR
        for (let col = 0; col < matrix.length; col++) { //the runtime error was for a col < matrix[col].length; instead of a col < matrix.length;
            columnSum += Number(matrix[col][row]); //we are reversing them here so we can go through the column, so rows are increasing while col stays the same
        }
        if (sum != columnSum) {
            isMagic = false;
            break;
        }
    }
    return isMagic;
}

//console.log(magicMatrix([[4, 5, 6],[6, 5, 4],[5, 5, 5]]));


//    console.log(magicMatrix([
//     [11, 32, 45],
//     [21, 0, 1],
//     [21, 1, 1]]
//    ));

// console.log(magicMatrix([[1, 0, 0],
//     [0, 0, 1],
//     [0, 1, 0]]
//    ));

   