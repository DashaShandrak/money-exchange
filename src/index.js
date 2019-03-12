// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency < 0) {
        ERROR = {};
        return(ERROR);
    }
    else if (currency >= 10000) {
        ERROR = {error: "You are rich, my friend! We don't have so much coins for exchange"};
        return (ERROR);
    }
    else {
        money = {}; // create new object
        H = currency / 50;
        H = Math.floor(H);
        if (H != 0) {
            money.H = H;
            currency = currency - 50 * H;
        }
        if (currency >= 25) {
            money.Q = 1;
            currency = currency - 25;
        }
        D = currency / 10;
        D = Math.floor(D);
        if (D !=0 ) {
            money.D = D;
            currency = currency - 10 * D;
        }
        if (currency >= 5) {
            money.N = 1;
            currency = currency - 5;
        }
        if (currency > 0) {
            money.P = currency;
        }
        return(money);
    }
}
