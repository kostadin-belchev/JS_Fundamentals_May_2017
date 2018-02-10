function format (str = []) {
    str = str[0]; //The input data is passed to your function as an array, containing a single string element.

    // Having a single space (" ") only after every one of those symbols: ".,!?:;" is obligatory.
    const firstRegex = /(\.|\,|\!|\:|\?|\;)\s*/gm;
    str = str.replace(firstRegex, firstReplacer)
    function firstReplacer (match, p1, p2) {
        p1;
        return p1 + ' ';
    }

    // Having one or more spaces (" ") before every one of those symbols: ".,!?:;" is forbidden.
    const secondRegex = /\s+(\.|\,|\!|\:|\?|\;)/gm;
    // str = str.replace(dotRegex2, `.`)
    // str = str.replace(commaRegex2, ',')
    // str = str.replace(exclamantionRegex2, '!')
    // str = str.replace(questionRegex2, '?')
    // str = str.replace(colonRegex2, ':')
    // str = str.replace(semiColonRegex2, ';')
    function secondReplacer (match, p1) {
        return p1;
    }
    str = str.replace(secondRegex, secondReplacer)
    //A text inside of quotes should be trimmed (e.g. " text "  "text")
    const textRegex = /"([^"]*)"/gm;
    function replacerText (match, p1, p2, p3) {
        p1;
        return `"${p1.trim()}"`;
    }
    str = str.replace(textRegex, replacerText)

    //If there is a dot (".") followed by spaces, then by any digit(s) this means that the text might be a number or a date
    // – make sure that there are no following spaces after the dot.
    const numberRegex = /(\.)(\s+)(\d+)/gm;
    function replacerNumbers (match, p1, p2, p3) {
        return [p1, p3].join('');
    }
    str = str.replace(numberRegex, replacerNumbers);

    return str;
}

console.log(format([`Terribly formatted text . With chaotic spacings." Terrible quoting "! Also
this date is pretty confusing : 20 . 12. 16 .
`]))