let sum = 0;
for (let i=1; i<=1000; i++) {
    sum +=i;
}
let remaind = sum%1234;

let trunc = Math.trunc(sum/1234);
let result = trunc > remaind ? true : false;
console.log(result);