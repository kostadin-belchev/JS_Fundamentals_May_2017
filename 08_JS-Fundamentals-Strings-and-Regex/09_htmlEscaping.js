function htmlEscape (array) {
    //test commit
    let output = '<ul>\n';
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        let replacedText = element.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
        output += '\t<li>' + replacedText + '</li>\n';
    }
    output += '</ul>';
    return output;
}

console.log(htmlEscape(['<b>unescaped text</b>', 'normal text']));
