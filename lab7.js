"use strict";


function task1() {
	let words = document.getElementById("words7.1").value.split(" ");
	let nums = document.getElementById("nums7.1").value.split(" ").map(x => Number(x)-1);
	let msg = "";
	let i;
	for (i of nums) {
		msg += words[i] + " ";
	}
	document.getElementById("p7.1").innerHTML = msg;
}

function task2() {
	let weekday = new Date().getDay();
	if (weekday % 6 == 0) {
		alert("Сьогодні вихідний");
	}
	else {
		let tosat = 6 - weekday;
		let day;
		if (tosat == 1) {
			day = "день";	
		}
		else if (tosat == 5) {
			day = "днів";
		}
		else {
			day = "дні";
		}
		alert(`До суботи ${tosat} ${day}`);
	}
}

function task3() {
	let numbers = prompt("Введіть a,b,c").split(/\W*/).map(x => Number(x));
	let a = numbers[0];
	let b = numbers[1];
	let c = numbers[2];

	let d = b**2 - 4*a*c;
	if (d < 0) {
		alert("Рішень не існує");
		return;
	}
	
	let x1 = ((-b + d**0.5) / (2*a)).toPrecision(4);
	let x2 = ((-b - d**0.5) / (2*a)).toPrecision(4);
	document.getElementById("p7.3_1").innerHTML = `<i>x<sub>1</sub></i> = ${x1}`;
	document.getElementById("p7.3_2").innerHTML = `<i>x<sub>2</sub></i> = ${x2}`;
}

document.getElementById("button7.1").onclick = task1;
document.getElementById("button7.2").onclick = task2;
document.getElementById("button7.3").onclick = task3;
