let plus = document.querySelectorAll(".fa-plus");
let minus = document.querySelectorAll(".fa-minus");
let amountShow = document.querySelectorAll(".amount-show");
let num1 = 0;
let num2 = 0;
let num3 = 0;
let num4 = 0;

amountShow[0].innerHTML = 0;
amountShow[1].innerHTML = 0;
amountShow[2].innerHTML = 0;
amountShow[3].innerHTML = 0;

console.log(plus);
console.log(minus);
console.log(amountShow);

function increase1() {
  amountShow[0].innerHTML = num1 + 1;
  num1 = Number(amountShow[0].innerHTML);
}

function increase2() {
  amountShow[1].innerHTML = num2 + 1;
  num2 = Number(amountShow[1].innerHTML);
}

function increase3() {
  amountShow[2].innerHTML = num3 + 1;
  num3 = Number(amountShow[2].innerHTML);
}

function increase4() {
  amountShow[3].innerHTML = num4 + 1;
  num4 = Number(amountShow[3].innerHTML);
}




function decrease1() {

  if (num1 === 0) {
    amountShow[0].innerHTML = 0;
  } else {
    amountShow[0].innerHTML = num1 - 1;
  }
  num1 = Number(amountShow[0].innerHTML);
}

function decrease2() {
  if (num2 === 0) {
    amountShow[1].innerHTML = 0;
  } else {
    amountShow[1].innerHTML = num2 - 1;
  }
  num2 = Number(amountShow[1].innerHTML);
}

function decrease3() {
  if (num3 === 0) {
    amountShow[2].innerHTML = 0;
  } else {
    amountShow[2].innerHTML = num3 - 1;
  }
  num3 = Number(amountShow[2].innerHTML);
}

function decrease4() {
  if (num4 === 0) {
    amountShow[3].innerHTML = 0;
  } else {
    amountShow[3].innerHTML = num4 - 1;
  }
  num4 = Number(amountShow[3].innerHTML);
}

