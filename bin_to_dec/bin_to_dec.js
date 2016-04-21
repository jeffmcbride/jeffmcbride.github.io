function bin_to_dec(){
	var input = document.getElementById("input").value;
	var output = document.getElementById("output");		
	var str_convert = input.toString();
	var i = 0;
	var length = str_convert.length;	
	while (i < length){
		//Error checking
		if((str_convert[i] != 1) && (str_convert[i] != 0)){
			output.value = ('"' + input + '"' + " is not a binary number.");
			return;
		}
		i++;
	}
				
	//Input was blank
	if(i == 0){
		output.value = ("Please enter a binary number.");
		return;
	}
	
	else{
		output.value = parseInt(str_convert, 2);
	}
}
function hex_to_dec(){
	var input = document.getElementById("input").value;
	var output = document.getElementById("output");
	var str_convert = input.toString();
	var length = str_convert.length;
	var i = 0;
	while(i < length){
		if (isNaN(parseInt(str_convert[i], 16))){
			output.value = ('"' + input + '"' + " is not a hexidecimal number.");
			return;
		} 
		i++;
	}
	
	if (i == 0){
		output.value = "Please enter a hexidecimal number.";
		return;
	}
	output.value = parseInt(str_convert, 16);
	
	
}
function dec_to_bin(){
	var input = document.getElementById("input").value;
	var output = document.getElementById("output");		
	var str_convert = input.toString();
	var length = str_convert.length;
	var i = 0;
	result = ""
				
	//Iterate through decimal value to make sure it is a valid natural
	while (i < length){
				
		//Error checking
		if(isNaN(str_convert[i])){
			output.value = ('"' + input + '"' + " is not a natural number.");
			return;
		}
		i++;
	}
				
	//Input was blank
	if(i == 0){
		output.value = ("Please enter a natural number.");
		return;
	}
				
	//Convert the decimal number to binary
	while(input != 0){
		if(input % 2 == 0){
			result = ("0" + result);
			input = input/2;
		}
		else{
			result = ("1" + result);
			input = (input - 1)/2
		}
	}
					
	//Final result
	output.value = (result);
}
function hex_to_bin(){
	var input = document.getElementById("input").value;
	var output = document.getElementById("output");		
	var str = input.toString();
	var i = 0;
	result = ""
	var str_convert = parseInt(str, 16).toString();
	var length = str.length;	
	//Iterate through decimal value to make sure it is a valid natural
	while (i < length){
		if (isNaN(parseInt(str[i], 16))){
			output.value = ('"' + input + '"' + " is not a hexidecimal number.");
			return;
		} 
		i++;
	}
				
	//Input was blank
	if(i == 0){
		output.value = "Please enter a hexidecimal number.";
		return;
	}
				
	//Convert the binary number to decimal
	while(str_convert != 0){
		if(str_convert % 2 == 0){
			result = ("0" + result);
			str_convert = str_convert/2;
		}
		else{
			result = ("1" + result);
			str_convert = (str_convert - 1)/2
		}
	}
					
	//Final result
	output.value = (result);

}
function dec_to_hex(){
	var input = document.getElementById("input").value;
	var output = document.getElementById("output");		
	var str_convert = input.toString();
	var length = str_convert.length;
	var i = 0;
	var remainder = 0;
	result = ""
				
	//Iterate through decimal value to make sure it is a valid natural
	while (i < length){
				
		//Error checking
		if(isNaN(str_convert[i])){
			output.value = ('"' + input + '"' + " is not a natural number.");
			return;
		}
		i++;
	}
				
	//Input was blank
	if(i == 0){
		output.value = ("Please enter a natural number.");
		return;
	}
				
	//Convert the decimal number to binary
	while(input != 0){
		remainder = input % 16;
		if (remainder == 10){
			remainder = "A";
		}
		if (remainder == 11){
			remainder = "B";
		}
		if (remainder == 12){
			remainder = "C";
		}		
		if (remainder == 13){
			remainder = "D";
		}
		if (remainder == 14){
			remainder = "E";
		}		
		if (remainder == 15){
			remainder = "F";
		}
		result = (remainder) + result;
		input = parseInt(input / 16, 10);
	}
					
	//Final result
	output.value = (result);
}
function bin_to_hex(){
	var input = document.getElementById("input").value;
	var output = document.getElementById("output");		
	var str_convert = input.toString();
	var i = 0;
	var result = "";
	var remainder = 0;
	var dec = ""
	var length = str_convert.length;	
	while (i < length){
		//Error checking
		if((str_convert[i] != 1) && (str_convert[i] != 0)){
			output.value = ('"' + input + '"' + " is not a binary number.");
			return;
		}
		i++;
	}
				
	//Input was blank
	if(i == 0){
		output.value = ("Please enter a binary number.");
		return;
	}
	
	else{
		dec = parseInt(str_convert, 2).toString();
	}
		
	//Convert the decimal number to binary
	while(dec != 0){
		remainder = dec % 16;
		if (remainder == 10){
			remainder = "A";
		}
		if (remainder == 11){
			remainder = "B";
		}
		if (remainder == 12){
			remainder = "C";
		}		
		if (remainder == 13){
			remainder = "D";
		}
		if (remainder == 14){
			remainder = "E";
		}		
		if (remainder == 15){
			remainder = "F";
		}
		result = remainder + result;
		dec = parseInt(dec/16, 10);
	}
					
	//Final result
	output.value = (result);
}
//Function to determine which conversion to do based on checkboxes
function convert(){
	var output = document.getElementById("output");
	if(b2d.checked){
		bin_to_dec();
	}
	else if(d2b.checked){
		dec_to_bin();
	}
	
	else if(h2d.checked){
		hex_to_dec();
	}
	
	else if(h2b.checked){
		hex_to_bin();
	}
	
	else if(d2h.checked){
		dec_to_hex();
	}
	
	else if(b2h.checked){
		bin_to_hex();
	}
	//Neither checkbox is checked off
	else{
		output.value = ("Please choose a conversion.");
	}
}