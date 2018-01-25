function sumOfMainAndSecondaryDiagonals (matrix) {
    let mainSum = 0;
    let secondarySum = 0;
    for (let row = 0; row < matrix.length; row++) {
        mainSum += matrix[row][row];
        secondarySum += matrix[row][matrix.length-row-1];
    }
    return mainSum + ' ' + secondarySum;
}
let matrix3 = [
[3, 5, 17, 2],
[-1, 7, 14, 2],
[1, -8, 89, 2],
[2, 2, 2, 2]
];

let matrix1 = [
[20, 40],
[10, 60]
];

let matrix2 = [
[3, 5, 17],
[-1, 7, 14],
[1, -8, 89]
];

console.log(sumOfMainAndSecondaryDiagonals(matrix3));
console.log(sumOfMainAndSecondaryDiagonals(matrix2));

