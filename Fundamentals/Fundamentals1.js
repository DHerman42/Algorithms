//Setting and Swapping
//Set myNumber to 42. Set myName to your name. Now swap myNumber into myName & vice versa.
let myNumber = 42;
let myName = "Douglas Herman";

let temp = myName;
myName = myNumber;
myNumber = temp;

console.log(myNumber);
console.log(myName);

//Print -52 to 1066
//Print integers from -52 to 1066 using a FOR loop.

for (let i = -52; i <= 1066; i++){
    console.log(i);
}

//Don’t Worry, Be Happy
//Create beCheerful(). Within it, console.log string "good morning!" Call it 98 times.

const beCheerful = () => {
    console.log("Good Morning!");
}

for(let i = 1; i <= 98; i++){
    beCheerful();
}

//Multiples of Three – but Not All
//Using FOR, print multiples of 3 from -300 to 0. Skip -3 and -6.

for(let i = -300; i <= 0; i += 3){
    if(i !== -3 && i !== -6){
        console.log(i);
    }
}

//Printing Integers with While
//Print integers from 2000 to 5280, using a WHILE.

let x = 2000;
while(x <= 5280){
    console.log(x);
    x++;
}

//You Say It’s Your Birthday
//If 2 given numbers represent your birth month and day in either order, log "How did you know?", else log "Just another day...." 

let month = 6;
let day = 4;

let e = 4;
let f = 6;

if((e === month && f === day) || (f === month && e === day)){
    console.log("How did you know?");
}
else{
    console.log("Just another day....")
}

//Leap Year
//Write a function that determines whether a given year is a leap year. If a year is divisible by four, it is a leap year, unless it is divisible by 100. However, if it is divisible by 400, then it is.

const leapYearTest = (year) => {
    if(year % 4 == 0){
        if(year % 400 == 0){
            console.log("Leap Year");
        } else if(year % 100 == 0){
            console.log("Not Leap Year");
        } else{
            console.log("Leap Year");
        }
    } else{
        console.log("Not Leap Year");
    }
}

leapYearTest(2020);


//Print and Count
//Print all integer multiples of 5, from 512 to 4096. Afterward, also log how many there were.

x = 512;
let count = 0;

while(x % 5 != 0){
    x++;
}

while(x <= 4096){
    console.log(x);
    count++;
    x +=5;
}
console.log(count);

//Multiples of Six
//Print multiples of 6 up to 60,000, using a WHILE.

x = 6;

while(x <= 60000){
    console.log(x);
    x += 6;
}

//Counting, the Dojo Way
//Print integers 1 to 100. If divisible by 5, print "Coding" instead. If by 10, also print " Dojo".

for(let i = 1; i <= 100; i++){
    if(i % 10 == 0){
        console.log("Coding Dojo");
    } else if(i % 5 == 0){
        console.log("Coding");
    } else {
        console.log(i);
    }
}

//What Do You Know?
//Your function will be given an input parameter incoming. Please console.log this value.

const whatDoYouKnow = (incoming) => {
    console.log(incoming);
}

whatDoYouKnow("Test");

//Whoa, That Sucker’s Huge…
//Add odd integers from -300,000 to 300,000, and console.log the final sum. Is there a shortcut?

x = -300000;
y = 300000;
let total = 0;

if(x % 2 == 0){
        x++;
}
if(y % 2 == 0){
    y--;
}

if(x + y == 0){
    console.log(total);
} else {
    for(x; x <= y; x += 2){
        total += x;
    }
    console.log(total);
}

//Countdown by Fours
//Log positive numbers starting at 2016, counting down by fours (exclude 0), without a FOR loop.

x = 2016;

while(x > 0){
    console.log(x);
    x -= 4;
}

//Flexible Countdown
//Based on earlier “Countdown by Fours”, given lowNum, highNum, mult, print multiples of mult from highNum down to lowNum, using a FOR. For (2,9,3), print 9 6 3 (on successive lines).

const countdown = (lowNum, highNum, mult) => {
    while(highNum >= lowNum){
        console.log(highNum);
        highNum -= mult;
    }
}

countdown(2, 9, 3);

//The Final Countdown
//This is based on “Flexible Countdown”. The parameter names are not as helpful, but the problem is essentially identical; don’t be thrown off! Given 4 parameters (param1,param2,param3,param4), 
//print the multiples of param1, starting at param2 and extending to param3. One exception: if a multiple is equal to param4, then skip (don’t print) it. Do this using a WHILE. Given (3,5,17,9), 
//print 6,12,15 (which are all of the multiples of 3 between 5 and 17, and excluding the value 9).

let param1 = 3;
let param2 = 5;
let param3 = 17;
let param4 = 9;

while(param2 % param1 != 0){
    param2++;
}
while(param2 < param3){
    if(param2 != param4){
        console.log(param2);
    }
    param2 += param1;
}