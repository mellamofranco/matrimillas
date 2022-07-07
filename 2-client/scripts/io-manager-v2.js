const ip = document.querySelector('meta[name="ip"]').content
console.log(ip);
const socket = new WebSocket(ip ? 'ws://'+ip+':5555' : 'ws://192.168.0.101:5555');

function changeAnimation(id){
    var e = document.getElementById(`animacion_reloj_${id}`);
    console.log(e);
    let changeParameters = {
        reloj: id,
        animacion: e.value
    };
    console.log(changeParameters);

    socket.send(JSON.stringify(changeParameters));
}