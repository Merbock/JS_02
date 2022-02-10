'use strict';

const stringModify = (str) => {
    return str[0].toUpperCase() + str.substring(1).toLowerCase();
}

console.log(stringModify('привет Мир'));
