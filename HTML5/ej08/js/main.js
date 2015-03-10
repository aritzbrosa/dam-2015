$(function () {
    "use strict";

    // Obtener los elementos del DOM

    var status = document.getElementById('status'),
        content = $('#content'),
        input = document.getElementById('input');


    // Mi color asignado por el servidor
    var myColor = false;
    // Mi nick
    var myName = false;

    // Comprobar la disponibilidad de Web Socket en el navegador
    if (Modernizr.WebSocket) {
        return false;
    }

    window.WebSocket = window.WebSocket || window.MozWebSocket;

    //1
    var sock = new WebSocket("ws://www.arkaitzgarro.com:1337");

    //2
    sock.onopen  = function(e){ 
        console.log("Welcome - status "+this.readyState);
        status.innerHTML = "Nickname";
        input.disabled = false;
    };
    sock.onclose = function(e){ console.log("Disconnected - status "+this.readyState); };
    
    //3
    sock.onmessage = function(event) {
        var data;
        try{
            data = JSON.parse(event.data); 
        }
        catch(ex){
            console.log('Error with JSON message', e.data);
        }

        if(data){
            switch(data.type){
                case 'history':
                    for (var i =data.data.length - 1;i>=0; i--){
                        addMessage(data.data[i].author, data.data[i].text, data.data[i].color, new Date(data.data[i].time));
                    }
                break;
                case 'message':
                    console.log(data);
                    addMessage(data.data.author, data.data.text, data.data.color, new Date(data.data.time));
                break;
                case 'color':
                    myColor=data.data;
                    status.style.color = myColor;
                    status.innerText = myName + ':';
                break;
            }
        }
    };

    console.log(input.value);

    //sock.send("");
    // Abrir la conexion con ws://www.arkaitzgarro.com:1337
    // 1. Al abrir la conexión, solicitar el nick.
    // 2. Controlar posibles errores del servidor.
    // 3. Escuchar los mensajes del servidor, y mostrarlos en el elemento "content"
    // 4. La estructura del objeto enviado por el servidor es la siguiente:
    //      {
    //          // Contiene el tipo de mensaje recibido
    //          type : @string in ['color', 'history', 'message'],
    //          // Contiene los datos según el tipo de mensaje recibido
    //          data: @Object {author, text, color, time}
    //      }
    // 5. Enviar un mensaje al pulsar enter. El mensaje enviado es únicamente la cadena de caracteres.

    /**
     * Añadir el mensaje a la ventana de chat
     */

     input.addEventListener('keydown', function(e){
        if (e.keyCode === 13){
            var value = this.value;

            if(value){
                if(!myName){
                    myName=value;
                }
            }
            sock.send(value);
            input.value = '';
        }
     });

    function addMessage(author, message, color, dt) {
        content.prepend('<p><span style="color:' + color + '">' + author + '</span> @ ' +
              (dt.getHours() < 10 ? '0' + dt.getHours() : dt.getHours()) + ':' +
              (dt.getMinutes() < 10 ? '0' + dt.getMinutes() : dt.getMinutes()) +
              ': ' + message + '</p>');
    }
});