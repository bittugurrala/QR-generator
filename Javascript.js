let innerDiv = document.getElementById("innerDiv");
let textValue = document.getElementById("textValue");
let error = document.getElementById("error");
let generateButton = document.getElementById("generateButton");

generateButton.addEventListener("click",function(){
    if (textValue.value.trim() === ""){
        error.textContent = `* Please Enter text or URL`;
        return;
    }
})

