function emailValidation (str) {
    const regex = /^[A-Za-z0-9]+@[a-z]+\.[a-z]+$/gm;
    let m;

    while ((m = regex.exec(str)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        
        // The result can be accessed through the `m`-variable.
        // m.forEach((match, groupIndex) => {
        //     console.log(`Found match, group ${groupIndex}: ${match}`);
        // });
        if (m.length > 0) {
            return 'Valid';
        }
    }
    return 'Invalid';
}

console.log(emailValidation('valid@email.bg'));
console.log(emailValidation('invalid@emai1.bg'));

