function printHTMLMultiplicationTable (n) {
    let table = '<table border="1">\n';
    //heading row
    let headingLine = '\t<tr><th>x</th>';
    for (let i = 1; i <= n; i++) {
        headingLine += `<th>${i}</th>`;
    }
    headingLine += '</tr>\n'
    table += headingLine;
    
    //middle rows
    for (let j = 1; j <= n; j++) {
        let line = `\t<tr><th>${j}</th>`;
        for (let i = 1; i <= n; i++) {
            line += `<td>${i*j}</td>`;
        }
        line += '</tr>\n'
        table += line;
    }

    //final row
    table += "</table>";
    return table;
}

console.log(printHTMLMultiplicationTable(5));
 