function getSum(m, n) {
    let sum = 0;
    for (m; m<=n; m++) {
        if (m%2===0) {
            sum +=m
        } else continue;

    }
    return sum;
}