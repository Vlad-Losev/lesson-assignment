'use strict';

// let NameProduct = 'bananas';
// let QuantityGoods = 5;
// let ProductCategory = 'FoodProduct';
// let PriceProduct = 20;

// console.log('NameProduct:','bananas');

// console.log(PriceProduct * QuantityGoods);

// console.log(20 * 5);

// let TotalAmount;

// console.log(TotalAmount = PriceProduct * QuantityGoods);

const NameProduct = prompt('Какое наименование товара?');
console.log(typeof NameProduct);

const QuantityGoods = prompt('Какое количествро товара?');
console.log(typeof QuantityGoods, parseInt(QuantityGoods, Number));

const ProductCategory = prompt('Какая категория товара?');
console.log(typeof ProductCategory);

const PriceProduct = prompt('Какая цена товара?');
console.log(typeof PriceProduct);

const TotalAmount = PriceProduct * QuantityGoods;

console.log('В корзине', QuantityGoods, NameProduct,'на сумму', TotalAmount, 'золотых');