//Remove Blanks
//Create a function that, given a string, returns all of that string’s contents, but without blanks. 

const removeBlanks = (str) => {
    let returnStr = "";
    for(let i = 0; i < str.length; i++){
        if(str[i] != ' '){
            returnStr += str[i];
        }
    }
    return returnStr;
}

console.log(removeBlanks(" Pl ayTha tF u nkyM usi c "));

//Get Digits
//Create a JavaScript function that given a string, returns the integer made from the string’s digits. You are allowed to use isNaN() and Number().

const getDigits = (str) => {
    let returnStr = "";
    for(let i = 0; i < str.length; i++){
        if(!isNaN(str[i])){
            returnStr += str[i];
        }
    }
    return Number(returnStr);
}

console.log(getDigits("abc8c0d1ngd0j0!8"));

//Acronyms
//Create a function that, given a string, returns the string’s acronym (first letter of the word capitalized). You are allowed to use .split() and .toUpperCase().

const acronym = (str) => {
    const words = str.split(' ');
    let returnStr = "";
    
    for(let i = 0; i < words.length; i++){
        if(words[i] != ""){
            returnStr += words[i][0];
        }
    }
    return returnStr.toUpperCase();
}

console.log(acronym(" there's no free lunch - gotta pay yer way. "));

//Count Non-Spaces
//Create a function that, given a string, returns the number of non-space characters found in the string. 

const countNonSpaces = (str) => {
    let count = 0;

    for(let i = 0; i < str.length; i++){
        if(str[i] != " "){
            count++;
        }
    }

    return count;
}

console.log(countNonSpaces("Honey pie, you are driving me crazy"));

//Remove Shorter Strings
//Create a function that, given an array of strings and a numerical value, returns an array that only contains strings longer than or equal to the given value.

const removeShorterStrings = (arr, length) => {
    let returnArr = [];

    for(let i = 0; i < arr.length; i++){
        if(arr[i].length >= length){
            returnArr[returnArr.length] = arr[i];
        }
    }

    return returnArr;
}

console.log(removeShorterStrings(['There', 'is', 'a', 'bug', 'in', 'the', 'system'], 3));