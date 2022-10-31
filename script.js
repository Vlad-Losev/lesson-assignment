'use strict';

const nameproduct = prompt('Какое наименование товара?');
console.log(typeof nameproduct);

const quantitygoods = Number(prompt('Какое количествро товара?'));
// QuantityGoods = Number(QuantityGoods);
console.log(typeof quantitygoods);
  // , parseInt(QuantityGoods, Number));

if (quantitygoods !== Number) {
  alert('Вы ввели некорректные данные')
}

const productcategory = prompt('Какая категория товара?');
console.log(typeof productcategory);

const priceproduct = Number(prompt('Какая цена товара?'));
console.log(typeof priceproduct);

if (priceproduct === Number) {
  alert('Вы ввели некорректные данные')
}

const totalamount = priceproduct * quantitygoods;

console.log('В корзине', quantitygoods, nameproduct,'на сумму', totalamount, 'золотых');

