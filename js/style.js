
let letrasPattern=/^[A-Za-zÁáÉéÍíÓóÚúÑñ]+$/;
let letrasNumbers=/^[0-9]*$/;


document.getElementById("lastName").addEventListener("focusout",function(){ // funciones callback     
    console.log(document.getElementById("Name").value);
      console.log(document.getElementById("lastName").value);
    let elementoMensaje = document.getElementById("mensajeApellidoPaterno");
    let apellido = document.getElementById("lastName").value;
    if(apellido.length == 0){
        elementoMensaje.innerHTML = "Debes de poner tu apellido";
    }else{
        elementoMensaje.innerHTML = "";
        let correctoApellido = letrasPattern.test(apellido);
        if(correctoApellido == false){
            elementoMensaje.innerHTML = "Solo se pueden letras";
        }else{
            elementoMensaje.innerHTML = "";
        }
    }
});

document.getElementById("Name").addEventListener("focusout",function(){    

    let elementoMensajeN = document.getElementById("mensajeNombre");
    let nombre = document.getElementById("Name").value;
    if(nombre.length == 0){
        elementoMensajeN.innerHTML = "Debes de poner tu Nombre";
    }else{
        elementoMensajeN.innerHTML = "";
        let correctoNombre = letrasPattern.test(nombre);
        if(correctoNombre == false){
            elementoMensajeN.innerHTML = "Solo se pueden letras";
        }else{
            elementoMensajeN.innerHTML = "";
        }
    }
});


document.getElementById("apm").addEventListener("focusout",function(){ 
   
    let elementoMensajeN = document.getElementById("mensajeApellidoMaterno");
    let apem = document.getElementById("apm").value;
    if(apem.length == 0){
        elementoMensajeN.innerHTML = "Debes de poner tu Apellido";
    }else{
        elementoMensajeN.innerHTML = "";
        let correctoape = letrasPattern.test(apem);
        if(correctoape == false){
            elementoMensajeN.innerHTML = "Solo se pueden letras";
        }else{
            elementoMensajeN.innerHTML = "";
        }
    }
});




document.getElementById("fecha").addEventListener("focusout",function(){ 
   
    let elementoMensajeN = document.getElementById("mensajeFecha");
    let apem = document.getElementById("fecha").value;
    if(apem.length == 0){
        elementoMensajeN.innerHTML = "Debes escribir una fecha";
    }else{
       
        elementoMensajeN.innerHTML = "";


    }
});

document.getElementById("tel").addEventListener("focusout",function(){ 
   
    let elementoMensajeN = document.getElementById("mensajeTel");
    let apem = document.getElementById("tel").value;
    if(apem.length == 0){
        elementoMensajeN.innerHTML = "Debes de poner tu telefono";
    }else{
        elementoMensajeN.innerHTML = "";
        let correctoape = letrasNumbers.test(apem);
        if(correctoape == false){
            elementoMensajeN.innerHTML = "Solo se pueden numeros";
        }else{
            elementoMensajeN.innerHTML = "";
        }
    }
});


  function saludar(){
        /*Las funciones no se llaman en automático se tiene
        que llamar desde un evento*/
        let nombre = document.getElementById("Name").value; 
        if(nombre ==="")
        {
                 alert("Escribe tu nombre " + nombre);
        }

        else {
                alert("Bienvenido al registro " + nombre);
        }
    

    }

 

    