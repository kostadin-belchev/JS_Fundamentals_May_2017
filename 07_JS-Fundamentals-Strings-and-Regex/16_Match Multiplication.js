function matchMultiplication (str) {
    const regex = /(-?\d*)\s*\*\s*(-?[0-9]*\.[0-9]+)/gm;
    //const regex = /(-*\d+)\s*\*\s*(\-*\d+\.*\d*)/gm;
    let m;
    
    while ((m = regex.exec(str)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === regex.lastIndex) {
            regex.lastIndex++;
        }
        // The result can be accessed through the `m`-variable.
        let multiplication = Number(m[1]) * Number(m[2]);
        str = str.replace(m[0], multiplication);
    }
    console.log(str);
}

matchMultiplication('My bill is: 4 * 2.50 (beer); 12* 1.50 (kepab); 1  *4.50 (salad); 2  * -0.5 (deposit).')