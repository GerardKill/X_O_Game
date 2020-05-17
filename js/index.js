"use strict"

let countX;
let countO;

function test(d){
	let r = 0;
	let el = document.getElementById(d);
	let op = window.getComputedStyle(el).opacity;
	return +op;
}

function HowEl(a, b, c, d, e, f, g, h, i){
	return test(a) + test(b) + test(c) + test(d) + test(e) + test(f) + test(g) + test(h) + test(i);
}

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
		console.log(countX);
		countO =+ HowEl("null_0_0", "null_0_1", "null_0_2", "null_1_0", "null_1_1", "null_1_2", "null_2_0", "null_2_1", "null_2_2");
		console.log(countO);
	}
}



	add(cell_0_0, "cross_0_0", "null_0_0");
	add(cell_0_1, "cross_0_1", "null_0_1");
	add(cell_0_2, "cross_0_2", "null_0_2");
	add(cell_1_0, "cross_1_0", "null_1_0");
	add(cell_1_1, "cross_1_1", "null_1_1");
	add(cell_1_2, "cross_1_2", "null_1_2");
	add(cell_2_0, "cross_2_0", "null_2_0");
	add(cell_2_1, "cross_2_1", "null_2_1");
	add(cell_2_2, "cross_2_2", "null_2_2");