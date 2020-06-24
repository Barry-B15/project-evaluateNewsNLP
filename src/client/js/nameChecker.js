function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

    if (names.includes(inputText)) { // change this file to urlCheccker
        alert("Welcome, Captain!")
    }
}

/* function validate() {
    var url = document.getElementById("url").value;
    var pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
    if (pattern.test(url)) {
        alert("Url is valid");
        return true;
    }
    alert("Url is not valid!");
    return false;
} */

function validateURL(inputUrl) {
    //var url = document.getElementById("url").value;
    var urlRegexPattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;

    console.log("::: Running validateURL :::", inputUrl);
    // check for pattern:url match
    if (urlRegexPattern.test(inputUrl)) {
        alert("Url is valid");
        console.log("Valid url")
        return true;
    }
    alert("Url is not valid!");
    console.log("url not valid, check and enter again")
    return false;
}

export { checkForName, validateURL }