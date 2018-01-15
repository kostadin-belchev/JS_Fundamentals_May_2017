function filterByAge (minAge, name1, age1, name2, age2) {
    let person1 = {name: name1, age: age1};
    let person2 = {name: name2, age: age2};
    let arrayOfPersons = [person1, person2];

    arrayOfPersons.forEach(element => {
        if (element.age >= minAge) {
            console.log(element);
            
        }
    });
}