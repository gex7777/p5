var circles=[];  //array for storing the objects(ellipses in this case) 
var i = 0;

function setup(){
	createCanvas(1500,700);			//canvas is basically what u draw ur things upon
	for(i=0 ; i< 4; i++){           //the mouse pressed function overrules it..
		circles[i] = new Circles(); // remove that function to see the for loop in action
  }
}
/*function mousePressed(){
	circles.push(new Circles(mouseX, mouseY));
}*/
function draw(){
	background(0);
	for(i=0 ; i<circles.length; i++){
		//function calls to move and display the ellipse
		circles[i].move();
		circles[i].display();
	}
	if (circles.length > 20){
	circles.splice(0,1);
}
}
function mouseDragged(){
	circles.push(new Circles(mouseX, mouseY));//creates a new ellipse at the current mouseX and Y location
											  // when the mouse is clicked and dragged
}

function keyPressed(){
	circles.splice(0,1) //so basically you are doing this in an array
	//so the arguments are the starting index and how many to delete 
	//now elements from index 0th index will be spliced 1 upon a time
	// upon key press
}

if (circles.length > 50){ //prevents from creating more than 50 circles
	circles.splice(0,1);
}

function Circles(x,y){    //you can add move this into another .js file
	this.x = x;            //then move it into the p5 libraries folder
	this.y = y;			  //and add that location to the html file
	r= 0;
	g= 0;
	b= 0;

	this.display =  function(){
		//this changes their color according to their current location
			stroke(255);
			this.r= map(this.x ,0, height, 0, 255);
			this.b= map(this.x ,0, height, 255, 0); 
			this.g= map(this.y ,0, width, 0, 255);
		//fill the r, g b color
			fill(this.r,this.g, this.b);
		//create an ellipse at location this.x , this.y with radius 25 ,25
			ellipse(this.x, this.y, 25, 25);
	}
	this.move = function(){
		// the next 2 lines are what makes them jiggle at their location
			this.x= this.x + random(-1, 1); 
			this.y= this.y + random(-1, 1);

	}
}
