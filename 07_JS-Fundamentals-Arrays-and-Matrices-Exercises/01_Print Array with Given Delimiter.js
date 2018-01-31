function printArrayWithDelimiter (array) {
    let delimiter = array.pop();
    return array.join(`${delimiter}`);
}
// Version 2
array => {
    let delimiter = array.pop();
    return array.join(`${delimiter}`);
}

console.log(printArrayWithDelimiter(['One',
    'Two',
    'Three',
    'Four',
    'Five',
    '-',
    ]));
