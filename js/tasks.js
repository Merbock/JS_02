'use strict';

const rain = Math.round(Math.random());
const mathResult = +prompt('Введите кол-во баллов по математике');
const rusResult = +prompt('Введите кол-во баллов по русскому');
const techResult = +prompt('Введите кол-во баллов по информатике');
const needScore = 265;

if (rain) {
    console.log('Пошёл дождь. Возьмите зонт!');
} else {
    console.log('Дождя нет!');
}

if ((mathResult + rusResult + techResult) >= needScore) {
    console.log('Поздравляю, вы поступили на бюджет!');
} else {
    console.log('К сожалению, вам не хватило баллов, вы не поступили');
}

const money = +prompt('Сколько денег вы хотите снять?');

if (money < 100) {
    console.log('Банкомат выдаёт только от 100 рублей')
} else {
    console.log(`Пожалуйста, заберите свои ${money} рублей`);
}






