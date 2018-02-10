function pyramidMaterialsAndHeight (base, increment) {
    let originalBase = base;
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let steps = 1; // or Math.ceil(base / 2)

    while (true) {
        if(base - 2 <= 0 ) {
            break;
        }
        steps++;
        base -= 2;
    }
    steps;
//should be 6, 6, 12, 6

    base = originalBase;
    for (let step = 1; step < steps; step++) {
        stone += (base - 2)*(base - 2)*increment;
        stone;
        if (step % 5 == 0) {
            lapis += increment*(base*4 - 4);
        } else {
            marble += increment*(base*4 - 4); 
        }
        base -= 2//*increment;
    }
    
    gold = base * base * increment;
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(steps*increment)}`);
}

//pyramidMaterialsAndHeight(11, 0.75)
//pyramidMaterialsAndHeight(11, 1)
//pyramidMaterialsAndHeight(23, 0.5)
pyramidMaterialsAndHeight(12, 1)