import { validateURL } from './nameChecker.js'
import "regenerator-runtime/runtime"; // fix for runtime issues when using async func stackoverflow


const handleSubmit = function handleSubmit(event) {
    event.preventDefault()


    let url = document.getElementById('name').value;

    if (checkURL(url) == true) {
        console.log("::: Form Submitted :::");

        // call the nlp endpoint
        postnlpData('http://localhost:8081/addNLP', url);


    } else {

        document.getElementById('err').innerHTML = 'URL Error: Something went wrong';
    }

};

function checkURL(inputUrl) {

    //let url = document.getElementById('name').value;
    const errorMsg = "Invalid url entered";

    if (Client.validateURL(inputUrl)) {
        console.log(inputUrl);
    } else {
        console.log(errorMsg);
        document.getElementById('error').innerHTML = 'Please, enter a valid url';
    }
}

// define an async test
const postnlpData = async(url, input) => {
    const res = await fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            text: input
        })
    });

    try {
        const newData = await res.json();

        console.log('NEWDATA: ' + newData);

        //if (res.status >= 200 && res.status < 400) {
        //the ui update 
        document.getElementById('polarity').innerHTML = 'Polarity: ' + newData.polarity;
        document.getElementById('polarity_confidence').innerHTML = 'Polarity_Confidence: ' + newData.polarity_confidence;
        document.getElementById('subjectivity').innerHTML = 'Subjectivity: ' + newData.subjectivity;
        document.getElementById('subjectivity_confidence').innerHTML = 'Subjectivity_Confidence: ' + newData.subjectivity_confidence;
        document.getElementById('text').innerHTML = 'Text Content: ' + newData.text;
        // }
        return newData;

    } catch (error) {
        //catch print out the error to ui
        document.getElementById('error').innerHTML = 'Please check your url and try again';
        // console.log('postError', error)
    }
}

export {
    handleSubmit,
    checkURL,
    postnlpData,
}