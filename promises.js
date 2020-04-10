/*
Module 4 project using promises 
Brittany Samuels-200404362
*/

//grabbing the image from my git hub repo
let ref = 'https://unknownlurkr.github.io/funky-products/chad.png'; //load to github 
//json from github repo 
let info = 'https://unknownlurkr.github.io/funky-products/text.json';
//text file reference 
let txt = 'https://unknownlurkr.github.io/funky-products/chad.txt';


//Using a blob to fetch the image source
//display a photo of the profile 
//then createObjectUrl so we can reference the img tag and the blob has a reference
    fetch(ref).then(response =>{
        console.log(response);
        return response.blob();
    })
    .then(blob =>{
        console.log(blob);
        document.getElementById('itm').src = URL.createObjectURL(blob);
    });

    //async function txtInfo 
    async function txtInfo() {
        //await for the fetch api to grab the text file that is being reference from txt
        let response = await fetch(txt);
        let responseText = await response.text(); 
    
        document.getElementById('result').innerHTML = responseText; //result is reference to the div element
    }
    
    (async() => {
        await txtInfo(); //awaiting for txtInfo to be called once browser has loaded the page
    })();
/*grabing the text file created to upload the text content of the p tags within the html 
fetch(txt).then(response =>{
    console.log(response);
    return response.text();
}).then(blob  => {
    console.log(blob);
    document.querySelector('p').textContent = blob;
}) */