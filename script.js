'use strict';

const nameproduct = prompt('Какое наименование товара?');
console.log(typeof nameproduct);

const quantitygoods = Number(prompt('Какое количествро товара?'));
console.log(typeof quantitygoods);
  // , parseInt(quantitygoods, Number));

const productcategory = prompt('Какая категория товара?');
console.log(typeof productcategory);

const priceproduct = Number(prompt('Какая цена товара?'));
console.log(typeof priceproduct);

const totalamount = priceproduct * quantitygoods;

console.log('В корзине', quantitygoods, nameproduct,'на сумму', totalamount, 'золотых');