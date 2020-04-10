/*
Module 4 project using promises 
Brittany Samuels-200404362
*/

//grabbing the image from my git hub repo
let ref = 'https://unknownlurkr.github.io/funky-products/chad.png'; //load to github 
let info = 'https://unknownlurkr.github.io/funky-products/text.json';
let txt = 'https://unknownlurkr.github.io/funky-products/chad.txt';
let p = document.querySelector('p');

//Using a blob to fetch the image source
//display a photo of the profile 

    fetch(ref).then(response =>{
        console.log(response);
        return response.blob();
    })
    .then(blob =>{
        console.log(blob);
        document.getElementById('itm').src = URL.createObjectURL(blob);
    });

    async function txtInfo() {
        let response = await fetch(txt);
        let responseText = await response.text();
    
        document.getElementById('result').innerHTML = responseText;
    }
    
    (async() => {
        await txtInfo();
    })();
/*grabing the text file created to upload the text content of the p tags within the html 
fetch(txt).then(response =>{
    console.log(response);
    return response.text();
}).then(blob  => {
    console.log(blob);
    document.querySelector('p').textContent = blob;
}) */