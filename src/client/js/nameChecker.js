function validateURL(inputUrl) {

    var urlRegexPattern = /(([\w]+:)?\/\/)?(([\d\w]|%[a-fA-f\d]{2,2})+(:([\d\w]|%[a-fA-f\d]{2,2})+)?@)?([\d\w][-\d\w]{0,253}[\d\w]\.)+[\w]{2,63}(:[\d]+)?(\/([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)*(\?(&?([-+_~.\d\w]|%[a-fA-f\d]{2,2})=?)*)?(#([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)?/;

    //1. /.*/; 

    let regex = new RegExp(urlRegexPattern);


    console.log("::: Running validateURL :::", inputUrl);
    // check for pattern:url match

    if (regex.test(inputUrl)) {

        //alert("Url is valid");
        console.log("Valid url")
        return true;
    } else {
        alert("Url is not valid!");
        console.log("url not valid, check and enter again")
        return false;
    }
}

export { validateURL }