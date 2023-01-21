//get user input
//controller function
function getValue() {
    //make sure the alert is invisible
    document.getElementById("alert").classList.add("invisible");
    let userString = document.getElementById("userString").value;    
    
    if (userString.length > 1) {
        //call checkForPalindrome passing it the value of userString and setting that to returnObj
        let returnObj = checkForPalindrome(userString);
        //calling displayMessage
        displayMessage(returnObj);
    }
    else {
        alert("You must enter at least 2 characters to reverse your string!");
    }
}

//check palindrome
//logic function
function checkForPalindrome(userString) {
    //convert all characters to lower case
    userString = userString.toLowerCase();
    //remove spaces and special characters
    let regex = /[^a-z0-9]/gi;
    //return any character in regex and replace every character that is not with ""
    userString = userString.replace(regex,"");
    //initialize empty array
    let revString = [];
    //declaring a return object
    let returnObj = {};
    //reverse a string using a for loop and storing into revString
    for (let index = userString.length - 1; index >= 0; index--) {
        revString += userString[index];
    }
    //Check if revString is equivalent to userString
    if(revString == userString) {
        returnObj.msg = "Well done! You found a Palindrome!"  
    }
    else {
        returnObj.msg = "Sorry! You did NOT enter a Palindrome!"  
    }
    returnObj.reversed = revString;
    return returnObj;
}

//Display the palindrome check to user
//view function
function displayMessage(returnObj) {
    document.getElementById("alertHeader").innerHTML = returnObj.msg;
    //write reversed string to the page
    document.getElementById("msg").innerHTML = `Your phrase reversed is: ${returnObj.reversed} `;
    //turn alert message box on
    document.getElementById("alert").classList.remove("invisible");
}