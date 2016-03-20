function bin_to_dec(){

	var input = document.getElementById("input").value;
	var output = document.getElementById("output");
	var str_convert = input.toString();
	var length = str_convert.length;
	var i = 0;
	var result = 0;	
				
	//Iterate through binary number
	while (i < length){
				
		//Error checking
		if (str_convert[i] != 1 && str_convert[i] != 0){				
			output.value = ('"' + input + '"' +  " is not a binary number." );
			return;
		}
					
		//Convert to decimal one index at a time
		else if (str_convert[i] == 1){
			result += Math.pow(2, length - (i + 1));
		}
		i++;
	}
				
	//Final Result
	if(i != 0){
		output.value = result;
	}
			
	//Input was blank
	else{
		output.value = ("Please enter a binary number.");
	} 
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
				
	//Convert the binary number to decimal
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

//Function to determine which conversion to do based on checkboxes
function convert(){
			
	var output = document.getElementById("output");
	if(bin.checked){
		bin_to_dec();
	}
	
	else if(dec.checked){
		dec_to_bin();
	}
			
	//Neither checkbox is checked off
	else{
		output.value = ("Please choose a conversion.");
	}
}