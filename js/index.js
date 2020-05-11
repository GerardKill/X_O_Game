"use strict"

	cell_0_0.onclick = function(){
		let element = document.getElementById('cross_0_0');
		let color = window.getComputedStyle(element).opacity;
		let element1 = document.getElementById('null_0_0');
		let color1 = window.getComputedStyle(element1).opacity;
		if((color == 0) && (color1 == 0)){
			document.getElementById('cross_0_0').style.opacity = "1";
		}
	}