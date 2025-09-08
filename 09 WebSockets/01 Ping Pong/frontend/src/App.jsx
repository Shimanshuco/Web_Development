import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {

  const [socket , setSocket] = useState();
  const inputRef = useRef();

  function sendMessage(){

    const message = inputRef.current.value;
    socket.send(message);
  }
  
  useEffect(()=>{
    const ws = new WebSocket("http://localhost:8000");

    setSocket(ws);
    ws.onmessage = (ev)=>{
      alert(ev.data);
    }
    ws.onerror = ()=>{

    }

    ws.close = ()=>{

    }

    ws.open = ()=>{

    }
  },[]);

  return (
    <>
      <input ref={inputRef} type='text' placeholder='message'></input>
      <button onClick={sendMessage}>Send</button>
    </>
  )
}

export default App
