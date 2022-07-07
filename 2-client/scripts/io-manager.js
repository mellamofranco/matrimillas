const socket = new WebSocket('ws://192.168.43.13:5555');
//const socket = new WebSocket('ws://192.168.89.140:5555');

function changeAnimation(id){
    var e = document.getElementById(`animacion_reloj_${id}`);
    console.log(e);
    let changeParameters = {
        reloj: id,
        animacion: e.value
    };
    console.log(changeParameters);
    //alert(JSON.stringify(changeParameters))
    socket.send(JSON.stringify(changeParameters));;
}
/*
document.querySelector('button').onclick = () => {

    const text = document.querySelector('input').value;
    socket.send('message', text)
    
}*/