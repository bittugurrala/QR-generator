// let innerDiv = document.getElementById("innerDiv");
let textValue = document.getElementById("textValue");
// let error = document.getElementById("error");
let generateButton = document.getElementById("generateButton");
let qrDiv = document.getElementById("qrDiv");
let qrImg = document.createElement("img");      //Created Image tag.



QRcode = function(){
    if (textValue.value.trim() === ""){             //check if the value is empty
        let existingError = document.querySelector(".para")
        if (existingError){          //if already error exists remove it
            existingError.remove();
        }
        let error = document.createElement("p")            //Create nwe error
        textValue.insertAdjacentElement("afterend", error);
        error.textContent = `* Please Enter text or URL`;
        error.classList.add("para")
        let existingqr = document.querySelector(".qrImg");
        if (existingqr){       //remove already existing QR as error happens no QR
            existingqr.remove()
        }
        return;
    }

    let existingError = document.querySelector(".para")
    if (existingError){
        existingError.remove();
    }
    
    let existingqr = document.querySelector(".qrImg");
    if (existingqr){
        existingqr.remove()
    }
    let qrDiv = document.createElement("img")
    qrDiv.classList.add("qrImg")
    textValue.insertAdjacentElement("afterend", qrDiv);
    data = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=` + textValue.value;
    qrDiv.src= data
    qrDiv.style.marginTop = "2rem"
    qrDiv.alt = textValue.value;
    textValue.value = ""

}

textValue.addEventListener("keydown", function(event){
    if(event.key == "Enter"){
        QRcode();
    }
})

generateButton.onclick = QRcode;

