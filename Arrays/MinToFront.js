//Min to Front
//Given an array of comparable values, move the lowest element to array’s front, shifting backward any elements previously ahead of it. 
//Do not otherwise change the array’s order. Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. As always, do this without using built-in functions.

const minToFront = (arr) => {
    let minVal = arr[0];
    let minIndex = 0;

    for(let i = 1; i < arr.length; i++){
        if(arr[i] < minVal){
            minVal = arr[i];
            minIndex = i;
        }
    }

    for(let i = minIndex; i > 0; i--){
        let temp = arr[i];
        arr[i] = arr[i-1];
        arr[i-1] = temp;
    }

    return arr;
}

console.log(minToFront([4,2,1,3,5]));