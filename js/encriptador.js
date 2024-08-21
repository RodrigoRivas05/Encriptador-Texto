// Selección elementos //

const btnEncriptar = document.querySelector(".btn-encriptar");
const textEncriptar = document.querySelector(".encriptar");
const aviso = document.querySelector(".texto-aviso");
const response = document.querySelector(".evaluar");
const contenido = document.querySelector(".tarjeta-contenedor");
const btnCopy = document.querySelector(".btn-copiar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");


// Boton de encriptar //

btnEncriptar.addEventListener("click",e=>{
    e.preventDefault();
    let texto = textEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if(texto == ""){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "600";
        aviso.textContent = "¡Debe de introducir un texto!"

        setTimeout(() => {
            aviso.removeAttribute("style")
        }, 1500);
    }

    else if(texto !== txt){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "600";
        aviso.textContent = "No debe contener acentos ni caracteres especiales el texto"

        setTimeout(() => {
            aviso.removeAttribute("style")
        }, 1500);
    }

    else if(texto !== texto.toLowerCase()){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "600";
        aviso.textContent = "¡El texto debe estar en minúsculas!"

        setTimeout(() => {
            aviso.removeAttribute("style")
        }, 1500);

    }

    else{
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        response.innerHTML = texto;
        btnCopy.style.visibility = "inherit";
        contenido.remove();
        
    }

    
});

// Boton de desencriptar //

btnDesencriptar.addEventListener("click",e=>{
    e.preventDefault();
    let texto = textEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");
    
    if(texto == ""){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "600";
        aviso.textContent = "¡Debe de introducir un texto!"

        setTimeout(() => {
            aviso.removeAttribute("style")
        }, 1500);
    }

    else if(texto !== txt){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "600";
        aviso.textContent = "No debe contener acentos ni caracteres especiales el texto"

        setTimeout(() => {
            aviso.removeAttribute("style")
        }, 1500);
    }

    else if(texto !== texto.toLowerCase()){
        aviso.style.background = "#0A3871";
        aviso.style.color = "#FFFF";
        aviso.style.fontWeight = "600";
        aviso.textContent = "¡El texto debe estar en minúsculas!"

        setTimeout(() => {
            aviso.removeAttribute("style")
        }, 1500);

    }

    else{
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");

        response.innerHTML = texto;
        btnCopy.style.visibility = "inherit";
        contenido.remove();
        
    }

    
});

// Boton de copiado //

btnCopy.addEventListener("click",e=>{
    e.preventDefault();
    let copiar = response;
    copiar.select();
    document.execCommand("copy");
});