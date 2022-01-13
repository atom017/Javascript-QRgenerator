const btn = document.querySelector("#btn");
const textArea = document.querySelector('#qrtext');
const qrimg = document.querySelector("#img");
const api = 'https://api.qrserver.com/v1/create-qr-code/?size=250x250&data='
btn.addEventListener('click',generateQR);


function generateQR(){
    let text = textArea.value;
    if(text){
        console.log(text);
        qrimg.src=api+text;
        console.log(qrimg.src);
    }
   
    
}