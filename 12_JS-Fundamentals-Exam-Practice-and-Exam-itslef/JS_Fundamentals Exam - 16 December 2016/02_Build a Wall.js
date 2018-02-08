function buildAWall (array = []) {
    let dailyUsedConcrete = [];
    array = array.map(Number);
    while (true) {
        // start of concete added each day
        let concreteAddedForTheDay = 0;
        for (let i = 0; i < array.length; i++) {
            if (array[i] < 30 ) { // array[i] is the current height for the current crew
                array[i]++;
                concreteAddedForTheDay += 195;
            }
        }
        // end of concete added each day

        if (concreteAddedForTheDay == 0) { //means wall is finised, all teams have stopped work
            break;
        }

        dailyUsedConcrete.push(concreteAddedForTheDay);
    }
    console.log(dailyUsedConcrete.join(', '));
    
    console.log(`${(dailyUsedConcrete.reduce((a,b)=> a + b))*1900} pesos`);
}

buildAWall(['21', '25', '28']);