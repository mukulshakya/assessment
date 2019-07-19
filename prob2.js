let track = 1;
let temp = 0;

let arr1 = [1,7,4,3,1,9,11,5,10];
arr1.sort();

for(let i=0; i<arr1.length; i++) {
    
    if(arr1[track] <= arr1[track+1]) {
        temp = arr1[track];
        arr1[track] = arr1[track+1];
        arr1[track+1] = temp;
    }
    
    if(track<9) track+=2;
}

console.log(arr1);