//Push Front
//Given an array and an additional value, insert this value at the beginning of the array.

const pushFront = (arr, x) => {
    for(let i = arr.length; i > 0; i--){
        arr[i] = arr[i-1];
    }
    arr[0] = x;
}

let arr = [5, 7, 2, 3];
let x = 8;
pushFront(arr, x);
console.log(arr);

//Pop Front
//Given an array, remove and return the value at the beginning of the array. Prove the value is removed from the array by printing it. 

const popFront = (arr) => {
    let front = arr[0];

    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i+1];
    }
    arr.length = arr.length-1;
    console.log(arr);
    return front;
}

arr = [0, 5, 10, 15];
console.log(popFront(arr));

//Insert At
//Given an array, index, and additional value, insert the value into array at given index. You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).

const insertAt = (arr, index, x) => {
    for(let i = arr.length; i > index; i--){
        arr[i] = arr[i-1];
    }
    arr[index] = x;
}

arr = [100, 200, 5];
x = 311;
let index = 2;
insertAt(arr, index, x);
console.log(arr);

//BONUS: Remove At
//Given an array and an index into array, remove and return the array value at that index. Prove the value is removed from the array by printing it. 
//Think of popFront(arr) as equivalent to removeAt(arr,0).

const removeAt = (arr, index) => {
    let value = arr[index];

    for(let i = index; i < arr.length; i++){
        arr[i] = arr[i+1];
    }
    arr.length = arr.length-1;
    console.log(arr);
    return value;
}

arr = [1000, 3, 204, 77];
index = 1;
console.log(removeAt(arr, index));

//BONUS: Swap Pairs
//Swap positions of successive pairs of values of given array. If length is odd, do not change the final element.

const swapPairs = (arr) => {
    for (let i = 1; i < arr.length; i += 2){
        let temp = arr[i];
        arr[i] = arr[i-1];
        arr[i-1] = temp;
    }
}

arr = [1, 2, 3, 4, 5];
swapPairs(arr);
console.log(arr);

//BONUS: Remove Duplicates
//Given a sorted array, remove duplicate values. Because array elements are already in order, all duplicate values will be grouped together. 
//If you already made the Remove At function, you are welcome to use that! If you solved this using nested loops, for an extra challenge, 
//try to do it without any nested loops!

const removeDupes = (arr) => {
    let i = 0;

    while(i < arr.length-1){
        if(arr[i] === arr[i+1]){
            removeAt(arr, i);
        } else{
            i++;
        }
    }
}

arr = [-2, -2, 3.14, 5, 5, 10];
removeDupes(arr);
console.log(arr);