function restaurantBill (array = []) {
    let products = [];
    let totalSum = 0;
    for (let i = 0; i < array.length; i++) {
        if (i % 2 == 0) {
            let product = array[i];
            products.push(product);
        } else {
            let price = Number(array[i]);
            totalSum += price;
        }
    }
    return `You purchased ${products.join(", ")} for a total sum of ${totalSum}`
}
console.log(restaurantBill(['Beer Zagorka', '2.65', 'Tripe soup', '7.80','Lasagna', '5.69']));
