// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    // Your code goes here!
    // Return an object containing the minimum number of coins needed to make change
    let coins = {};
    let Error = {
        error: "You are rich, my friend! We don't have so much coins for exchange"
    }
    // H 50
    if (currency > 10000) {
        return Error;
    } else {


        if (currency > 0) {
            if (Math.floor(currency / 50) != 0) {
                coins.H = Math.floor(currency / 50);
                console.log(coins.H);
                currency = currency - coins.H * 50;
            }
            // Q 25
            if (Math.floor(currency / 25) != 0) {
                coins.Q = Math.floor(currency / 25);
                console.log(coins.Q);
                currency -= coins.Q * 25;
            }
            // D 10
            if (Math.floor(currency / 10) != 0) {
                coins.D = Math.floor(currency / 10);
                console.log(coins.D);
                currency -= coins.D * 10;
            }
            // N 5
            if (Math.floor(currency / 5) != 0) {
                coins.N = Math.floor(currency / 5);
                console.log(coins.N);
                currency -= coins.N * 5;
            }
            // P 1
            if (currency != 0) {
                coins.P = currency;
            }
        }
    }
    return coins;

}
