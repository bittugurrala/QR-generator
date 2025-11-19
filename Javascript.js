let innerDiv = document.getElementById("innerDiv");
let textValue = document.getElementById("textValue");
let error = document.getElementById("error");
let generateButton = document.getElementById("generateButton");
let qrDiv = document.getElementById("qrDiv");
let qrImg = document.createElement("img");      //Created Image tag.



QRcode = function(){
    if (textValue.value.trim() === ""){
        error.textContent = `* Please Enter text or URL`;
        qrImg.src = ""
        qrImg.alt = ""
        return;
    }
    error.textContent = ""
    data = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=` + textValue.value;
    qrImg.src = data
    qrImg.alt = textValue.value;
    qrDiv.appendChild(qrImg);
}

textValue.addEventListener("keydown", function(event){
    if(event.key == "Enter"){
        QRcode();
    }
})

generateButton.onclick = QRcode;

