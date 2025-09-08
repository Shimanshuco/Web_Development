import {WebSocketServer} from 'ws';

const wss = new WebSocketServer({port : 8000});
let userCount = 0;


wss.on('connection',(socket)=>{
    console.log("User connected");

    socket.on('message',(e)=>{
        if(e.toString()==="ping"){
            socket.send("pong");
        }
        
    });
});


