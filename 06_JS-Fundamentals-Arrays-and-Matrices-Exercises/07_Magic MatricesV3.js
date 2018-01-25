function magicMatrix (matrix = []) {
    let sum = matrix[0].reduce((a, b) => a + b);
    let isMagic = true;

    //check the rows
    for (let row = 1; row < matrix.length; row++) {
        if(matrix[row].reduce((a, b) => a + b) != sum) {
            isMagic = false;
            break;
        }
    }

    // check the columns
    for (let col = 0; col < matrix.length; col++) {
        let sumColumn = 0;
        for (let row = 0; row < matrix.length; row++) {
            const element = matrix[row][col];
            sumColumn += element;
        }
        if (sumColumn != sum) {
            isMagic = false;
            break;
        }
    }

    return isMagic;
}