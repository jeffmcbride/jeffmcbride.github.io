
var set = [];

function update_array(){
	var input = document.getElementById("input");
	var output = document.getElementById("output");
	if (isNaN(parseFloat(input.value))){
		alert("Please enter a number");
	}
	else{
		set.push(input.value)
	}
	output.value = (set);
	input.value = ""

}

function clear1(){
	var output = document.getElementById("output");
	set.length = 0;
	output.value = (set);
}


function undo(){
	var input = document.getElementById("input");
	var output = document.getElementById("output");
	set.pop();
	output.value = (set);
}


function calculate(){
	var sum = 0;
	for (var i = 0; i < set.length; i++){
		sum = sum + parseFloat(set[i], 10);
	}
	
	var output = document.getElementById("mean");
	output.value = (sum/set.length);
		if (isNaN(output.value)){
		output.value = 0;
	}
	
	sum = 0;
	
	for (var i = 0; i < set.length; i++){
		sum = sum + Math.pow((parseFloat(set[i], 10) - output.value),2);
	}
	var output2 = document.getElementById("variance");
	output2.value = (sum/set.length)
	if (isNaN(output2.value)){
		output2.value = 0;
	}
	output3 = document.getElementById("svariance");
	output3.value = (sum/(set.length-1));
	output4 = document.getElementById("psd");
	output4.value = Math.sqrt(sum/set.length);
	if (isNaN(output4.value)){
		output4.value = 0;
	}
	output5 = document.getElementById("ssd");
	output5.value = Math.sqrt(sum/(set.length-1))
	
}

