let num1 = 10;
let num2 = 20;
let result = document.querySelector("#result");

document.querySelector('#num1').textContent = num1;
document.querySelector('#num2').textContent = num2;

let add = document.querySelector('#add');
let sub = document.querySelector('#sub');
let div = document.querySelector('#div');
let mult = document.querySelector('#mult');

add.addEventListener('click', function () {
     let res = num1 + num2;
     result.textContent = "Result: " + res;
})

sub.addEventListener('click', function () {
     let res = num1 - num2;
     result.textContent = "Result: " + res;
})

div.addEventListener('click', function () {
     let res = num1 / num2;
     result.textContent = "Result: " + res;
})

mult.addEventListener('click', function () {
     let res = num1 * num2;
     result.textContent = "Result: " + res;
})