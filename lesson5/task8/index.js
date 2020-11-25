function findDivCount(a, b, n) {
    let number = 0;
    for (a; a<=b; a++) {
        if (a%n===0) {
            number +=1;
        } else continue;
    }
    return number;

}