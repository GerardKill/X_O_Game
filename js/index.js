"use strict"

function add(a, b, c){
	a.onclick = function(){
		let element = document.getElementById(b);
		let color = window.getComputedStyle(element).opacity;
		let element1 = document.getElementById(c);
		let color1 = window.getComputedStyle(element1).opacity;
		if((color == 0) && (color1 == 0)){
			document.getElementById(b).style.opacity = "1";
		}
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