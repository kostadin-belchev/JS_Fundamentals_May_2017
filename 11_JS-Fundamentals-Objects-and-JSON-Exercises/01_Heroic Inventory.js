function heroicInventory (array = []) {
    let heroData = [];
    for (let i = 0; i < array.length; i++) {
        const currentHeroArguments = array[i].split(' / ');
        
        let currentHeroName = currentHeroArguments[0];
        let currentHeroLevel = Number(currentHeroArguments[1]);
        let currentHeroItems = [];
//If there are any items in the input, the variable will be set to the split version of them. If not, it will just remain an empty array, as it is supposed to.
        if (currentHeroArguments.length > 2) {
            currentHeroItems = currentHeroArguments[2].split(', '); 
        }
        
        let hero = {
            name: currentHeroName,
            level: currentHeroLevel,
            items: currentHeroItems
        };

        heroData.push(hero);
    }

    return JSON.stringify(heroData);
}

console.log(heroicInventory(['Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
    ]));
