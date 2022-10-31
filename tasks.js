'use strickt'

let rain = Math.random();

rain = Math.round(rain);

// console.log(Math.round(rain));

console.log(rain);

if (rain === 0) {
  alert("Дождя нет!")
} 

if (rain === 1) {
  alert("Пошёл дождь. Возьмите зонт!")
}



const mat = Number(prompt('Введите кол-во баллов по математике: '));

const rusLang = Number(prompt('Введите кол-во баллов по русскому языку:'));

const Informatics = Number(prompt('Введите кол-во баллов по информатике:'));

const totalPoints = mat + rusLang + Informatics;

console.log(totalPoints);

if (totalPoints >= 265) {
  alert('Поздравляю, вы поступили на бюджет!')
} else {
  alert('Вы недостаточно умны для нас')
}



const howMany = Number(prompt('Какую сумму вы хотите снять?'));

if (howMany % 100) {
  console.log ('Введите сумму кратную 100')
} else {
  console.log ('Возьмите деньги')
}