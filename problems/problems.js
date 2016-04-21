function getFib(n){	
	if (n == 0){
		return 0;
	}
	if (n == 1){
		return 1;
	}
	if (n == 2){
		return 1;
	}
	var array = [1, 1];
	for(var i = 2; i < n; i++){
		array.push(array[i - 1] + array[i - 2]);
	}
	return array[n - 1];
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

function isPrime(value) {
    for(var i = 2; i < value; i++) {
        if(value % i === 0) {
            return 0;
        }
    }
    return 1;
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
	
	
	if (isPrime(input) == 1){
		output.value = input + " is prime."
	}
	else{
		output.value = input + " is not prime"
	}
}
