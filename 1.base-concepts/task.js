"use strict";
/* ---- Задача №1 ---- */
function solveEquation(a, b, c) {
  let arr = [];

  //  Дискриминант:
  let d = b ** 2 - 4 * a * c;

  if (d === 0) {
    let x = -b / (2 * a);
    arr.push(x);
  }
  if (d > 0) {
    let x1 = (-b + Math.sqrt(d)) / (2 * a);
    let x2 = (-b - Math.sqrt(d)) / (2 * a);
    arr.push(x1, x2);
  }

  return arr;
}
/* ---- Задача №2 ---- */
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let p = percent / 100;
  p = p / 12;
  let s = amount - contribution;
  let payment = s * (p + p / ((1 + p) ** countMonths - 1));

  return +(payment * countMonths).toFixed(2);
}
