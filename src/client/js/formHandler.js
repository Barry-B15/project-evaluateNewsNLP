//import { response } from "express" // no longer needed?
import { checkForName, validateURL } from './nameChecker.js'


const handleSubmit = function handleSubmit(event) {
    event.preventDefault()


    //let url = document.getElementById('name').value;

    checkURL();


    /* if (!url == '') {
        Client.checkForName(url)
        console.log(url);
    } else {
        document.getElementById('error').innerHTML = 'Please, enter a valid url';
    }
 */

    console.log("::: Form Submitted :::");
    fetch('http://localhost:8081/addNLP', {
            method: 'POST',
            mode: 'cors',
            credentials: 'same-origin',
            cache: 'no-cache',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ url })

        })
        .then(res => res.json())
        .then(function(res) {
            //updateUI();
            document.getElementById('polarity').innerHTML = 'Polarity: ' + res.polarity;
            document.getElementById('polarity_confidence').innerHTML = 'Polarity Confidence: ' + res.polarity_confidence;
            document.getElementById('subjectivity').innerHTML = 'Subjectivity: ' + res.subjectivity;
            document.getElementById('subjectivity_confidence').innerHTML = 'Subjectivity Confidence: ' + res.subjectivity_confidence;
            document.getElementById('text').innerHTML = 'Text Content: ' + res.text;
        })
        .catch('error in fetch: ', error)
}

function checkURL() { // not serving any purpose, used for testing jest

    let url = document.getElementById('name').value;

    if (Client.validateURL(url)) {
        console.log(url);
    } else {
        document.getElementById('error').innerHTML = 'Please, enter a valid url';
    }
}
/* const getnlpData = async(baseURL, data) => {
    console.log('GET nlpData', data);

    const myURL = baseURL;

    const res = await fetch(myURL, data);

    try {
        const myData = await res.json();
        return myData;
    } catch (err) {
        console.log('getDataError', err);
    }
}
 */
/* const postnlpData = async(url, input) => {
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
        console.log('POST', newData);
        return newData;
    } catch (error) {
        console.log('postError', error)
    }
}
 */


/* const updateUI = async() => {
    const request = await fetch('/textapi')

    console.log('UPDATE UI')
    try {
        const allData = await request.json()

        console.log('UI allData', +allData);

        // display results to this list
        document.getElementById('polarity').innerHTML = res.polarity; // data.polarity?
        document.getElementById('polarity_confidence').innerHTML = res.polarity_confidence;
        document.getElementById('subjectivity').innerHTML = res.subjectivity;
        document.getElementById('subjectivity_confidence').innerHTML = res.subjectivity_confidence;
        document.getElementById('text').innerHTML = res.text;

    } catch (error) {
        document.getElementById('error').innerHTML = "Something went wrong, check your request and try again";
    }
} */

export {
    handleSubmit,
    checkURL
}