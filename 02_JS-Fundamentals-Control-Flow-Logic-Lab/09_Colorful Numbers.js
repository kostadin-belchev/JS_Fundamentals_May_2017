function from1ToNInHTML (n) {
    n = Number(n);
    let stringToReturn = '';
    stringToReturn += "<ul>\n";
    for (let i = 1; i <= n; i++){
        if (i % 2 == 0) {
            stringToReturn += `\t<li><span style='color:blue'>${i}</span></li>\n`;
        }
        else{
            stringToReturn += `\t<li><span style='color:green'>${i}</span></li>\n`;
        }
    }
    stringToReturn += "<ul>\n";
    return stringToReturn;
}

console.log(from1ToNInHTML(10));
