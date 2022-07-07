const socket = new WebSocket('ws://192.168.43.13:5555');
//const socket = new WebSocket('ws://192.168.89.140:5555');
const myClientNumber = document.querySelector('meta[name="client_number"]').content

socket.binaryType = "arraybuffer";
var images = document.querySelectorAll("img");

// Listen for messages
socket.addEventListener("message", function (event) {
    let cleanData="";
    if(event.data instanceof ArrayBuffer) {
        var enc = new TextDecoder("utf-8");
        var arr = new Uint8Array(event.data);
        cleanData = enc.decode(arr)
        //console.log(cleanData);
    } else {
        cleanData = event.data;
        //console.log(cleanData);
    }
    const params = JSON.parse(cleanData);
    //console.log(params);

    images = document.querySelectorAll("img");

    if (params.reloj == myClientNumber){
        for (var i=0; i < images.length; i++) {
            if (images[i].id == params.animacion) images[i].style.display = "initial";
            else images[i].style.display = "none";
        }

    }
});

/*
socket.onmessage = ({data}) => {
    alert(data);
    console.log(data);
    let params = JSON.parse(data);
    alert(params);
    if (params.reloj == myClientNumber){
        for (var i=0; i < images.length; i++) {
            if (images[0].id == params.animacion) items[i].style.display = "block";
            else items[i].style.display = "none";
        }
    }

};*/

/*
socket.addEventListener('message', function (event) {
    console.log(event.data)
    console.log('Message from server ', event.data);
    var reader = new FileReader();
    reader.onload = function() {
        //alert(reader.result);
    }
    reader.readAsText(event.data);
});
*/

// 

// // Listen for messages
// socket.onmessage = ({ data }) => {
//     console.log('Message from server ', data);
// };

// document.querySelector('button').onclick = () => {
//     socket.send('hello');
// }
