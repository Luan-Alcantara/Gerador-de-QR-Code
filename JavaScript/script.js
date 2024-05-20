// First we create the variables //

const container = document.querySelector("#container")
const qrButton = document.querySelector(".qrHeader button")

const valueInput = document.querySelector(".qrHeader input")

const qrImg = document.querySelector(".qrCode img")

// We create the function to generator QR Code //

function gerarQR(){
    const qrInput = valueInput.value; // We get the value entered in the input //

    if(!qrInput) return; // If value equals to null, nothing is return //

    qrButton.innerText = "Gerando o codigo..." // Update the text of button //

    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${valueInput.value} ` // We entered the URL of generator QR Code //

    qrImg.addEventListener("load", () => { //This event only shows JavaScript, when the page finishes loading //
        container.classList.add("active")
        qrButton.innerText = "Codigo criado!"
    })
}

// We added the click event //
qrButton.addEventListener("click", () =>{
    gerarQR()
})
