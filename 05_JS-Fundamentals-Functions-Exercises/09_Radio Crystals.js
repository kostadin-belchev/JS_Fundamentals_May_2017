function radioCrystals (array) {
    let desiredThickness = array.shift();
    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        let currentThickness = element;
        let cutCounter = 0;
        let lapCounter = 0;
        let grindCounter = 0;
        let etchCounter = 0;
        let xrayCounter = 1;
        console.log(`Processing chunk ${element} microns`);
        // Cutting
        while (currentThickness > desiredThickness) { //it does one more cutting than it should currentThickness > desiredThickness
            if (cut(currentThickness) < desiredThickness) {
                break;
            }
            currentThickness = cut(currentThickness);
            cutCounter++;
        }
        if (cutCounter > 0) {
            console.log(`Cut x${cutCounter}`);
            currentThickness = transportingAndWashing(currentThickness);
        }

        // Lapping
        while (currentThickness > desiredThickness) {
            if (lap(currentThickness) < desiredThickness) break;
            currentThickness = lap(currentThickness);
            lapCounter++;
        }
        if (lapCounter > 0) {
            console.log(`Lap x${lapCounter}`);
            currentThickness = transportingAndWashing(currentThickness);
        }

        // Grinding
        while (currentThickness > desiredThickness) {
            if (grind(currentThickness) < desiredThickness) break;
            currentThickness = grind(currentThickness);
            grindCounter++;
        }
        if (grindCounter > 0) {
            console.log(`Grind x${grindCounter}`);
            currentThickness = transportingAndWashing(currentThickness);
        }

        // Etching
        while (currentThickness > desiredThickness) {
            if (etch(currentThickness) < desiredThickness) {
                // currentThickness = etch(currentThickness);
                // etchCounter++;
                break;
            }
            currentThickness = etch(currentThickness);
            etchCounter++;
        }
        if (etchCounter > 0) {
            console.log(`Etch x${etchCounter}`);
            currentThickness = transportingAndWashing(currentThickness);
        } 

        // Final adjustment
        if (currentThickness == desiredThickness) {
            console.log(`Finished crystal ${currentThickness} microns`);
        } else if (currentThickness < desiredThickness) {
            currentThickness = xray(currentThickness);
            console.log(`X-ray x${xrayCounter}`);
            console.log(`Finished crystal ${currentThickness} microns`);
        }
    }
    function cut (num) {
        return num * 0.25;
    }
    function transportingAndWashing (num) {
        console.log("Transporting and washing");
        return Math.floor(num);
    }
    function lap (num) {
        return num * 0.80;
    }
    function grind (num) {
        return (num - 20);
    }
    function etch(num) {
        return num - 2;
    }
    function xray(num) {
        return num + 1;
    }
}

//radioCrystals([1375, 50000]);
//radioCrystals([1000, 4000, 8100]);