
// function for clear
function c(val){
	document.querySelector("#display").value = val;
}


//function for maths
function math(val){
	document.querySelector("#display").value += val;
}

//function for equal
function e(){
	try {
		c(eval(document.querySelector("#display").value))

	} catch(e) {
		c('Error');
	}
}