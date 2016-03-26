		//Canvas stuff
		var canvas = document.getElementById("myCanvas");
		var ctx = canvas.getContext("2d");
		var w = canvas.width;
		var h = canvas.height;
		var mx, my;
		//main variables
		var snake= []
		snake.length=4
		var score=0
		var difficulty=1
		var direction=0
		var gameOn=false;//variable that checks if game is playing or not
		var grid=[]	//map array, will be used to make 2D array
		var gridLength=25//map is 25x25
		function button (boxx,boxy,boxw,boxh){//constructor function that creates a button
			return{
				x:boxx,
				y:boxy,
				w:boxw,
				h:boxh,
				col:"red",
				drawMe:function(){//creates box
					ctx.fillStyle=this.col
					ctx.fillRect(this.x,this.y,this.w,this.h)
				},
				mouseOver:function(){//checks if mouse if over box
					var result=false
					if(mx>this.x&&mx<this.x+this.w){
						if(my>this.y&&my<this.y+this.h)	result=true;
						if(my>this.y&&my<this.y+this.h) result=true;
					}
					else if(mx>this.x&&mx<this.x+this.w){
						if(my>this.y&&my<this.y+this.h)	result=true;
						if(my>this.y&&my<this.y+this.h) result=true;
					}
				return result;
				}			
			}
		}
		var buttons=[]
		buttons[0]=button(250,250,50,50);
		 for(var i=0;i<gridLength;i++){
			grid[i]=[]//creates 2D grid
			for(var k=0;k<gridLength;k++){
				grid[i][k]=0//sets 2D grid black
			}
		}
		for(var l=0;l<gridLength;l++){
			grid[0][l]=1                //WALLS
			grid[l][0]=1				//WALLS
			grid[(gridLength-1)][l]=1   //WALLS
			grid[l][(gridLength-1)]=1   //WALLS
		}
		grid=makeSnake(grid)//Puts snake on grid
		init();//main game function
		//key controls
		window.addEventListener('keydown', function(evt){//key events
			var key = evt.keyCode;
			if((key==38)&&(direction!=3))direction=2; //moves up
			else if((key==39)&&(direction!=1))direction=0;//moves right
			else if((key==37)&&(direction!=0))direction=1;//moves left
			else if((key==40)&&(direction!=2))direction=3//moves down
		}, false);
		function init(){	//main game function
			ctx.fillStyle="black"
			ctx.fillRect(0,0,550,480);
			for(var i=snake.length-1;i>=0;i--){
				if(i==0){//working with the head of the snake
					if (direction==0) snake[0]={x:snake[0].x+1,y:snake[0].y}//moves snake to the right
					else if(direction==1) snake[0]={x:snake[0].x-1,y:snake[0].y}//moves snake left
					else if(direction==2) snake[0]={x:snake[0].x,y:snake[0].y-1}//moves snake up
					else if(direction==3) snake[0]={x:snake[0].x,y:snake[0].y+1}//moves snake down
					if(snake[0].x<1||snake[0].x>=(gridLength-1)||snake[0].y<1||snake[0].y>=(gridLength-1)){//checks to see if snake hits border
						gameOver();
						gameOn=false;
						return;//stops init function
					}
					if(grid[snake[0].x][snake[0].y]==1){//checks to see if snake hits food piece
						score+=20
						grid=makeFood(grid)//adds another food
						snake.push({x:snake[snake.length-1].x, y:snake[snake.length-1].y});//adds another element to the snake array
						grid[snake[snake.length-1].x][snake[snake.length-1].y]=2;//adds another snake to the grid
						if((score%100)==0){//every time score is a multiple of 100, the snake gets difficulty gets higher
							difficulty+=1
						}
					}
					else if(grid[snake[0].x][snake[0].y]==2){//checks to see if snake head hits himself
						gameOver()
						gameOn=false;
						return;//stops init function
					}
					grid[snake[0].x][snake[0].y]=2		
				}
				else{
					if(i==(snake.length-1)){//working with last piece of snake
						grid[snake[i].x][snake[i].y]=0//sets last piece of snake to black
					}
					snake[i]={x:snake[i-1].x,y:snake[i-1].y};
					grid[snake[i].x][snake[i].y]=2
				}
			}
			for(var i=0;i<gridLength;i++){
				for(var k=0;k<gridLength;k++){
					if(grid[i][k]==1)ctx.fillStyle="red"//food and walls
					else if(grid[i][k]==2)ctx.fillStyle="white"//snake
					else ctx.fillStyle="black"//backround
					ctx.fillRect(i*10+150,k*10+150,9,9);//makes grid
				}
			}	
			if(gameOn==true){//runs init function and moves snake for a certain time interval
			if (difficulty<5)	setTimeout(init,250-(difficulty*50));
			else setTimeout(init,50)//stops increasing speed when it gets too high
			}
			ctx.fillStyle = 'red';
			ctx.font = '12px sans-serif';
			ctx.fillText('Score: ' + score + '   Level: ' + difficulty, 225, 125);
			ctx.fillStyle="white"
			ctx.fillText("CONTROL SNAKE WITH ARROW KEYS. AVOID HITTING WALLS AND YOURSELF",50,450);
			ctx.fillText("BEWARE OF SNAKE GETTING BIGGER AND FASTER",130,475);
			
		}
		function makeFood(grid){
		do{
			var fx=1+Math.round(Math.random()*(gridLength-3))	//sets random coordinates 
			var fy=1+Math.round(Math.random()*(gridLength-3))	
			}
			while(grid[fx][fy]===2)//makes sure food doesnt spawn on snake			
			grid[fx][fy]=1
			return grid
		}
		function makeSnake(grid){
			if (gameOn==false){
				var sx=Math.ceil(gridLength/2)//sets snake coordinates
				var sy=Math.ceil(gridLength/2)
				for(var i=0;i<snake.length;i++){
					snake[i]={x: sx-i,y:sy};
					grid[sx-i][sy]=2
				}
			}
			return grid
		}
		function gameOver(){
			gameOn=false;//means game is not active
			play();
			ctx.fillStyle="yellow"
			ctx.font="18px sans-serif"
			ctx.fillText("Game Over",230,332)
			ctx.fillText("Your Score Was " + score +"!", 199,365);
			ctx.fillText("Play Again To Beat It!", 192,460);
			var highScore = 0;
			if(score>highScore)highScore=score;	
			var temp=""	


			ctx.fillText("High Score: " + highScore, 219,435);
		

			
		}	
		function play(){	//function that starts the game
			if(gameOn==false){
				for(var i=0;i<gridLength;i++){
					for(var k=0;k<gridLength;k++){
						if(grid[i][k]==1)ctx.fillStyle="red"//food and walls
						else if(grid[i][k]==2)ctx.fillStyle="white"//snake
						else ctx.fillStyle="black"//backround
						ctx.fillRect(i*10+150,k*10+150,9,9);//makes grid
					}
				}	
				for(var l=0;l<gridLength;l++){
					grid[0][l]=1                //WALLS
					grid[l][0]=1				//WALLS
					grid[(gridLength-1)][l]=1   //WALLS
					grid[l][(gridLength-1)]=1   //WALLS
				}
				ctx.fillStyle="yellow"
				ctx.font = '25px sans-serif';
				ctx.fillText("SNAKE!",230,225);
				buttons[0].drawMe();//draws play game button
				ctx.fillStyle="yellow"
				ctx.font = '9px sans-serif';
				ctx.fillText("Play Game",252,275);
				snake.length=4
				canvas.addEventListener('click', function (evt){
					while(buttons[0].mouseOver() && gameOn==false){//runs game when button is 
						for(var i=0;i<gridLength;i++){
							grid[i]=[]//creates 2D grid
							for(var k=0;k<gridLength;k++){
								grid[i][k]=0//sets 2D grid black
							}
						}
						for(var l=0;l<gridLength;l++){
							grid[0][l]=1                //WALLS
							grid[l][0]=1				//WALLS
							grid[(gridLength-1)][l]=1   //WALLS
							grid[l][(gridLength-1)]=1   //WALLS
						}
						grid=makeFood(grid)//Puts food on grid
						var sx=Math.ceil(gridLength/2)//sets snake coordinates
						var sy=Math.ceil(gridLength/2)
						for(var i=0;i<snake.length;i++){
							snake[i]={x: sx-i,y:sy};
							grid[sx-i][sy]=2//gives snake white squares
						}
							gameOn=true;
							score=0//set all variables back to normal
							difficulty=1
							direction=0
							init();
					}	
				});

			}
		}
		play();
		
		canvas.addEventListener ('mouseout', function(){pause = true;}, false);
		canvas.addEventListener ('mouseover', function(){pause = false;}, false);
		canvas.addEventListener('mousemove', function(evt) {
			var mousePos = getMousePos(canvas, evt);
			mx = mousePos.x;
			my = mousePos.y;
		}, false);
		function getMousePos(canvas, evt) 
		{

			var rect = canvas.getBoundingClientRect();

			return {
				x: evt.clientX - rect.left,
				y: evt.clientY - rect.top

			};

		}



    