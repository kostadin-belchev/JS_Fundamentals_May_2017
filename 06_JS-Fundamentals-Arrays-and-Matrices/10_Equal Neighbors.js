function equalNeighbours (matrix) {
    let counter = 0;
    for (let row = 0; row < matrix.length - 1; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            let element = matrix[row][col];
            if (element == matrix[row + 1][col]) // vertical neighbours
                counter++;
            
        }
    }   

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            let element = matrix[row][col];
            if (element == matrix[row][col + 1]) // horizontal neighbours
                counter++;
        }
    }

    return counter;
}
let matrix4 = 
 [
[2, 2, 5, 7, 4],
[4, 0, 5, 3, 4],
[2, 5, 5, 4, 2]];

let matrix1 = 
[['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '4', '2'],
['9', '8', '7', '5', '4']]

let matrix2 = 
[['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']]

 let matrix3 = 
 [['2', '2', '5', '7', '4'],
 ['4', '0', '5', '3', '4'],
 ['2', '5', '5', '4', '2']]

//console.log(equalNeighbours(matrix1));
console.log(equalNeighbours(matrix4)); // should be 5


