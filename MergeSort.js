var values = []

function setup(){
    createCanvas(1500,730);
    values.length = width;
    for(let i=0; i<values.length; i++){
        values[i] = random(height);
    }
    mergesort(values, 0, values.length-1)
}

function draw(){
    background(120);
    //mergesort(values, 0, values.length-1)    

    for (let i=0; i< values.length; i++){
        stroke(0);
        line(i, height, i, height - values[i]);
    }
}

async function mergesort(arr, start, end){
    if(end - start <= 0)
        return;

    let middle = Math.floor((start + end)/2);

    await Promise.all([mergesort(arr, start, middle),mergesort(arr, middle+1, end)]);
    await merge(arr, start, middle, end);
}

async  function merge(arr, start, middle, end){
    let sizeL = middle - start + 1;
    let arrL = arr.slice(start, middle+1);
    
    let sizeR = end - middle;
    let arrR = arr.slice(middle+1, end+1);
    
    let a = 0, b = 0, k = start;
    while (a< sizeL && b < sizeR){
        if (arrL[a] <= arrR[b]){
        	await add_1(arr, arrL,a , k);
            //arr[k] = arrL[a];
            a++
        } 
        else{
        	await add_1(arr, arrR, b, k);
            //arr[k] = arrR[b];
            b++
        } 
      k++
    } 
    while (a < sizeL){ 
    	await add_1(arr, arrL, a, k);
        //arr[k] = arrL[a]; 
        a++
        k++
    } 
    while (b < sizeR) {
    	await add_1(arr, arrR, b, k);
        //arr[k] = arrR[b];
      b++
      k++
    }
}


async function add_1(arrX, arrY, h, x){
	await sleep(5);
	arrX[x] = arrY[h]
}

function sleep(ms){
	return new Promise(resolve => setTimeout(resolve, ms));
}