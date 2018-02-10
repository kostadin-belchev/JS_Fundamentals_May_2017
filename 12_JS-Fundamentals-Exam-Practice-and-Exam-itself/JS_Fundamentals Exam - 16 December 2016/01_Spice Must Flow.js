function spices (string = '') {
    let spice = 0; 
    let yield = Number(string); // starting yield
    let days = 0;

    while (yield >= 100) {

        days++;
        days;
        yield;
        spice += yield;
        spice;
        
        if (spice >= 26) { //  Note that the workers cannot consume more spice than there is in storage
            spice -= 26;
        } 
        
        spice;
        
        yield -= 10;
        yield;
    }

    if (spice >= 26) {
        spice -= 26;
    } 
    console.log(days);
    console.log(spice);
}

spices('111');