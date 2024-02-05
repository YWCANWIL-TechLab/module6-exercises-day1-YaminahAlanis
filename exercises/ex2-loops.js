// * LOOP EXERCISES

/**
 * Given a random object you have no information on, print out all of its 
 * properties. Do this using a For/In Loop.
 * 
 * Since we are printing out its properties, you will not return anything.
 * 
 * @param {Object} obj 
 */
function printOutProperties(obj) {
    for(let prop in obj){
        console.log(prop);
    }
    // TODO Finish the function
}
const scores={
    math:85,
    science:74,
    english:63
}
printOutProperties(scores);

/**
 * Given a random object you have no information on, print out all of its 
 * properties and their values. Do this using a For/In loop.
 * 
 * Since we are printing out its properties, you will not return anything.
 * 
 * * The easiest way to do this uses a backtick string.
 * 
 * @param {Object} obj 
 */
function printOutPropertiesAndValues(obj) {
   // TODO Finish the function 
   for(let prop in obj){
        console.log(`${prop} score:${obj[prop]}`);
    }
}
// const tests={
//     math:85,
//     science:74,
//     english:63
// }
printOutPropertiesAndValues(scores);
    



/**
 * Given a random String, print out all of its characters using a For/Of Loop.
 * 
 * Since you are printing out characters, you will not need to return anything.
 * 
 * @param {String} str 
 */
function printStringCharacters(str) {
    for (let character of str){
        console.log(character);
    }
    // TODO Finish the function
}
printStringCharacters("letters");


/**
 * Given a random string, print out all of its characters and their indexes
 * using a For/Of loop. 
 * 
 * Since you are printing out characters/indexes, you will not need to return
 * anything.
 * 
 * @param {String} str 
 */
function printStringCharactersAndIndexes(str) {
    
    // TODO Finish the function  //skip
}


/**
 * Given an array of dates, each of which is a person's birthday, return true 
 * true if today's date is anyone's birthday, or false otherwise.
 * 
 * You will need to create a date for today to accomplish this. When you make 
 * you Date, remember to use new Date(), not just Date(), or it will not work
 * properly.
 * 
 * ! You must use a loop for this function.
 * 
 * @param {Date[]} dateArray 
 * @returns {Boolean}
 */
function anyBirthdays(birthdayArray) {
    let today=new Date();
    for (let date of birthdayArray){
        if (today.getDate()===date.getDate() && today.getMonth()===date.getMonth()){
            return true;
        }
    }
    // TODO Finish the function
        return false;
}
console.log(anyBirthdays([new Date()]));


/**
 * Given an array of Strings representing different colors, colorArray, and a 
 * String, favColor, representing a color to try to find, return true if color 
 * exists in the colorArray, or false if it does not.
 * 
 * @param {String[]} colorArray
 * @param {String} color 
 * @returns {Boolean}
 */
function myFavoriteColor(colorArray, favColor) {
    for(let color of colorArray){
        if (color===favColor){
            return true;
        }
    }
    return false;
    // TODO Finish the function
}
console.log(myFavoriteColor(["blue","green","red"],"burgundy"));



/**
 * Given an array of person objects, return an array of every person object 
 * that is a student. 
 * 
 * A person object looks like this:
 * 
 * const person = {
 *      firstName: "John",
 *      lastName: "Doe",
 *      student: true
 * }
 * 
 * Note: We have a special loop designed for this.
 * 
 * @param {Object[]} personArray 
 * @returns {Object[]}
 */
function findAllStudents(personArray) {
    const studentArray=[]
    for (let person of personArray){
        if (person.student){
            studentArray.push(person)
        }
    }
        return studentArray
    // TODO Finish the function
}


/**
 * Given a random string, return a new string with the last character as an 
 * uppercase letter. You can assume that the last character will not be any 
 * form of punctuation mark like a ?, !, or .
 * 
 * Return the new string.
 * 
 * @param {String} str
 * @returns {String}
 */
function lastToUppercase(str) {
    // TODO Finish the function
/** 
 * 1.Save my copy(in a variable)
 * 2.Check each index to see if it is the last character
 * 3.If I do find the last character,convert it to uppercase and add to copy
 * 4. If a character isn't the last character,add it to the copy
 * 
*/
let answer="";
for(let i=0;i<str.length;i++){
    if(i===str.length -1){//i is the last index
        answer=answer+str[i].toUpperCase();
    }
    else {//i is not the last index
        answer=answer+str[i];
    }
}
return answer;
}
lastToUppercase("lastly")
console.log(lastToUppercase("lastly"));

/**
 * Given a Number, magicNumber, use a while loop to continue generating and 
 * printing random numbers until the random Number is the same as the magicNumber.
 * 
 * Remember: You can generate a random Number using: Math.floor(Math.random() * [UPPER BOUND]) + [LOWER BOUND]
 * 
 * @param {Number} magicNumber 
 */
function magicNumber(magicNumber) {
    let randomNumber;
    while(randomNumber!==magicNumber){
        randomNumber=Math.floor(Math.random()*10);
        console.log(randomNumber);
    }
    // TODO Finish the function
}  

//Finished exercise 2