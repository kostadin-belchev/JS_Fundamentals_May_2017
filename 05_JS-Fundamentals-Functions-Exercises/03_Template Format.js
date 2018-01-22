function templateFormatXML (array) {
    
    //start of template
    let template = '<?xml version="1.0" encoding="UTF-8"?>\n';
    template += '<quiz>\n';

    //middle part that is repeated array.lenght()/2 times
    for (let i = 0; i < array.length; i+=2) {
        let [question, answer] = [array[i], array[i + 1]];
        //question part
        template += '\t<question>\n';
        template += `\t\t${question}\n`
        template += '\t</question>\n';
        //answer part
        template += '\t<answer>\n';
        template += `\t\t${answer}\n`
        template += '\t</answer>\n';
    }
    //closing quiz tag
    template += '</quiz>\n';
    return template;
}

console.log(templateFormatXML(["Dry ice is a frozen form of which gas?",
"Carbon Dioxide",
"What is the brightest star in the night sky?",
"Sirius", "Who was the forty-second president of the U.S.A.?",
"William Jefferson Clinton"]
));
