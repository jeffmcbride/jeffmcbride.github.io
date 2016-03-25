	
function getFib(n){	
	if(n <= 1){
		return 1
	}
	else{
		return getFib(n-1) +getFib(n-2)
		
	}
}

function outFib(){
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
	output.value = "fib(" + input + ") = " + getFib(input);
}

function isPrime(num, i){
	if(i == 1){
		return 1;
	}
	else{
		if(num % i == 0){
			return 0;
		}
		else{
			return(isPrime(num, i-1));
		}
	}
}

function outPrime(){
	var input = document.getElementById("num").value;
	var output = document.getElementById("prime");
	
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
	
	
	if (isPrime(input, Math.floor(input/2)) == 1){
		output.value = input + " is prime."
	}
	else{
		output.value = input + " is not prime"
	}
}
