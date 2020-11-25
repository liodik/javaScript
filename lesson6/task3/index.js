function getSpecialNumbers(m, n) {
    let arrayOfMultiples = [];
    for (let i = m; i < n; i++) {
if (i%3===0) {
    arrayOfMultiples.push(i);
}
    }
    return arrayOfMultiples;
    }
    
