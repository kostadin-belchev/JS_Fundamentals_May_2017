function p (array, commands) {
    let matrix = [];
    let pullutedAreas = [];
    for (const line of array) {
        let columns = line.split(' ').map(Number)
        matrix.push(columns);
    }
    for (const line of commands) {
        let [command, value] = line.split(' ');
        if (command == 'breeze') {
            for (let row = 0; row < matrix.length; row++) {
                matrix[value][row] = matrix[value][row] - 15;
                if (matrix[value][row] < 0){
                    matrix[value][row] = 0;
                }
            }
            //matrix;
        } else if (command == 'gale'){
            for (let row = 0; row < matrix.length; row++) {
                matrix[row][value] = matrix[row][value] - 20;
                if (matrix[row][value] < 0){
                    matrix[row][value] = 0;
                }
            }
            //matrix;
        } else if (command == 'smog') {
            for (let row = 0; row < matrix.length; row++) {
                for (let col = 0; col < matrix[row].length; col++) {
                    matrix[row][col] = matrix[row][col] + Number(value);
                }
            }
            //matrix;
        }
    }
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] >= 50){
                pullutedAreas.push(`[${row}-${col}]`)
            }
        }
    }

    if (pullutedAreas.length < 0) {
        console.log(`No polluted areas`);
    } else {
        console.log(`Polluted areas: ${pullutedAreas.join(', ')}`);
        
    }
}

// p([
//     "5 7 72 14 4",
//     "41 35 37 27 33",
//     "23 16 27 42 12",
//     "2 20 28 39 14",
//     "16 34 31 10 24",
//   ],
//   ["breeze 1", "gale 2", "smog 25"]
//   )