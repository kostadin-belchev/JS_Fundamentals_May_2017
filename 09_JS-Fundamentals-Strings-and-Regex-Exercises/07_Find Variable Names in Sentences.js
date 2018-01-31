function findVariables (str) {
    const regex = /\b_([A-Za-z0-9]+)\b/gm;
    let m;
    let variables = [];
    while ((m = regex.exec(str)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        
        // The result can be accessed through the `m`-variable.
        variables.push(m[1]);
    }
    return variables.join(',');
}

console.log(findVariables('The _id and _age variables are both integers.'));