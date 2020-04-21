var rain = [];
var i = 0;

function setup(){
	createCanvas(1600,730);
	for (i=0; i< 800; i++){
		rain[i] = new Rain();
	}
}

function draw(){
	background(0);
	for (i=0; i< 800; i++){
		rain[i].fall();
		rain[i].show();
	}
}

function Rain() { 

	this.x = random(width)            
	this.y = random(-2000, -1500);
	this.z = random(0,20);
	this.yspeed = map(this.z,0,20,4,10);
	this.len = map(this.z, 0, 20, 7,15);	  
	this.grav = map(this.z, 0 ,20, 0, 0.2);
	

	this.fall = function(){
		this.y = this.y + this.yspeed;
		this.yspeed = this.yspeed + this.grav;

		if(this.y >= height)
			this.y=random(-500, -50);
			this.yspeed = map(this.z,0,20,4,10);
	}

	this.show = function(){
		weight = map(this.z, 0, 20 , 1, 3)
		stroke(255,255,0);
		strokeWeight(weight);
		line(this.x, this.y, this.x, this.y +this.len);
	}
}
