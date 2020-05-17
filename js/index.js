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


function start(){
	document.getElementById("start__game").style.zIndex = "-1";
}

function restart(){
	let end = document.getElementById("end__game");
	end.style.opacity = "0";
	end.style.zIndex = "-1";
	document.getElementById("winner").style.zIndex = "-1";
	delElem("cross_0_0");
	delElem("cross_0_1");
	delElem("cross_0_2");
	delElem("cross_1_0");
	delElem("cross_1_1");
	delElem("cross_1_2");
	delElem("cross_2_0");
	delElem("cross_2_1");
	delElem("cross_2_2");
	delElem("null_0_0");
	delElem("null_0_1");
	delElem("null_0_2");
	delElem("null_1_0");
	delElem("null_1_1");
	delElem("null_1_2");
	delElem("null_2_0");
	delElem("null_2_1");
	delElem("null_2_2");
	function delElem(b){
		document.getElementById(b).style.opacity = "0";
	}
}

function add(a, b, c){
	a.onclick = function(){
		let element = document.getElementById(b);
		let opacity = window.getComputedStyle(element).opacity;
		let element1 = document.getElementById(c);
		let opacity1 = window.getComputedStyle(element1).opacity;
		countX =+ HowEl("cross_0_0", "cross_0_1", "cross_0_2", "cross_1_0", "cross_1_1", "cross_1_2", "cross_2_0", "cross_2_1", "cross_2_2");
		countO =+ HowEl("null_0_0", "null_0_1", "null_0_2", "null_1_0", "null_1_1", "null_1_2", "null_2_0", "null_2_1", "null_2_2");
		if((opacity == 0) && (opacity1 == 0)){
			if(countX>countO){
				document.getElementById(c).style.opacity = "1";
			}
			else{
				document.getElementById(b).style.opacity = "1";
			}
		}

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
		countX =+ HowEl("cross_0_0", "cross_0_1", "cross_0_2", "cross_1_0", "cross_1_1", "cross_1_2", "cross_2_0", "cross_2_1", "cross_2_2");
		countO =+ HowEl("null_0_0", "null_0_1", "null_0_2", "null_1_0", "null_1_1", "null_1_2", "null_2_0", "null_2_1", "null_2_2");
		console.log(countX);
		console.log(countO);
	if ((WinEl("cross_0_0", "cross_0_1", "cross_0_2") == 3) || (WinEl("null_0_0", "null_0_1", "null_0_2") == 3))  {
		let ell = document.getElementById("winner");
		let end = document.getElementById("end__game");
		let whoWin = document.getElementById("who__win");
		ell.style.zIndex = "1";
		ell.style.top = "11%";
		ell.style.left = "0";
		ell.style.right = "0";
		ell.style.bottom = "0";
		ell.style.transform = "rotate(0)";
		ell.style.width = "100%";
		end.style.opacity = "1";
		end.style.zIndex = "2";
		if(WinEl("cross_0_0", "cross_0_1", "cross_0_2") == 3){
			whoWin.textContent = "Congratulations 'X'";
		}
		else{
			whoWin.textContent = "Congratulations '0'";
		}
		brake;
	}
	else if ((WinEl("cross_1_0", "cross_1_1", "cross_1_2") == 3) || (WinEl("null_1_0", "null_1_1", "null_1_2") == 3))  {
		let ell = document.getElementById("winner");
		let end = document.getElementById("end__game");		
		let whoWin = document.getElementById("who__win");
		ell.style.zIndex = "1";
		ell.style.top = "42%";
		ell.style.left = "0";
		ell.style.right = "0";
		ell.style.bottom = "0";
		ell.style.transform = "rotate(0)";
		ell.style.width = "100%";
		end.style.opacity = "1";
		end.style.zIndex = "2";
		if(WinEl("cross_1_0", "cross_1_1", "cross_1_2") == 3){
			whoWin.textContent = "Congratulations 'Х'";
		}
		else{
			whoWin.textContent = "Congratulations '0'";
		}
		brake;
	}
	else if ((WinEl("cross_2_0", "cross_2_1", "cross_2_2") == 3) || (WinEl("null_2_0", "null_2_1", "null_2_2") == 3))  {
		let ell = document.getElementById("winner");
		let end = document.getElementById("end__game");
		let whoWin = document.getElementById("who__win");
		ell.style.zIndex = "1";
		ell.style.top = "71%";
		ell.style.left = "0";
		ell.style.right = "0";
		ell.style.bottom = "0";
		ell.style.transform = "rotate(0)";
		ell.style.width = "100%";
		end.style.opacity = "1";
		end.style.zIndex = "2";
		if(WinEl("cross_2_0", "cross_2_1", "cross_2_2") == 3){
			whoWin.textContent = "Congratulations 'Х'";
		}
		else{
			whoWin.textContent = "Congratulations '0'";
		}
		brake;
	}
	else if ((WinEl("cross_0_0", "cross_1_0", "cross_2_0") == 3) || (WinEl("null_0_0", "null_1_0", "null_2_0") == 3))  {
		let ell = document.getElementById("winner");
		let end = document.getElementById("end__game");
		let whoWin = document.getElementById("who__win");
		ell.style.zIndex = "1";
		ell.style.top = "44%";
		ell.style.right = "0";
		ell.style.left = "-33%";
		ell.style.bottom = "0";
		ell.style.transform = "rotate(90deg)";
		ell.style.width = "100%";
		end.style.opacity = "1";
		end.style.zIndex = "2";
		if(WinEl("cross_0_0", "cross_1_0", "cross_2_0") == 3){
			whoWin.textContent = "Congratulations 'Х'";
		}
		else{
			whoWin.textContent = "Congratulations '0'";
		}
		brake;
	}
	else if ((WinEl("cross_0_1", "cross_1_1", "cross_2_1") == 3) || (WinEl("null_0_1", "null_1_1", "null_2_1") == 3))  {
		let ell = document.getElementById("winner");
		let end = document.getElementById("end__game");
		let whoWin = document.getElementById("who__win");
		ell.style.zIndex = "1";
		ell.style.top = "44%";
		ell.style.right = "0";
		ell.style.left = "0";
		ell.style.bottom = "0";
		ell.style.transform = "rotate(90deg)";
		ell.style.width = "100%";
		end.style.opacity = "1";
		end.style.zIndex = "2";
		if(WinEl("cross_0_1", "cross_1_1", "cross_2_1") == 3){
			whoWin.textContent = "Congratulations 'Х'";
		}
		else{
			whoWin.textContent = "Congratulations '0'";
		}
		brake;
	}
	else if ((WinEl("cross_0_2", "cross_1_2", "cross_2_2") == 3) || (WinEl("null_0_2", "null_1_2", "null_2_2") == 3))  {
		let ell = document.getElementById("winner");
		let end = document.getElementById("end__game");
		let whoWin = document.getElementById("who__win");
		ell.style.zIndex = "1";
		ell.style.top = "44%";
		ell.style.left = "33%";
		ell.style.right = "0";
		ell.style.bottom = "0";
		ell.style.transform = "rotate(90deg)";
		ell.style.width = "100%";
		end.style.opacity = "1";
		end.style.zIndex = "2";
		if(WinEl("cross_0_2", "cross_1_2", "cross_2_2") == 3){
			whoWin.textContent = "Congratulations 'Х'";
		}
		else{
			whoWin.textContent = "Congratulations '0'";
		}
		brake;
	}
	else if ((WinEl("cross_0_0", "cross_1_1", "cross_2_2") == 3) || (WinEl("null_0_0", "null_1_1", "null_2_2") == 3))  {
		let ell = document.getElementById("winner");
		let end = document.getElementById("end__game");
		let whoWin = document.getElementById("who__win");
		ell.style.zIndex = "1";
		ell.style.top = "43%";
		ell.style.right = "0";
		ell.style.left = "-9%";
		ell.style.bottom = "0";
		ell.style.transform = "rotate(45deg)";
		ell.style.width = "125%";
		end.style.opacity = "1";
		end.style.zIndex = "2";
		if(WinEl("cross_0_0", "cross_1_1", "cross_2_2") == 3){
			whoWin.textContent = "Congratulations 'Х'";
		}
		else{
			whoWin.textContent = "Congratulations '0'";
		}
		brake;
	}
	else if ((WinEl("cross_0_2", "cross_1_1", "cross_2_0") == 3) || (WinEl("null_0_2", "null_1_1", "null_2_0") == 3))  {
		let ell = document.getElementById("winner");
		let end = document.getElementById("end__game");
		let whoWin = document.getElementById("who__win");
		ell.style.zIndex = "1";
		ell.style.top = "43%";
		ell.style.right = "0";
		ell.style.left = "-9%"
		ell.style.bottom = "0";
		ell.style.transform = "rotate(135deg)";
		ell.style.width = "125%";
		end.style.opacity = "1";
		end.style.zIndex = "2";
		if(WinEl("cross_0_2", "cross_1_1", "cross_2_0") == 3){
			whoWin.textContent = "Congratulations 'Х'";
		}
		else{
			whoWin.textContent = "Congratulations '0'";
		}
		brake;
	}
	else if((+countO+ +countX) == 9){
		let whoWin = document.getElementById("who__win");
		let end = document.getElementById("end__game");
		end.style.opacity = "1";
		end.style.zIndex = "2";
		whoWin.textContent = "Oh, sorry, but draw";
	}
}



