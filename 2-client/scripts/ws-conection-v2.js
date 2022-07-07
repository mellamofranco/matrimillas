const ip = document.querySelector('meta[name="ip"]').content
console.log(ip);

const myClientNumber = document.querySelector('meta[name="client_number"]').content


var images = document.querySelectorAll("img");

start();

function start(){
    const socket = new WebSocket(ip ? 'ws://'+ip+':5555' : 'ws://192.168.0.101:5555');
    socket.binaryType = "arraybuffer";


    socket.onmessage = function(event) { 
        let cleanData="";
        if(event.data instanceof ArrayBuffer) {
            var enc = new TextDecoder("utf-8");
            var arr = new Uint8Array(event.data);
            cleanData = enc.decode(arr)
        } else {
            cleanData = event.data;
        }
        const params = JSON.parse(cleanData.toString());
    
        images = document.querySelectorAll("img");
    
        if (params.reloj == myClientNumber){
            for (var i=0; i < images.length; i++) {
                if (images[i].id == params.animacion) images[i].style.display = "initial";
                else images[i].style.display = "none";
    
            }
        }
    };
    socket.onclose = function(){
        // Try to reconnect in 5 seconds
        setTimeout(function(){start()}, 1000);
    };
}



/*
socket.addEventListener("message", function (event) {
    let cleanData="";
    if(event.data instanceof ArrayBuffer) {
        var enc = new TextDecoder("utf-8");
        var arr = new Uint8Array(event.data);
        cleanData = enc.decode(arr)
    } else {
        cleanData = event.data;
    }
    const params = JSON.parse(cleanData.toString());

    images = document.querySelectorAll("img");

    if (params.reloj == myClientNumber){
        for (var i=0; i < images.length; i++) {
            if (images[i].id == params.animacion) images[i].style.display = "initial";
            else images[i].style.display = "none";

        }
    }
});
*/