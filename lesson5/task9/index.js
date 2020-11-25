    function getPrimes(n) {
        for (let i=n; i>1;i--) {
            if (n%i!==0) {
                console.log("true");
            } else {
                console.log("false");
            }
        }
    }
