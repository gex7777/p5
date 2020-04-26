var values = [];
let states =[];

function setup(){
	createCanvas(windowWidth, windowHeight);
	values.length = width;
	for(let i=0; i<values.length; i++){
		values[i] = random(height);
		states[i] = -1;
    }
	quicksort(values, 0, values.length - 1);
}


function draw(){
	background(100);
  	for (let i=0; i< values.length; i++){
  		if (states[i] == 0)
			stroke(255,0,0); 
		else if (states[i] == 1)
		{
			stroke(0);
		}
		else
			stroke(200);
		line(i, height, i, height - values[i]);  
	}
}

async function quicksort(arr, start, end){
	if (start >= end) // subdividing the array and checking for the codition
		return;
 
	let index = await partition(arr, start, end);
	states[index] = -1

	await Promise.all([quicksort(arr, start, index-1),quicksort(arr, index+1, end)])
	//await quicksort(arr, start, index-1);
	//await quicksort(arr, index+1, end);
}

async function partition(arr, start, end){
	for(let i = start; i< end; i++){
			states[i] =1;
	}

	let pivotIndex = start;
	let pivotValue = arr[end];
	states[pivotIndex] = 0
	for( let i = start; i< end; i++){
		if (arr[i]<pivotValue){
		  await swap(arr, i, pivotIndex);
		  states[pivotIndex] = -1
		  pivotIndex++;
		  states[pivotIndex] = 0
        }
	}
	await swap(arr, pivotIndex, end);
	for(let i = start; i< end; i++){
		if(i != pivotIndex)
			states[i] =-1;
	}
	return pivotIndex;
}

async function swap(arr, a, b){
	await sleep (7);
 	let temp = arr[a];
	arr[a] = arr[b];
	arr[b] = temp;
}

function sleep(ms){
	return new Promise(resolve => setTimeout(resolve, ms));
}