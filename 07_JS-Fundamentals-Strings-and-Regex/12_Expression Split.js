function expressionSplitter (str ='') {
    //const regex = /[\\t|\\n|\ |;|\(|\)|\,|\.]/gm; // mine works 100% in Judge
    const regex = /[\s,;.()]/gm; // Tseko's, also works 100%

    let elements = str.split(regex).filter(s => s!='');
    return elements.join('\n');
}

console.log(expressionSplitter('let sum = 1 + 2;if(sum > 2){\tconsole.log(sum);}'));
//console.log(expressionSplitter('let sum = 4 * 4,b = "wow";'));