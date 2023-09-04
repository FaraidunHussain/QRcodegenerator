let container = document.querySelector(".container");
let qrInput = document.querySelector("#text")
let genearateBtn = document.querySelector("#generate")
let img = document.querySelector("#qr-img")


genearateBtn.onclick = function(){

    let input = qrInput.value.trim()
{
        genearateBtn.innerText = "Generating QR Code";
        img.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${input}`;
        img.onload = function(){
            container.classList.add("active")
            genearateBtn.innerText ="Generate QR Code"
        }
    }
}