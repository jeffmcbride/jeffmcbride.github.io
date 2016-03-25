var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
ctx.fillRect(0,0,1250,475);

//one ball
class ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  draw(){
	  ctx.fillStyle = "red";
	  ctx.fillRect(this.x, this.y, 50, 50);  
  }
  move(){
	ctx.fillStyle = "black"
	  ctx.fillRect(this.x, this.y, 50, 50);
	  this.y += 1;
	  this.draw();
  }
  
   jump(){
	ctx.fillStyle = "black"
	ctx.fillRect(this.x, this.y, 50, 150);
    this.y -= 75;
	this.draw();
  }
  
}

//one post
class post {
  constructor(x, y) {
    this.x = x;
	this.y = y;
  }
  draw(){
	  ctx.fillStyle = "orange";
	  ctx.fillRect(this.x,  this.y, 50, 150);  
  }
  move(){
	ctx.fillStyle = "black"
	ctx.fillRect(this.x, this.y, 50, 150);
    this.x -= 1;
	this.draw();
  }
  
}

//Create ball
football = new ball(150, 200);
football.draw();

//Create post
Post = new post(1000, 250);
Post.draw();

//Move ball constantly (Set Interval in html)
function moveBall(){
	football.move();
}

//Move one post
function movePost(){
	Post.move();
}

//Make ball jump up
function jump(){
	football.jump();
}

	






