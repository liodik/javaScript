const m = 4;
const n = 15;
let result = 1;
 for (let i=m; i<=n; i++) {
     if(i%2===1) {
         result *= i;
         i++;
     }
    result;
 }
 console.log("Result: " + result);