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