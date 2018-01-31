function scoreToHTML (str = '') {
    let objects = JSON.parse(str);
    let table = '<table>\n';
    table += '\t<tr><th>name</th><th>score</th></tr>\n'
    //objects;
    for (const obj of objects) {
        let name = htmlEscape(obj.name);
        table += `\t<tr><td>${name}</td><td>${obj.score}</td></tr>\n`
    }
    table += '</table>';
    return table;

    function htmlEscape (text) {
        return text.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    }
}

console.log(scoreToHTML('[{"name":"Pesho","score":479},{"name":"Gosho","score":205}]'));

