function celc_to_far(){

	var input = document.getElementById("input").value;
	var output = document.getElementById("output");		
	var str_convert = input.toString();
	var length = str_convert.length;
	var i = 0;
	result = ""
				
	if(isNaN(str_convert)){
		output.value = ("Please enter a temperature.")
		return;
	}
	result = str_convert * (9/5) + 32;
	output.value = (result);
}

function far_to_celc(){

	var input = document.getElementById("input").value;
	var output = document.getElementById("output");		
	var str_convert = input.toString();
	var length = str_convert.length;
	var i = 0;
	result = ""
				
	if(isNaN(str_convert)){
		output.value = ("Please enter a temperature.")
		return;
	}
	result = (str_convert - 32) * (5/9);
	output.value = (result);
}

function miles_to_kilo(){
	
	var input = document.getElementById("input").value;
	var output = document.getElementById("output");		
	var str_convert = input.toString();
	var length = str_convert.length;
	var i = 0;
	result = ""
				
	if(isNaN(str_convert) || str_convert < 0){
		output.value = ("Please enter a positive number.")
		return;
	}
	result = (str_convert * (1/0.62137));
	output.value = (result);
}

function km_to_miles(){
	var input = document.getElementById("input").value;
	var output = document.getElementById("output");		
	var str_convert = input.toString();
	var length = str_convert.length;
	var i = 0;
	result = ""
				
	if(isNaN(str_convert) || str_convert < 0){
		output.value = ("Please enter a positive number.")
		return;
	}
	result = (str_convert*0.62137);
	output.value = (result);
}

function lb_to_kg(){
	var input = document.getElementById("input").value;
	var output = document.getElementById("output");		
	var str_convert = input.toString();
	var length = str_convert.length;
	var i = 0;
	result = ""
				
	if(isNaN(str_convert) || str_convert < 0){
		output.value = ("Please enter a positive number.")
		return;
	}
	result = (str_convert * (1/2.2046));
	output.value = (result);
}

function kg_to_lb(){
	
	var input = document.getElementById("input").value;
	var output = document.getElementById("output");		
	var str_convert = input.toString();
	var length = str_convert.length;
	var i = 0;
	result = ""
				
	if(isNaN(str_convert) || str_convert < 0){
		output.value = ("Please enter a positive number.")
		return;
	}
	result = (str_convert*2.2046);
	output.value = (result);
}

function m_to_f(){
	var input = document.getElementById("input").value;
	var output = document.getElementById("output");		
	var str_convert = input.toString();
	var length = str_convert.length;
	var i = 0;
	result = ""
				
	if(isNaN(str_convert) || str_convert < 0){
		output.value = ("Please enter a positive number.")
		return;
	}
	result = (str_convert*3.2808);
	output.value = (result);
}

function f_to_m(){
	var input = document.getElementById("input").value;
	var output = document.getElementById("output");		
	var str_convert = input.toString();
	var length = str_convert.length;
	var i = 0;
	result = ""
	
	if(isNaN(str_convert) || str_convert < 0){			
		output.value = ("Please enter a positive number.")
		return;
	}
	result = (str_convert *(1/3.2808));
	output.value = (result);
}


//Function to determine which conversion to do based on checkboxes
function convert(){
	var output = document.getElementById("output");
	if(c2f.checked){
		celc_to_far();
	}
	else if(f2c.checked){
		far_to_celc();
	}
	else if(m2k.checked){
		miles_to_kilo();
	}
	else if(k2m.checked){
		km_to_miles();
	}
	else if(p2k.checked){
		lb_to_kg();
	}
	else if(k2p.checked){
		kg_to_lb();
	}
	else if(m2f.checked){
		m_to_f();
	}
	else if(f2m.checked){
		f_to_m();
	}

	//Neither checkbox is checked off
	else{
		output.value = ("Please choose a conversion.");
	}
}