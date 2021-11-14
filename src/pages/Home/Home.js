import React, {useEffect, useState} from 'react'
import {Sidebar, Chat} from "../../components";
import Pusher from 'pusher-js';

import axios from 'axios';
import "../../assets/css/style.css";
export const MessageContext = React.createContext(null);
function Home() {
const [messages, Setmessages] = useState([]);

useEffect(() => {
    axios.get('http://localhost:4001/message/get').then((res)=>{
        Setmessages(res.data);
    })
}, [])
    useEffect(() => {
        const pusher = new Pusher('5fe9111125a1b8097e5f', {
            cluster: 'ap2'
          });
      
          var channel = pusher.subscribe('messages');
          channel.bind('inserted', (newMessage) => {
            //   alert(JSON.stringify(newMessage))
            Setmessages([...messages ,newMessage]);
          });


          return ()=>{
              channel.unbind_all();
              channel.unsubscribe();
          }
    }, [messages])


    console.log(messages, "messages")
    return (
        <div className="home-app col-12 row justify-content-between">
            <MessageContext.Provider value={messages}>


            <Sidebar />

<Chat />
            </MessageContext.Provider>
            
        </div>
    )
}

export default Home
