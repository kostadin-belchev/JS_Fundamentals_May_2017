function fromJSONtoHMTLTable (JSONstring) {
    let objects = JSON.parse(JSONstring);
    let table = '<table>\n';
    let keysOfObj0 = Object.keys(objects[0]);
    //header with <th> tags
    table += '\t<tr>';
    for (const key of keysOfObj0) {
        table += `<th>${htmlEscape(key)}</th>`;
    }
    table += '</tr>\n';

    //main part of table with <td> tags
    for (const obj of objects) {
        let keys = Object.keys(obj);
        table += `\t<tr>`;
        for (const key of keys) {
            let value = htmlEscape(obj[key].toString());
            table += `<td>${value}</td>`;
        }
        table += `</tr>\n`
    }

    //last line of table
    table += '</table>';
    return table;

    function htmlEscape(text = '') {
        return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    }
}

console.log(fromJSONtoHMTLTable(`[{"Name":"Pesho <div>-a","Age":20,"City":"Sofia"},
{"Name":"Gosho","Age":18,"City":"Plovdiv"},{"Name":"Angel","Age":18,"City":"Veliko Tarnovo"}]`
));
