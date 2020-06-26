function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
            "Picard",
            "Janeway",
            "Kirk",
            "Archer",
            "Georgiou"
        ] //Todo: change this file to urlCheccker and remove this check

    if (names.includes(inputText)) {
        alert("Welcome, Captain!")
    }
}

function validateURL(inputUrl) { // https://stackoverflow.com/questions/1410311/regular-expression-for-url-validation-in-javascript

    //var url = document.getElementById("url").value;
    var urlRegexPattern = /(([\w]+:)?\/\/)?(([\d\w]|%[a-fA-f\d]{2,2})+(:([\d\w]|%[a-fA-f\d]{2,2})+)?@)?([\d\w][-\d\w]{0,253}[\d\w]\.)+[\w]{2,63}(:[\d]+)?(\/([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)*(\?(&?([-+_~.\d\w]|%[a-fA-f\d]{2,2})=?)*)?(#([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)?/;

    //2. /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[-;:&=\+\$,\w]+@)?[A-Za-z0-9.-]+|(?:www.|[-;:&=\+\$,\w]+@)[A-Za-z0-9.-]+)((?:\/[\+~%\/.\w-_]*)?\??(?:[-\+=&;%@.\w_]*)#?(?:[\w]*))?)/

    //1. /.*/; 
    let regex = new RegExp(urlRegexPattern); // now


    console.log("::: Running validateURL :::", inputUrl);
    // check for pattern:url match

    if (regex.test(inputUrl)) {

        //alert("Url is valid");
        console.log("Valid url")
        return true;
    }
    alert("Url is not valid!");
    console.log("url not valid, check and enter again")
    return false;
}

export { checkForName, validateURL }