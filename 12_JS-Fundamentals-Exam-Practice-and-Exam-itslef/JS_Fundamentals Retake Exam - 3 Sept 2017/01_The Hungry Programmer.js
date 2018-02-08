function theHungryProgrammer (meals = [], commands = []) {
    let mealsEaten = 0;
    for (const commandArgs of commands) {
        let commandTokens = commandArgs.split(' ');
        let command = commandTokens[0];
        
        switch (command) {
            case 'Serve':
                if (meals.length < 1)
                    break;
                console.log(`${meals.pop()} served!`);
                break;
            case 'Add':
                if (commandTokens.length <= 1)
                    break;
                let mealToAdd = commandTokens[1];
                meals.unshift(mealToAdd);
                break;
            case 'Shift':
                if (commandTokens.length <= 2)
                    break;
                let firstIndex = commandTokens[1];
                let secondIndex = commandTokens[2];
                let isValidIndexes = firstIndex != secondIndex && firstIndex >= 0 && firstIndex < meals.length 
                    && secondIndex >= 0 && secondIndex < meals.length;
                if (isValidIndexes) {
                    let temp = meals[firstIndex];
                    meals[firstIndex] = meals[secondIndex];
                    meals[secondIndex] = temp;
                }
                break;
            case 'Eat':
                if (meals.length < 1)
                    break;
                console.log(`${meals.shift()} eaten`);
                mealsEaten++;
                break;
            case 'Consume':
                if (commandTokens.length <= 2)
                    break;
                let startIndex = commandTokens[1];
                let endIndex = commandTokens[2];
                let isValidIndex = startIndex >= 0 && startIndex < meals.length 
                    && endIndex >= 0 && endIndex < meals.length && startIndex < endIndex;
                if (isValidIndex) {
                    let portionsToEat = endIndex - startIndex + 1;
                    meals.splice(startIndex, portionsToEat);
                    mealsEaten += portionsToEat;
                    console.log(`Burp!`);
                }
                break;
            case 'End':
                    break;
            default:
                break;
        }
        if (command == 'End')
            break;
    }

    if (meals.length > 0) {
        console.log(`Meals left: ${meals.join(', ')}`);
    } else {
        console.log(`The food is gone`);
    }
    console.log(`Meals eaten: ${mealsEaten}`);
}

theHungryProgrammer(['bacon', 'veggies', 'chicken', 'turkey', 'eggs'],
[   'Shift 2 9',
    'Eat',
    'Serve',
    'End',
    'Serve',
])