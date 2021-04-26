"use strict";

function task6() {
	let p = document.getElementById("p6");
	function removeName() {
		p.innerHTML = ""
	}

	p.innerHTML = "Зимогляд Олександр";
	window.setTimeout(removeName, 5000);
}

function task7() {
	function setName() {
		document.getElementById("p7").innerHTML = "Зимогляд Олексанр";
	}

	function alertGroup() {
		alert("КН-116");
	}
	
	window.setTimeout(setName, 5000);
	window.setTimeout(alertGroup, 10000);
}

function task19() {
	let p = document.getElementById("p19");
	function printTime() {
		let time = new Date().toLocaleTimeString('en-US', {hour12: false});
		p.innerHTML = time;
	}

	window.setInterval(printTime, 1000);
}

function task25() {
	let p = document.getElementById("p25");
	let a = 0;
	let b = 1;
	function fib() {
		p.innerHTML = a;
		let tmp = b;
		b = a + b;
		a = tmp;
	}

	window.setInterval(fib, 1000);
}

document.getElementById("button6").onclick = task6;
document.getElementById("button7").onclick = task7;
document.getElementById("button19").onclick = task19;
document.getElementById("button25").onclick = task25;
