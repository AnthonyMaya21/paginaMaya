
let letrasPattern=/^[A-Za-zÁáÉéÍíÓóÚúÑñ]+$/;


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
    let apem = document.getElementById("Name").value;
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


  function saludar(){
        /*Las funciones no se llaman en automático se tiene
        que llamar desde un evento*/
        let nombre = document.getElementById("Name").value;
        alert("Bienvenido al registro " + nombre);

    }

 