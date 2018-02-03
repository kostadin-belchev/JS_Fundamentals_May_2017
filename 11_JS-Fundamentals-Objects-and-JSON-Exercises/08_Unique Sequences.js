function uniqueSeqs (input = []) {
    let uniqueArrays = new Map();
    for (const element of input) {
        let array = JSON.parse(element);
        let sortedArray = array.sort((a, b) => b - a);
        let stringToAdd = `[${array.join(', ')}]`
        if (!uniqueArrays.has(stringToAdd)) {
            uniqueArrays.set(stringToAdd, array.length);
        }
    }
    //uniqueArrays;

    //sorting and returning
    //After storing all arrays, your program should print them back in ascending order based on their length, 
    //if two arrays have the same length they should be printed in order of being received from the input. 
    console.log(Array.from(uniqueArrays.keys()).sort((a, b) => uniqueArrays.get(a) - uniqueArrays.get(b)).join('\n'))
}

uniqueSeqs([
'[-3, -2, -1, 0, 1, 2, 3, 4]',
'[10, 1, -17, 0, 2, 13]',
'[4, -3, 3, -2, 2, -1, 1, 0]',
])