"use strict";

function myPow() {
  var name = prompt("Enter your name");
  alert("привет " + name);
}

function myAge() {
  var tec = 2021;
  var age = parseInt(prompt("Enter age"));
  var v = tec - age;
  alert(v);
}

function cub() {
  var storona = parseInt(prompt("Enter Storon"));
  var per = storona + storona + storona + storona;
  alert(per);
}

function crug() {
  var PI = Math.PI;
  var rad = parseInt(prompt("Enter radius"));
  rez = Math.pow(rad, 2);
  to = rez * PI;
  alert(to);
}

function nav() {
  var T = parseInt(prompt("Enter time "));
  var S = parseInt(prompt("Enter  km"));
  var V = S / T;
  alert("время =" + T);
  alert("расстояние =" + S);
  alert("скорость =" + V);
}

function val() {
  var dolar = parseInt(prompt("Enter dolar "));
  var evro = 30;
  var perevod = dolar / evro;
  alert("вишло = " + perevod);
}

function pam() {
  var pam = parseInt(prompt("Enter  Gb"));
  var col;
  var mb = pam * 1000;
  col = mb / 820; //  col.toPrecision(2);// не работает заокругление
  // Math.trunc(col)// не работает заокругление

  alert(col);
}

function chocolate() {
  var suma = parseInt(prompt("Enter sum "));
  var price = parseInt(prompt("Enter price  "));
  var col = suma % price;
  var coll = suma / price;
  call = Math.round(coll);
  alert(parseInt(coll));
  alert(col);
}

function сhislo() {
  var number = parseInt(prompt("Enter nam "));
  rez = number % 10;
  rez1 = number % 100;
  alert(rez, "_", parseInt(rez1));
}

function bank() {
  var sum = parseInt(prompt("Enter sun "));
  var pro = 0.00416 * sum * 2;
  alert(pro);
}