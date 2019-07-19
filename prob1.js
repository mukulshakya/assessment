let arr1 = ['kasol','manali','delhi','kasol','manali','agra',1,3,4,true,false,true,1];
let arr2 = [];

arr1.forEach(elem => {
    //push new element in arr2 only if it is not present in arr2
    if(!arr2.includes(elem)) arr2.push(elem);
});

console.log(arr2);