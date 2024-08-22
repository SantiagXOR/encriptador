const textarea = document.querySelector(".area-texto");
const mensaje = document.querySelector(".mensaje") 

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function BotonEncriptado()
{
    const textoEncriptado=Encriptar(textarea.value)
    mensaje.value=textoEncriptado
    textarea.value="";
    mensaje.style.backgroundImage="none";

}

function Encriptar (cadenaEncriptado)
{
    let matrizCodigos=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    cadenaEncriptado=cadenaEncriptado.toLowerCase()

    for(let i=0; i<matrizCodigos.length; i++)
    {
        if(cadenaEncriptado.includes(matrizCodigos[i][0]))
        {
            cadenaEncriptado=cadenaEncriptado.replaceAll(matrizCodigos[i][0],matrizCodigos[i][1])
        }
    }
    return cadenaEncriptado;
}

function BotonDesencriptado()
{
    const textoEncriptado=Desencriptar(textarea.value)
    mensaje.value=textoEncriptado
    textarea.value="";
    

}

function Desencriptar (cadenaDesencriptado)
{
    let matrizCodigos=[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    cadenaDesencriptado=cadenaDesencriptado.toLowerCase()

    for(let i=0; i<matrizCodigos.length; i++)
    {
        if(cadenaDesencriptado.includes(matrizCodigos[i][1]))
        {
            cadenaDesencriptado=cadenaDesencriptado.replaceAll(matrizCodigos[i][1],matrizCodigos[i][0])
        }
    }
    return cadenaDesencriptado;
}

function Copiar()
{
    let elemento =document.getElementById("textoCopia").value;
    navigator.clipboard.writeText(elemento).then(
        function()
    {
        alert("Texto copiado.");  
    }
        
    )

}