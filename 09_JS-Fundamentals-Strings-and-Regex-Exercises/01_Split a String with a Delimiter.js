function splitByDelimiter (str = '', delimiter) {
    let result = str.split(delimiter);
    return result.join('\n');
}

console.log(splitByDelimiter('One-Two-Three-Four-Five', 
    '-'
    ));
