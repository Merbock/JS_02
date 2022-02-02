'use strict';

const goodNameUser = prompt('Наименование товара');
const goodAmountUser = +prompt('Количество товара');
const goodCategoryUser = prompt('Категория товара');
const goodPriceUser = +prompt('Цена товара');

if (!goodAmountUser || !goodPriceUser) {
    console.log('Вы ввели некорректные данные');
}

// console.log('Наименование товара: ' + typeof goodNameUser);
// console.log('Количество товара: ' + typeof +goodAmountUser);
// console.log('Категория товара: ' + typeof goodCategoryUser);
// console.log('Цена товара: ' + typeof +goodPriceUser);
// console.log(`На складе ${goodAmountUser} единицы товара '${goodNameUser}' на сумму ${goodPriceUser} деревянных`);
