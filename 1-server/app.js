//const WebSocket = require('ws')
const host = '0.0.0.0';
const port = '5555';
const WebSocket = require('ws');

const wss = new WebSocket.Server({ host, port });
let conectionNumber = 0;

//server.listen(3000, '0.0.0.0');

/*wsServer.on('connection', socket => { 
    console.log(`Pinged by an element, conection #${conectionNumber}`)
    socket.on('message', data => {
        console.log("mandaron");
        wsServer.clients.forEach(function each(client) {
            console.log(data);
            if (client.readyState === WebSocket.OPEN) client.send(data);
            
        });
    });

});*/

wss.on('connection', function connection(ws) {
    console.log('A new client Connected!');
    ws.send('Welcome New Client!');
  
    ws.on('message', function incoming(message) {
      console.log('received: %s', message);

      console.log(wss.clients.size);
      wss.clients.forEach(function each(client) {
        //if (client !== ws && client.readyState === WebSocket.OPEN) {
          client.send(message);
        //}
      });
      
    });
  });


console.log(`listening on http://${host}:${port}`)
