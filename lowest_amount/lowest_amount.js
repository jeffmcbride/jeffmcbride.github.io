var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillStyle = "#f2f2f2";
ctx.fillRect(0,0,1250,475);
ctx.font = "30px Arial";
ctx.fillStyle = "black";

function give_lowest_amount(){
	ctx.clearRect(0, 0, c.width, c.height);
	ctx.fillStyle = "#f2f2f2";
	ctx.fillRect(0,0,1250,475);
	ctx.font = "30px Arial";
	ctx.fillStyle = "black";
	var input = document.getElementById("input").value;
	input.value = Math.round(input*100)/100
	var output = document.getElementById("output");
	var str_convert = input.toString();
	var length = str_convert.length;
	var i = 0;
	var result = {};
	result[100] = 0;
	result[50] = 0;
	result[20] = 0;
	result[10] = 0;
	result[5] = 0;
	result[2] = 0;
	result[1] = 0;
	result[0.25] = 0;
	result[0.1] = 0;
	result[0.05] = 0;
	result[0.01] = 0;
	total = str_convert;
	if (total > 999999999){
		alert("Just write a cheque Mr. Gates");
		return;
	}
	while(total - 100 >= 0){
		total -= 100
		result[100] += 1 
	}
	while(total - 50 >= 0){
		total -= 50;
		result[50] += 1
	}
	while(total - 20 >= 0){
		total -= 20
		result[20] += 1;
	}
	
	while(total - 10 >= 0){
		total -= 10
		result[10] += 1;
	}
	
	while(total - 5 >= 0){
		total -= 5
		result[5] += 1;
	}
	
	while(total - 2 >= 0){
		total -= 2
		result[2] += 1;
	}
	
	while(total - 1 >= 0){
		total -= 1
		result[1] += 1;
	}
	
	if (total > 0){
		while (i < str_convert){
			if (str_convert[i] != "."){
				i++
			}
			else{
				break;
			}
		}
		
		if(str_convert[i+3]){
			alert("Please Enter A Valid Monetary Value");
			return;
		}
		if(str_convert[i+2]){
			total = (str_convert[i+1] + "" + str_convert[i+2]);
		}
		else{
			total = (str_convert[i+1] + "" + "0");
		}
		while(total - 25 >= 0){
			total -= 25
			result[0.25] += 1;
		}
		
		while(total - 10 >= 0){
			total -= 10
			result[0.1] += 1;
		}

		while(total - 5 >= 0){
			total -= 5
			result[0.05] += 1;
		}
		
		while(total - 1 >= 0){
			total -= 1
			result[0.01] += 1;
		}
		
	}

	hundred = new Image();
	hundred.src = 'hundred.gif';
	hundred.onload = function(){
		ctx.drawImage(hundred, 50, 0, 250, 100);
		ctx.fillText("x" + result[100], 340, 55);
	}
	
	fifty = new Image();
	fifty.src = 'fifty.jpg';
	fifty.onload = function(){
		ctx.drawImage(fifty, 50, 125, 250, 100);
		ctx.fillText("x" + result[50], 340, 180);
	}
	
	twenty = new Image();
	twenty.src = 'twenty.jpg';
	twenty.onload = function(){
		ctx.drawImage(twenty, 50, 250, 250, 100);
		ctx.fillText("x" + result[20], 340, 305);
	}
	
	ten = new Image();
	ten.src = 'ten.gif';
	ten.onload = function(){
		ctx.drawImage(ten, 50, 375, 250, 100);
		ctx.fillText("x" + result[10], 340, 430);
	}
	
	five = new Image();
	five.src = 'five.jpg';
	five.onload = function(){
		ctx.drawImage(five, 475, 50, 250, 100);
		ctx.fillText("x" + result[5], 765, 105);
	}
	
	two = new Image();
	two.src = 'toonie.jpg';
	two.onload = function(){
		ctx.drawImage(two, 550, 200, 100, 100);
		ctx.fillText("x" + result[2], 675, 260);
	}
	
	one = new Image();
	one.src = 'loonie.jpg';
	one.onload = function(){
		ctx.drawImage(one, 550, 350, 100, 100);
		ctx.fillText("x" + result[1], 675, 410);
	}
	
	quarter = new Image();
	quarter.src = 'quarter.jpe';
	quarter.onload = function(){
		ctx.drawImage(quarter, 925, 0, 100, 100);
		ctx.fillText("x" + result[0.25], 1050, 60);
	}
	
	dime = new Image();
	dime.src = 'dime.jpg';
	dime.onload = function(){
		ctx.drawImage(dime, 925, 125, 100, 100);
		ctx.fillText("x" + result[0.1], 1050, 185);
	}
	
	nickel = new Image();
	nickel.src = 'nickel.jpe';
	nickel.onload = function(){
		ctx.drawImage(nickel, 925, 250, 100, 100);
		ctx.fillText("x" + result[0.05], 1050, 310);
	}
	
	
	penny = new Image();
	penny.src = 'penny.png';
	penny.onload = function(){
		ctx.drawImage(penny, 925, 375, 100, 100);
		ctx.fillText("x" + result[0.01], 1050, 435);
	}
}
	