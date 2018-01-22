function roadRadar (array) {
    let [speed, zoneString] = array;
    let speedLimit = getSpeedLimitByZone(zoneString);
    let speedDelta = speed - speedLimit;

    if (speedDelta > 0 && speedDelta <= 20) {
        return 'speeding';
    } else if (speedDelta > 20 && speedDelta <= 40) {
        return 'excessive speeding'
    } else if (speedDelta > 40) {
        return 'reckless driving';
    }


    function getSpeedLimitByZone (zoneString) {
        let speedLimit;
        if (zoneString == 'motorway') {
            speedLimit = 130;
        } else if (zoneString == 'interstate') {
            speedLimit = 90;
        } else if (zoneString == 'residential') {
            speedLimit = 20;
        } else if (zoneString == 'city') {
            speedLimit = 50;
        }
        return speedLimit;
    }
}

//console.log(roadRadar([40, city]));
console.log(roadRadar([21, 'residential']));
console.log(roadRadar([120, 'interstate']));
console.log(roadRadar([200, 'motorway']));

