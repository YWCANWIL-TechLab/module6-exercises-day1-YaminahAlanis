//Booleans
let name="Stacey";
console.log(name==="Greg");
console.log(name==="Bert");
console.log(name==="Stacey");

const array1=[1,2,3,4];
console.log(array1.includes(5));

//Conditionals
name="Kim"; //false
if(name==="Stacey"){
    //Only runs IF the name variable holds "Stacey"
    console.log("Soft skills");
}

let over18=true;
let over19=true;
if(over18 && over19){
    console.log("Go vote");
}

over18=false;

if(over18){
    console.log("Go vote a second time"); //Will not execute since over18 is not true
}

function ableToVote(legalAge){
    if(legalAge){
        return"FUNCTION-Go vote a second time";
    }
}
console.log(ableToVote(true));

const usernames=["Kyle","Kevin","Paula","Yaminah","Matz","Sorhanie"];
// if(usernames.includes("Kyle"))
if(
    usernames.includes("Kyle")||
    usernames.includes("Kevin")||
    usernames.includes("Paula")||
    usernames.includes("Yaminah")||
    usernames.includes("Matz")||
    usernames.includes("Sorhanie")
){
    console.log("Logged In");
}

// if(usernames.includes("Kevin")){
//     console.log("Logged In");
// }

// if(usernames.includes("Kyle")){
//     console.log("Logged In");
// }

// if(usernames.includes("Paula")){
//     console.log("Logged In");
// }

// if(usernames.includes("Yaminah")){
//     console.log("Logged In");
// }

// if(usernames.includes("Matz")){
//     console.log("Logged In");
// }

// if(usernames.includes("Sorhanie")){
//     console.log("Logged In");
// }

let age=7;
if(age>=16){
    console.log("You can see the R-rated movie!");
}
else {
    console.log("Sorry, you're not old enough.");
}

let testscore=95;
if(testscore>=75){
    console.log("Congratulations! You Passed!");
}
else{
    console.log("Sorry, you didn't pass.");
}

let teenAge=15;
if(teenAge>=17){
    console.log("You can see the R rated movie.");
}
else if(teenAge>=13){
    console.log("You can see the PG-13 rated movie");
}
else {
    console.log("You can see the PG rated movie");
}

let processor="i3";
if (processor==="i7"){
    console.log("You can run the fanciest program.");  
}
else if(processor==="i5"){
    console.log("You can run the decent program.");
}
else {
    console.log("You can run solitaire");
}

const today=new Date();
switch(today.getMonth()){
    case 0://January
        console.log("The month is January");
        break;
    case 1://February
        console.log("the month is February");
        break;
    case 2://March
        console.log("The month is March");
        break;
    case 3://April
        console.log("The month is April");
        break;
    case 4://May
        console.log("The month is May");
        break;
    case 5://June
        console.log("The month is June");
        break;
    case 6://July
        console.log("The month is July");
        break;
    case 7://August
        console.log("The month is August");
        break;
    case 8://September
        console.log("The month is September");
        break;
    case 9://October
        console.log("The month is October");
        break;
    case 10://November
        console.log("The month is November");
        break;
    case 11://December
        console.log("The month is December");
        break;
}





let color="purple";
switch(color) {
    case "white":
        console.log("white is a nice color");
        break;

    case "black":
        console.log("black is a nice color");
        break;
         
    case "red":
        console.log("red is a nice color");
        break;
         
    case "green":
        console.log("green is a nice color");
        break;    
       
    case "blue":
        console.log("blue is a nice color");
        break;  
    default:
        console.log("I'n not a fan of that color") 
        break;
}

switch(today.getDay()){
    case 0://Sunday
    case 6://Saturday
        console.log("Sleep In");
        break;
    case 1://Monday
    case 2://Tuesday
    case 3://Wednesday
    case 4://Thursday
    case 5://Friday
        console.log("Go to Front End");
        break;
    // case 0://Sunday
    //     console.log("Sleep In");
    //     break;
    // case 1://Monday
    //     console.log("Go to Front End");
    //     break;
    // case 2://Tuesday
    //     console.log("Go to Front End");
    //     break;
    // case 3://Wednesday
    //     console.log("Go to Front End");
    //     break;
    // case 4://Thursday
    //     console.log("Go to Front End");
    //     break;
    // case 5://Friday
    //     console.log("Go to Front End");
    //     break;
    // case 6://Saturday
    //     console.log("Sleep In");
    //     break;
}

//Ternary Operator
function rRatedMovie(age){
    // let canSeeRRatedMovie=age>=17?"Yes, you can see the movie":"Sorry,you're not old enough yet";
    // return canSeeRRatedMovie;
    return age>=17? "Yes, you can see the movie":"Sorry, you're not old enough yet";
}

//Loops
const students=["Paula","Yaminah","Matz","Sorhanie","Kevin","Kyle"];
console.log(students[0]);
console.log(students[1]);
console.log(students[2]);
console.log(students[3]);
console.log(students[4]);
console.log(students[5]);

//Function Definition is lines 234-240

function loopThroughArray(array){
    //regular ForLoop
    //Prints out each element of any array
    for(let i=0;i<array.length;i++){
        console.log(array[i]);
    }
}
loopThroughArray(students);//Function Call

const frontEnd={
    html:"A markup language for displaying information",
    css:"A stylesheet language for beautifying HTML pages",
    javascript:"A programming language for making webpages interactive"
};

function useForInLoop(object){
    //For/In Loop
    //Prints out every property and value of any object
    for(let property in object){
        console.log(`Property:${property},Value:${object[property]}`)//one line
        // console.log(property);
        // console.log(object[property]);//lines 253-254 2 lines longer form
    }
}
useForInLoop(frontEnd);

const programmingLanguages=["Javascript","PHP","TypeScript","Java","C++","C#","YAML"];

function useForOfLoop(array){
    //For/Of Loop
    //Prints out every elemnt of any array
    //Cannot loop backwards
    //Can only iterate by 1
    for(let element of array){
        console.log(element);
    }
}
useForOfLoop(programmingLanguages);

function useWhileLoop() {
    let randomNumber;
    while(randomNumber!==9){
        randomNumber=Math.floor(Math.random()*10);
        console.log(randomNumber);
    }
}
useWhileLoop();

function useDoWhileLoop(){
//Do/While Loops
//Prints out "the loop has run" even though the condition is false
    do{
        console.log("The loop has run");
    }while(false)
}
useDoWhileLoop();


