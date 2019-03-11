'use strict';

// В магазине яблоки по 12,5; завтра скидка 15% (скидка может меняться)
// также пришли апелсины по 12,5 + наценка 15%, цена может меняться. Расчитать цены

let discount = 15 / 100;
let salePrice;

function priceApples(price) {
    return salePrice = price - price * discount;
}
priceApples(12.5);
console.log(salePrice);
console.log(`Цена яблок - ${ Math.round(salePrice * 100) / 100 }грн`);


let retailMargin = 15 / 100;
let marginPrice;

function priceOranges(price) {
    return marginPrice = price + price * retailMargin;
}
priceOranges(12.5);
console.log(marginPrice);
console.log(`Цена апельсинов - ${Math.round(marginPrice * 100) / 100 }грн`);


// 2. Сreate a price tag
//Ukrainian apples.
//price: 12,50UA`;

let priceOne = `Ukrainian apples.
 price: 12,50UA`;

let priceTwo = `Ukrainian apples\nprice: 12,50UA`;

console.log(priceOne);
console.log(priceTwo);
