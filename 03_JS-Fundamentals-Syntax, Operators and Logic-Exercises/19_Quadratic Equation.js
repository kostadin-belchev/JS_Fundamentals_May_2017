function quadraticEquation (a, b, c) {
    // Find the discriminant d = b2 - 4 a c 
    let disc = (b * b) - (4 * a * c);
    
    if (disc > 0) { //We have positive discriminant (disc > 0), so the equation has two real roots
        let x1 = (-b + Math.sqrt(disc))/(2*a);
        let x2 = (-b - Math.sqrt(disc))/(2*a);
        console.log(Math.min(x1, x2));
        console.log(Math.max(x1, x2));
    } else if (disc == 0) { //We have zero discriminant (disc = 0), so the equation has only one real root
        let x = -(b/(2*a));
        console.log(x);
        
    } else if (disc < 0) { //We have negative discriminant (d < 0), so the equation has no real roots
        console.log('No');
    }
}

quadraticEquation(6, 11, -35);
//quadraticEquation([1, -12, 36]);
//quadraticEquation([5, 2, 1]);