var values = [];
var temp;
let states = []

function setup(){
	createCanvas(600,400);
	values.length = width;
	for(let i=0; i<values.length; i++){
		values[i] = random(height);
		states[i] = -1;
    }
   	bubblesort(values);
}

function draw(){
	background(0);
	for (let i=0; i< values.length; i++){
		if(states[i] == 1){
			stroke(255,0,255);
		}
		else if(states[i]== 2){
			stroke(0,255,120)
		}
		line(i, height, i, height - values[i]); 
	}
}

async function bubblesort(values){
	for(let i=0; i<values.length; i++){
		for(let j = 0; j<values.length-i-1; j++){
			if(values[j]>values[j+1]){
				states[j] = 1;
				states[j+1] = 2;
				await swap(values, j, j+1);	
			}
		}
  	}
 	for(let i=0; i<values.length; i++){
		for(let j = 0; j<values.length-i-1; j++){
					states[i] =-1;
		}
	}
}


async function swap(arr, a, b){
 	await sleep(0);
 	let temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
}

function sleep(ms){
	return new Promise(resolve => setTimeout(resolve, ms));
}
