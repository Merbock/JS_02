'use strict';

const calculate = (sum, amount, promo) => {
    let sale = 0;

    if (amount > 10) {
        sale = sum * 0.03;
    }

    if (sum > 30000) {
        sale += (sum - 30000) * 0.15;
    }

    if (promo === 'METHED') {
        sale += sum * 0.1;
    }

    if (promo === 'G3H2Z1' && sale > 2000) {
        sale += 500;
    }

    return sum - sale;
}

console.log(calculate(40000, 11, 'METHED'));