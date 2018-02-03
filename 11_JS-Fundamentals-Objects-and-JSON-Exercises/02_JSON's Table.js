function JSONsTable(array = []) {
    let table = '<table>\n';
    for (const row of array) {
        let currentEmployee = JSON.parse(row);
        let currentEmployeeName = currentEmployee.name;
        let currentEmployeePosition = currentEmployee.position;
        let currentEmployeeSalary = currentEmployee.salary;
        table += '\t<tr>\n';
        table += `\t\t<td>${htmlEscape(currentEmployeeName)}</td>\n`;
        table += `\t\t<td>${htmlEscape(currentEmployeePosition)}</td>\n`;
        table += `\t\t<td>${currentEmployeeSalary}</td>\n`;
        table += '\t<tr>\n'; // see in the exmpale it is only <tr> but I think it should be </tr>
    }
    table += '</table>'

    return table;
    function htmlEscape(text = '') {
        return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    }
}

console.log(JSONsTable([
`{"name":"Pesho","position":"Promenliva","salary":100000}`,
`{"name":"Teo","position":"Lecturer","salary":1000}`,
`{"name":"Georgi","position":"Lecturer","salary":1000}`
]));