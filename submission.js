// Task 1
// Input: A number or string
function printAgeIn2026(birthYear){
    let year = Number(birthYear);
    let age = 2026-year;
    console.log("This person will turn " + age + " in 2026.")
    return age;
}
// Input: A number or string
function printAgeIn10Years(age){
    let currentAge = Number(age);
    let newAge = currentAge + 10;
    console.log("This person will be " + newAge + " in 10 years.")
    return newAge;
}
// Input: A number or string
function checkIfAdult(age){
    let currentAge = Number(age);
    let isAdult = currentAge>=18;
    console.log("The person is " + (isAdult ? "" : "not")  + " adult.")
    return isAdult;
}
// Input: A number
function checkIfZero(number){
    let isZero = number === 0;
    console.log("The input is " + (isZero ? "" : "not")  + " 0.")
    return isZero;
}
// Input: First, one string, then one number
function checkIfEquivalent(string, number){
    let input1 = string;
    let input2 = Number(number);
    let isEquivalent = input1 == input2;
    console.log("The string is " + (isEquivalent ? "" : "not")  + " equivalent to the number.")
    return isEquivalent;
}
// Task 2
// Input: A positive number
function unreadAlert(unreadCount){
    unreadCount && console.log("You have " + unreadCount + " messages.")
}
// Input: A number greater than 0
function unreadAlertValidated(unreadCount){
    typeof unreadCount === "number" && unreadCount >0 && console.log("You have " + unreadCount + " messages.")
}

// Input: A number or a string in a form of a number like "2" greater than 0
function unreadAlertStringInput(unreadCount){
    unreadCount && Number(unreadCount) > 0 && console.log("You have " + unreadCount + " messages.")
}
// Input: Any number
function showScore(score){
    let correctedScore = score ?? "N/A";
    console.log("The score is:" + score);
    return correctedScore;
}
// Input: Any string
function printWelcomeMessage(username){
    let userOrPlaceholder = username || "Mustang";
    console.log("Welcome, " + userOrPlaceholder + "!")
    return userOrPlaceholder;
}









