function createAnObject (params) {
    let obj = {};
    for (let i = 0; i < params.length; i+=2) {
        let element1 = params[i];
        let element2 = params[i + 1];
        obj[element1] = element2;
    }
    return obj;
}

console.log(createAnObject(['name', 'Pesho', 'age', '23', 'gender', 'male']));
console.log(createAnObject(['ssid', '90127461', 'status', 'admin', 'expires', '600']));
