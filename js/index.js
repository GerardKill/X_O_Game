"use strict"

let countX;
let countO;
let sec;


	add(cell_0_0, "cross_0_0", "null_0_0");
	add(cell_0_1, "cross_0_1", "null_0_1");
	add(cell_0_2, "cross_0_2", "null_0_2");
	add(cell_1_0, "cross_1_0", "null_1_0");
	add(cell_1_1, "cross_1_1", "null_1_1");
	add(cell_1_2, "cross_1_2", "null_1_2");
	add(cell_2_0, "cross_2_0", "null_2_0");
	add(cell_2_1, "cross_2_1", "null_2_1");
	add(cell_2_2, "cross_2_2", "null_2_2");


function add(a, b, c){
	a.onclick = function(){
		let element = document.getElementById(b);
		let opacity = window.getComputedStyle(element).opacity;
		let element1 = document.getElementById(c);
		let opacity1 = window.getComputedStyle(element1).opacity;
		if((opacity == 0) && (opacity1 == 0)){
			if(countX>countO){
				document.getElementById(c).style.opacity = "1";
			}
			else{
				document.getElementById(b).style.opacity = "1";
			}
		}
		countX =+ HowEl("cross_0_0", "cross_0_1", "cross_0_2", "cross_1_0", "cross_1_1", "cross_1_2", "cross_2_0", "cross_2_1", "cross_2_2");
		countO =+ HowEl("null_0_0", "null_0_1", "null_0_2", "null_1_0", "null_1_1", "null_1_2", "null_2_0", "null_2_1", "null_2_2");
		winner();

	}
}

function test(d){
	let r = 0;
	let el = document.getElementById(d);
	let op = window.getComputedStyle(el).opacity;
	return +op;
}

function HowEl(a, b, c, d, e, f, g, h, i){
	return test(a) + test(b) + test(c) + test(d) + test(e) + test(f) + test(g) + test(h) + test(i);
}

function WinEl(a, b, c){
	return test(a) + test(b) + test(c);
}

function winner(){
	if ((WinEl("cross_0_0", "cross_0_1", "cross_0_2") == 3) || (WinEl("null_0_0", "null_0_1", "null_0_2") == 3))  {
		let ell = document.getElementById("winner");
		ell.style.zIndex = "1";
		ell.style.top = "2%";
		brake;
	}
	else if ((WinEl("cross_1_0", "cross_1_1", "cross_1_2") == 3) || (WinEl("null_1_0", "null_1_1", "null_1_2") == 3))  {
		let ell = document.getElementById("winner");
		ell.style.zIndex = "1";
		ell.style.top = "35%";
		brake;
	}
	else if ((WinEl("cross_2_0", "cross_2_1", "cross_2_2") == 3) || (WinEl("null_2_0", "null_2_1", "null_2_2") == 3))  {
		let ell = document.getElementById("winner");
		ell.style.zIndex = "1";
		ell.style.top = "70%";
		brake;
	}
	else if ((WinEl("cross_0_0", "cross_1_0", "cross_2_0") == 3) || (WinEl("null_0_0", "null_1_0", "null_2_0") == 3))  {
		let ell = document.getElementById("winner");
		ell.style.zIndex = "1";
		ell.style.top = "38%";
		ell.style.right = "33%";
		ell.style.transform = "rotate(90deg)";
		brake;
	}
	else if ((WinEl("cross_0_1", "cross_1_1", "cross_2_1") == 3) || (WinEl("null_0_1", "null_1_1", "null_2_1") == 3))  {
		let ell = document.getElementById("winner");
		ell.style.zIndex = "1";
		ell.style.top = "38%";
		ell.style.transform = "rotate(90deg)";
		brake;
	}
	else if ((WinEl("cross_0_2", "cross_1_2", "cross_2_2") == 3) || (WinEl("null_0_2", "null_1_2", "null_2_2") == 3))  {
		let ell = document.getElementById("winner");
		ell.style.zIndex = "1";
		ell.style.top = "38%";
		ell.style.left = "33%";
		ell.style.transform = "rotate(90deg)";
		brake;
	}
	else if ((WinEl("cross_0_0", "cross_1_1", "cross_2_2") == 3) || (WinEl("null_0_0", "null_1_1", "null_2_2") == 3))  {
		let ell = document.getElementById("winner");
		ell.style.zIndex = "1";
		ell.style.top = "37%";
		ell.style.right = "-13%";
		ell.style.transform = "rotate(45deg)";
		ell.style.width = "125%";
		brake;
	}
	else if ((WinEl("cross_0_2", "cross_1_1", "cross_2_0") == 3) || (WinEl("null_0_2", "null_1_1", "null_2_0") == 3))  {
		let ell = document.getElementById("winner");
		ell.style.zIndex = "1";
		ell.style.top = "37%";
		ell.style.right = "-13%";
		ell.style.transform = "rotate(135deg)";
		ell.style.width = "125%";
		brake;
	}
}



