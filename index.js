function encriptar(){
    let texto = document.getElementById("texto").value;
    let mensaje = document.getElementById("mensaje");
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("muneco");

    let textoCifrado = texto
                        .replace(/e/gi, "enter")
                        .replace(/i/gi, "imes")
                        .replace(/a/gi, "ai")
                        .replace(/o/gi, "ober")
                        .replace(/u/gi, "ufat");

    if (texto.length != 0){
        document.getElementById("mensaje").value = textoCifrado;
        tituloMensaje.textContent = "Texto encriptado con éxito";
        parrafo.textContent = "";
        document.getElementById("texto").value = "";
        muneco.src = "imagenes/encriptado.jpg";
    }else{
        muneco.src = "imagenes/Muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o deseas desencriptar";
        swal("Ooops!", "Debes ingresar un texto","warning")
    }                    
}

function desencriptar(){
    let texto = document.getElementById("texto").value;
    let mensaje = document.getElementById("mensaje");
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("muneco");

    let textoCifrado = texto
                        .replace(/enter/gi, "e")
                        .replace(/imes/gi, "i")
                        .replace(/ai/gi, "a")
                        .replace(/ober/gi, "o")
                        .replace(/ufat/gi, "u");

    if (texto.length != 0){
        document.getElementById("mensaje").value = textoCifrado;
        tituloMensaje.textContent = "Texto desencriptado con éxito";
        parrafo.textContent = "";
        document.getElementById("texto").value = "";
        muneco.src = "imagenes/desencriptado.jpg";
    }else{
        muneco.src = "imagenes/Muñeco.png";
        tituloMensaje.textContent = "Ningún mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar o deseas desencriptar";
        //alert("Debes ingresar algún texto");
        swal("Ooops!", "Debes ingresar un texto","warning")
    }                    
}

const btnCopiar = document.querySelector(".copiar");
const tituloMensaje = document.getElementById("titulo-mensaje");
const parrafo = document.getElementById("parrafo");
let mensaje = document.getElementById("mensaje").value;
btnCopiar.addEventListener("click", copiar = () =>{
var contenido = document.getElementById("mensaje").value;
navigator.clipboard.writeText(contenido);
muneco.src = "imagenes/Muñeco.png";
document.getElementById("mensaje").value = "";
parrafo.textContent = "";
console.log("Texto copiado");
if(mensaje.length == 0){
    tituloMensaje.textContent = "Ningún mensaje fue encontrado";
    parrafo.textContent = "Ingresa el texto que deseas encriptar o deseas desencriptar";
}
})