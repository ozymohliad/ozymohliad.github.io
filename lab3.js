"use strict";

function task1() {
	let divs = document.getElementsByTagName("DIV");
	let width = "div widths:";
	let i;
	for (i = 0; i < divs.length; i++) {
		width += " " + divs[i].clientWidth;
	}

	alert(width);

	for (i of divs) {
		i.style.width = i.clientWidth / 2 + "px";
	}
}

function task2() {
	let color = prompt("Колір: ");
	let class_name = prompt("Ім'я класу: ");
	let element;
	for (element of document.getElementsByClassName(class_name)) {
		element.style.backgroundColor = color;
	}
}

function task3() {
	let w = window.innerWidth;
	let h = window.innerHeight;
	let msg = `Ширина: ${w}, Висота: ${h}`;
	if (confirm("Бажаєте взнати розмір робочого вікна веб-сторінки?")) {
		alert(msg);
	}
	else {
		document.getElementById("div36").innerHTML = `<p>${msg}</p>`;
	}
}

let win;
function task4_open() {
	win = window.open("https://lpnu.ua", "LPNU", "width=500px, height=600px, toolbar=0, location=0");
}

function task4_close() {
	win.close();
}

document.getElementById("button1").onclick = task1;
document.getElementById("button2").onclick = task2;
document.getElementById("button3").onclick = task3;
document.getElementById("button4.1").onclick = task4_open;
document.getElementById("button4.2").onclick = task4_close;
