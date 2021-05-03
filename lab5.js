"use strict";

function task3() {
	let numbers_str = prompt("Введіть серію чисел");
	let numbers = numbers_str.split(',').map(x => Number(x));
	let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) != index)
	if (findDuplicates(numbers).length > 0) {
		alert([...new Set(numbers)]);
	}
}

function task9() {
	let numbers = prompt("Введіть a,b,c").split(',').map(x => Number(x));
	let a = numbers[0];
	let b = numbers[1];
	let c = numbers[2];

	let d = b**2 - 4*a*c;
	if (d < 0) {
		alert("Рішень не існує");
		return;
	}
	
	let x1 = (-b + d**0.5) / (2*a);
	let x2 = (-b - d**0.5) / (2*a);
	document.getElementById("p5.9_1").innerHTML = `x1 = ${x1}`;
	document.getElementById("p5.9_2").innerHTML = `x2 = ${x2}`;
}

function task17() {
	let n = Number(prompt("Введіть n"));
	let d = document.getElementById("div5.17");
	d.innerHTML = "";
	for (; n >= 0; n--) {
		d.innerHTML += `<p>${n}</p>`;
	}
}

function task25() {
	let arr = prompt("Введіть значення").split(',');
	arr.sort((first, second) => Math.random() - 0.5);
	document.getElementById("p5.25").innerHTML = arr.join(", ");
}

function task30() {
	let f = document.getElementById("f5.30").value.split(',').map(x => Number(x));
	let s = document.getElementById("s5.30").value.split(',').map(x => Number(x));
	document.getElementById("p5.30").innerHTML = [...new Set(f.concat(s))].join(", ");
}

document.getElementById("button5.3").onclick = task3;
document.getElementById("button5.9").onclick = task9;
document.getElementById("button5.17").onclick = task17;
document.getElementById("button5.25").onclick = task25;
document.getElementById("button5.30").onclick = task30;
