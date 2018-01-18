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

function calcSum() {
    let num1 = document.getElementsByName('num1')[0].value;
    let num2 = document.getElementsByName('num2')[0].value;
    let sum = Number(num1) + Number(num2);
    document.getElementsByName('sum')[0].value = sum;
  }
  

//document.body.innerHTML = printHTMLMultiplicationTable(5);

console.log(printHTMLMultiplicationTable(5));
 