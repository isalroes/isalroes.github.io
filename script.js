var llaves = ["ai","enter","imes","ober","ufat"];
var vocales = ["a","e","i","o","u"];
var mensaje = "";
var mensajeEncriptado = "";
var accion = "";

function ocultarMunieco() {
    mensaje = document.getElementById("idTBMensaje").value;
    if (mensaje == ""){
        document.getElementById("idMensaje01").style.visibility = "visible";
        document.getElementById("idMensaje02").style.visibility = "visible";
        document.getElementById("idMunieco").style.visibility = "hidden";
        document.getElementById("idTBResultado").style.value = "";
        document.getElementById("idTBResultado").style.visibility = "hidden";
    }
    else
    {
        if (accion=="Encriptar"){
            mensajeEncriptado = encriptado(mensaje);
            document.getElementById("idMunieco").style.visibility = "hidden";
            document.getElementById("idMensaje01").style.visibility = "hidden";
            document.getElementById("idMensaje02").style.visibility = "hidden";
            document.getElementById("idTBResultado").value = mensajeEncriptado;
            document.getElementById("idTBResultado").style.visibility = "visible";
            mensaje = ""
            document.getElementById("idTBMensaje").value = "";
            accion = "";
        }
        else if (accion=="Desencriptar"){
            mensajeInicial = desencriptado(mensaje);
            document.getElementById("idMunieco").style.visibility = "hidden";
            document.getElementById("idMensaje01").style.visibility = "hidden";
            document.getElementById("idMensaje02").style.visibility = "hidden";
            document.getElementById("idTBResultado").value = mensajeInicial;
            document.getElementById("idTBResultado").style.visibility = "visible";
            mensajeEncriptado = ""
            document.getElementById("idTBMensaje").value = "";
            accion = "";
        }
    }
    
}

function encriptado(mensajeOriginal){
    var nuevoMensaje = ""
    largoMensaje = mensajeOriginal.length;
    for (x = 0; x<largoMensaje; x++){
        if (mensajeOriginal[x]=="a"){
            nuevoMensaje = nuevoMensaje + llaves[0];
        }
        else if (mensajeOriginal[x]=="e"){
            nuevoMensaje = nuevoMensaje + llaves[1];
        }
        else if (mensajeOriginal[x]=="i"){
            nuevoMensaje = nuevoMensaje + llaves[2];
        }
        else if (mensajeOriginal[x]=="o"){
            nuevoMensaje = nuevoMensaje + llaves[3];
        }
        else if (mensajeOriginal[x]=="u"){
            nuevoMensaje = nuevoMensaje + llaves[4];
        }
        else {
            nuevoMensaje = nuevoMensaje + mensajeOriginal[x]
        }
    }    
    return (nuevoMensaje);
}

function desencriptado(mensajeEncriptado){
    var mensajeInicial = ""
    largoMensaje = mensajeEncriptado.length;
    for (x = 0; x<largoMensaje; x++){
        if (mensajeEncriptado[x]=="a" && mensajeEncriptado[x+1]=="i"){
            mensajeInicial = mensajeInicial + vocales[0];
            x = x+1;
        }
        else if (mensajeEncriptado[x]=="e" && mensajeEncriptado[x+1]=="n" && mensajeEncriptado[x+2]=="t" && mensajeEncriptado[x+3]=="e" && mensajeEncriptado[x+4]=="r"){
            mensajeInicial = mensajeInicial + vocales[1];
            x = x+4;
        }
        else if (mensajeEncriptado[x]=="i" && mensajeEncriptado[x+1]=="m" && mensajeEncriptado[x+2]=="e" && mensajeEncriptado[x+3]=="s"){
            mensajeInicial = mensajeInicial + vocales[2];
            x = x+3;
        }
        else if (mensajeEncriptado[x]=="o" && mensajeEncriptado[x+1]=="b" && mensajeEncriptado[x+2]=="e" && mensajeEncriptado[x+3]=="r"){
            mensajeInicial = mensajeInicial + vocales[3];
            x = x+3;
        }
        else if (mensajeEncriptado[x]=="u" && mensajeEncriptado[x+1]=="f" && mensajeEncriptado[x+2]=="a" && mensajeEncriptado[x+3]=="t"){
            mensajeInicial = mensajeInicial + vocales[4];
            x = x+3;
        }
        else {
            mensajeInicial = mensajeInicial + mensajeEncriptado[x]
        }
    }    
    return (mensajeInicial);
    console.log(mensajeOriginal);
    console.log(nuevoMensaje);
    console.log(largoMensaje);
    console.log(x);
}

function btnEncriptar() {
    accion = "Encriptar";
    ocultarMunieco();    
}

function btnDesencriptar () {
    accion = "Desencriptar";
    ocultarMunieco();    
}
