function game (arrayOfObjs = [], matrix = []) {
    let kingdoms = new Map();
    for (const obj of arrayOfObjs) {
        let kingdomName = obj.kingdom;
        let generalName = obj.general;
        let armyNumbers = obj.army;
        
        if (!kingdoms.has(kingdomName)) {
            kingdoms.set(kingdomName, new Map());
        }
        if (!kingdoms.get(kingdomName).has(generalName)) {
            kingdoms.get(kingdomName).set(generalName, {army:0, wins:0, losses:0});
        }
        let oldArmy = kingdoms.get(kingdomName).get(generalName).army;
        let x = kingdoms.get(kingdomName).get(generalName);
        let newArmy = oldArmy + armyNumbers;
        kingdoms.get(kingdomName).set(generalName, {army: newArmy, wins: 0, losses: 0});
    }
    //kingdoms;

    for (let i = 0; i < matrix.length; i++) {
        const battle = matrix[i];
        let attackingKingdomName = battle[0];
        let attackingGeneralName = battle[1];
        let defendingKingdomName = battle[2];
        let defendingGeneralName = battle[3];
        let attackingGeneral = kingdoms.get(attackingKingdomName).get(attackingGeneralName);
        let defendingGeneral = kingdoms.get(defendingKingdomName).get(defendingGeneralName);
        if (attackingKingdomName != defendingKingdomName) {
            if (attackingGeneral.army > defendingGeneral.army) { // attackingGeneral wins
                attackingGeneral.wins++;
                defendingGeneral.losses++;
                attackingGeneral.army = Math.round(attackingGeneral.army*1.1);
                defendingGeneral.army = Math.round(defendingGeneral.army*0.9);
                //rounding
            } else if (attackingGeneral.army < defendingGeneral.army){ //defendingGeneral wins
                attackingGeneral.losses++;
                defendingGeneral.wins++;
                attackingGeneral.army = Math.round(attackingGeneral.army*0.9)
                defendingGeneral.army = Math.round(defendingGeneral.army*1.1)
            } // If there is a draw, do not do anything
        }
    }
    kingdoms;

    let kingdomsAndWins = new Map();
    for (const [kingdomName, generals] of kingdoms) {
        let kingdomWinsCount = 0;
        let kingdomLossesCount = 0;
        for (const [generalName, generalData] of generals) {
            kingdomWinsCount += generalData.wins;
            kingdomLossesCount += generalData.losses;
        }
        let kingdomObj = {wins: kingdomWinsCount, losses:kingdomLossesCount, name: kingdomName};
        kingdomsAndWins.set(kingdomName, kingdomObj);
    }
    kingdomsAndWins;


    kingdomsAndWins = [...kingdomsAndWins].sort((a, b) => {
        
        let objA = a[1];
        let objB = b[1];
        let winsA = objA.wins;
        let winsB = objB.wins;
        let lossesA = objA.losses;
        let lossesB = objB.losses;
        let kingdomNameA = objA.name;
        let kingdomNameB = objB.name;

        if (winsA == winsB) {
            if (lossesA == lossesB) {
                return kingdomNameA.localeCompare(kingdomNameB);
            } else {
                return lossesA - lossesB;
            }
        } else {
            return winsB - winsA;
        }
    });
    let winningKingDome = kingdomsAndWins[0][0];

    //SORTING
    let sortedGenerals = [...kingdoms.get(winningKingDome)].sort((a, b) => {
        let generalNameA = a[0];
        let generalNameB = b[0];
        let generalDataA = a[1];
        let generalDataB = b[1];
        let generalArmyA = generalDataA.army;
        let generalArmyB = generalDataB.army;
        return generalArmyB - generalArmyA;
    })
    sortedGenerals;

    //PRINTING
    console.log(`Winner: ${winningKingDome}`);
    for (const [generalName, generalData] of sortedGenerals) {
        console.log(`/\\general: ${generalName}`);
        console.log(`---army: ${generalData.army}`);
        console.log(`---wins: ${generalData.wins}`);
        console.log(`---losses: ${generalData.losses}`);
    }
}



game([ { kingdom: "Maiden Way", general: "Merek", army: 5000 },
{ kingdom: "Stonegate", general: "Ulric", army: 4900 },
{ kingdom: "Stonegate", general: "Doran", army: 70000 },
{ kingdom: "YorkenShire", general: "Quinn", army: 0 },
{ kingdom: "YorkenShire", general: "Quinn", army: 2000 } ],
[ ["YorkenShire", "Quinn", "Stonegate", "Doran"],
["Stonegate", "Ulric", "Maiden Way", "Merek"] ]
)