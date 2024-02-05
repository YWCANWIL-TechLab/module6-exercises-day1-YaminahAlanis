// * CONDITIONAL EXERCISES


/**
 * Given a random Number representing a person's age, use conditionals to check
 * if the person is able to vote. Return true if they are able to vote, or false
 * if they are not.
 * 
 * In the United States, you can legally vote if you are 18 years or older.
 * 
 * * Note: There is another way to do this without using conditionals. I'll 
 * * show you when we review the exercise together
 * 
 * @param {Number} age 
 * @returns {Boolean}
 */
function canIVote(age){ 
    if (age >=18){
        return true;
}
    else {
        return false;
    }
    // TODO Finish the function
}


/**
 * Given a random Number representing a person's age, and a boolean indicating
 * where or not they were born in the US. Return true if the person can run for
 * President and false if they cannot run for president.
 * 
 * In the United States, you can run for President if you are 35 years or older
 * AND were born in the United States.
 * 
 * @param {Number} age 
 * @param {Boolean} bornInUS 
 * @returns {Boolean}
 */
function canRunForPresident(age, bornInUS) {
    if (age >=35 && bornInUS){
        return true;
 }
    else {
        return false;
    }

    // TODO Finish the function
}


/**
 * Your area code is the first three digits of your phone number.
 * 
 * Given a String representing a city in Illinois, return 815 if the city is 
 * Rockford, or 0 otherwise.
 * 
 * * Note: You will need to standardize your input to make sure it's what you
 * * are expecting this. I would recommend using String's trim() method and 
 * * either using toLowerCase() or toUpperCase() before you compare your string
 * 
 * @param {String} cityInIL 
 * @returns {Number}
 */
function whatIsMyAreaCode(cityInIL) {
    cityInIL=cityInIL.trim().toUpperCase();
    if (cityInIL ==="ROCKFORD"){
        return 815;
}
    else {
        return 0;
    }
    // TODO Finish the function
}


/**
 * Given a Number gasMeter, a num 1 - 100 representing how full your tank is,
 * a Number tirePressure, representing the PSI, and a Boolean batteryCharged,
 * representing whether or not you have enough charge to drive to class, find
 * out whether or not you can drive to class.
 * 
 * To drive to class, your gasMeter must be greater than 0, your tirePressure
 * must be above 28, and batteryCharged must be true. If any of those is not
 * acceptable, return a message saying "Gas Up", "Air Up", or "Get a New 
 * Battery". If all three are acceptable, return a message saying "Drive to 
 * work".
 * 
 * @param {Number} gasMeter 
 * @param {Number} tirePressure 
 * @param {Boolean} batteryCharged 
 * @returns {String}
 */
function driveToClass(gasMeter, tirePressure, batteryCharged) {
    if (gasMeter >0 && tirePressure >28 && batteryCharged) {
        return "Drive to work";
    }
    else if (gasMeter <=0) {
        return "Gas Up";
    }
    else if (tirePressure <28) {
        return "Air Up";
    }
    else if (!batteryCharged) {
        return "Get a New Battery";
    }
    // TODO Finish the function
}


/**
 * You are at the DMV waiting to get a new driver's license. Figure out if you
 * want to wait in line, or come another day. If there are less than 20 people,
 * you will be happy to wait. If there are between 21 and 40 people, you will 
 * begrudgingly wait. If there are more than 40 people, you will leave. Return 
 * a message saying what you will do in each situation.
 * 
 * @param {Number} numPeopleInLine 
 * @returns {String}
 */
function toWaitOrNotToWait(numPeopleInLine) {
    if (numPeopleInLine <20){
        return "happy to wait";
    }
    else if (numPeopleInLine >20 && numPeopleInLine <40) {
        return "begrudginly wait";
    }
    else {
        return "leave"
    }


         
    // TODO Finish the function
}


/**
 * You are getting a lot of phone calls today. You only want to pick up the 
 * phone if it is a person you know. You have callerID to figure out who is
 * calling. There is a chance you will get an important phone call from a
 * potential employer, in which case your phone will display the string 
 * "important". If it is not an important phone call or a person you know,
 * you can assume it is a spam phone call. For the purposes of this exercise,
 * we will say you only know 5 people who will be listed below:
 * 
 * 1. "Gary Johnson"
 * 2. "Bert Kreischer"
 * 3. "Joe Packrat"
 * 4. "Spongebob Squarepants"
 * 5. "Don Carter"
 * 
 * Given a String representing a person's name, return a String saying if you 
 * will call that person back if they call you. This can be accomplished two 
 * different ways.
 * 
 * @param {String} name 
 * @returns {String}
 */
function callThemBackConditional(name) {
    if (name==="Gary Johnson") {
        return "call back";
    }
    if (name==="Bert Kreischer") {
        return "call back";
    }
    if (name==="Joe Packrat") {
        return "call back";
    }
    if (name==="Spongebob Squarepants") {
        return "call back";
    }
    if (name==="Don Carter") {
        return "call back";
    }
    else {
        return "spam";
    }
    // TODO Finish this function using conditionals
}


/**
 * You are getting a lot of phone calls today. You only want to pick up the 
 * phone if it is a person you know. You have callerID to figure out who is
 * calling. There is a chance you will get an important phone call from a
 * potential employer, in which case your phone will display the string 
 * "important". If it is not an important phone call or a person you know,
 * you can assume it is a spam phone call. For the purposes of this exercise,
 * we will say you only know 5 people who will be listed below:
 * 
 * 1. "Gary Johnson"
 * 2. "Bert Kreischer"
 * 3. "Joe Packrat"
 * 4. "Spongebob Squarepants"
 * 5. "Don Carter"
 * 
 * Given a String representing a person's name, return a String saying if you 
 * will call that person back if they call you. This can be accomplished two 
 * different ways.
 * 
 * @param {String} name 
 * @returns {String}
 */
function callThemBackSwitch(name) {
    switch(name) {
        case "Gary Johnson":
        case "Bert Kreischer":
        case "Joe Packrat":
        case "Spongebob Squarepants":
        case "Don Carter":
            return "call back"
        default:
            return "spam"
    }

    // TODO Finish this function using a switch statement
}   

//Finished exercise 1