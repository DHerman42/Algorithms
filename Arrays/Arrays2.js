//Reverse
//Given a numerical array, reverse the order of values, in-place. The reversed array should have the same length, 
//with existing elements moved to other indices so that order of elements is reversed. Working 'in-place' means that you cannot use a second 
//array – move values within the array that you are given. As always, do not use built-in array functions such as splice().

const reverseArr = (arr) => {
    for(let i = 0; i < arr.length/2; i++){
        let temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
}

let arr = [1, 2, 3, 4, 5, 6];
reverseArr(arr);
console.log(arr);

//Rotate
//Implement rotateArr(arr, shiftBy) that accepts array and offset. Shift arr's values to the right by that amount. 
//'Wrap-around' any values that shift off array's end to the other side, so that no data is lost. 
//Operate in-place: given ([1,2,3],1), change the array to [3,1,2]. Don't use built-in functions.
//Second: allow negative shiftBy (shift L, not R).
//Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.
//Fourth: minimize the touches of each element.

const rotateArr = (arr, shiftBy) => {
    if(shiftBy > 0){
        for(let i = 1; i <= shiftBy; i++){
            let last = arr[arr.length-1];
            for(let j = arr.length-1; j > 0; j--){
                arr[j] = arr[j-1];
            }
            arr[0] = last;
        }
    } else{
        for(let i = -1; i >= shiftBy; i--){
            let first = arr[0];
            for(let j = 0; j < arr.length-1; j++){
                arr[j] = arr[j+1];
            }
            arr[arr.length-1] = first;
        }
    }
}

arr = [1, 2, 3, 4, 5];
rotateArr(arr, 3);
console.log(arr);
rotateArr(arr, -3);
console.log(arr);

//Filter Range
//Alan is good at breaking secret codes. One method is to eliminate values that lie outside of a specific known range. 
//Given arr and values min and max, retain only the array values between min and max. Work in-place: return the array you are given, 
//with values in original order. No built-in array functions.

const filterRange = (arr, min, max) => {
    let x = 0;
    while(x < arr.length){
        if(arr[x] < min || arr[x] > max){
            for(let j = x; j < arr.length; j++){
                arr[j] = arr[j+1];
            }
            arr.length = arr.length-1
        } else {
            x++;
        }
    }
}

arr = [1, 2, 3, 4, 5];
filterRange(arr, 2, 3);
console.log(arr);

//Concat
//Replicate JavaScript's concat(). Create a standalone function that accepts two arrays. Return a new array containing the first array's elements, 
//followed by the second array's elements. Do not alter the original arrays. Ex.: arrConcat( ['a','b'], [1,2] ) should return new array ['a','b',1,2].

const arrConcat = (arr1, arr2) => {
    let returnArr = [];

    for(let i = 0; i < arr.length; i++){
        returnArr[i] = arr1[i];
    }

    for(let i = 0; i < arr2.length; i++){
        returnArr[arr1.length + i] = arr2[i];
    }

    return returnArr;
}

let arr1 = ['a', 'b'];
let arr2 = [1, 2];
console.log(arrConcat(arr1, arr2));