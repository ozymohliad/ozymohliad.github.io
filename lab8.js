"use strict";


let task1_done = false;
function task1() {
	if (task1_done) {
		return;
	}

	let div = document.getElementById("div81");
	div.style.display = "block";
	let form = document.getElementById("input8");

	function click(e) {
		let msg = "";

		if (e.ctrlKey) {
			msg = "1";
		}
		if (e.altKey) {
			msg = "2";
		}
		if (e.shiftKey) {
			msg = "3";
		}

		form.value = msg;
	}

	form.addEventListener('click', click);
	task1_done = true;
}

let task2_done = false;
function task2() {
	if (task2_done) {
		return;
	}

	let div = document.getElementById("div82");
	div.style.display = "block";

	let text = document.getElementById("text82");
	let form = document.getElementById("radios");
	let radios = document.getElementsByName("task2");

	function click() {
		let selected;
		for (selected of radios) {
			if (selected.checked == true) {
				text.value = selected.labels[0].innerText;
				return;
			}
		}
	}

	form.onclick = click;
	task2_done = true;
}

document.getElementById("button8.1").onclick = task1;
document.getElementById("button8.2").onclick = task2;
