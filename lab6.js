"use strict";

let domains;
function getDomains() {
	fetch('https://data.iana.org/TLD/tlds-alpha-by-domain.txt')
		.then(x => x.text())
		.then(x => {domains = x.toLowerCase().split('\n');
		domains.shift(); domains.pop()})
}

function task3() {
	let pattern = "^([a-z0-9]+(-[a-z0-9]+)*\\.)+";
	pattern += "(" + domains.join("|") + ")$";
	let input = prompt("Введіть рядок:");
	alert("Введено " + 
		(new RegExp(pattern).test(input) ?
			"правильний" :
			"неправильний") +
		" домен")
}

function task5() {
	let pattern = /^https?/;
	let input = prompt("Введіть рядок:");
	alert("Рядок " + (pattern.test(input) ? "" : "не ") +
		"починається з http або https");
}

function task19() {
	let pattern = /a[^a-zA-Z0-9]b/g;
	let input = prompt("Введіть рядок:");
	let div = document.getElementById("div6.19");
	let match;
	for (match of input.match(pattern)) {
		div.innerHTML += `<p>${match}</p>`;
	}
}

function task24() {
	let pattern = /a\\{3}a/g;
	let input = prompt("Введіть рядок:");
	alert(input.replaceAll(pattern, "!"));
}

function task26() {
	let pattern = /^(\d{4}\s?){4}$/;
	let input = prompt("Введіть рядок:");
	if (!pattern.test(input)) {
		alert("Формат картки невірний");
		return;
	}

	let digits = input.replaceAll(' ', '').split('').map(x => Number(x));
	let last = digits.pop();
	digits.reverse();
	let i;
	for (i = 0; i < digits.length; i += 2) {
		digits[i] *= 2;
		if (digits[i] > 9) {
			digits[i] -= 9;
		}
	}
	let sum = digits.reduce((a,b) => a + b, 0);
	if ((sum + last) % 10 == 0) {
		alert("Номер картки правильний");
	}
	else {
		alert("Правильний формат введення, але неправильний номер картки");
	}
}

window.onload = getDomains;
document.getElementById("button6.3").onclick = task3;
document.getElementById("button6.5").onclick = task5;
document.getElementById("button6.19").onclick = task19;
document.getElementById("button6.24").onclick = task24;
document.getElementById("button6.26").onclick = task26;
