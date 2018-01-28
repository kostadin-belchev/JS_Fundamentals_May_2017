function employeeData (array) {
    const regex = /^([A-Z][A-Za-z]*) - ([1-9][0-9]*) - (.*)$/gm;
    let m;

    for (let i = 0; i < array.length; i++) {
        while ((m = regex.exec(array[i])) !== null) {
            // This is necessary to avoid infinite loops with zero-width matches
            if (m.index === regex.lastIndex) {
                regex.lastIndex++;
            }
            
            // The result can be accessed through the `m`-variable.
            console.log(`Name: ${m[1]}`);
            console.log(`Position: ${m[3]}`);
            console.log(`Salary: ${m[2]}`);
        }
    }
}

employeeData(['Jonathan - 2000 - Manager',
    'Peter- 1000- Chuck',
    'George - 1000 - Team Leader',
    ])