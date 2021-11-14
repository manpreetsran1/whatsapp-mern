import React from 'react'
import { useContext } from 'react';
import {MessageContext} from '../../../pages/Home/Home';
function ChatBody(props) {
    const value = useContext(MessageContext);

    console.log(value, "value")
    return (
        <div className="chat_body">
            <div className="chat_body_container">
                {
                    value.map((msg)=>{
                        
               return( <>{
                   msg.name ? <p className={`chat__message ${msg.received && "own"}`}>
                   <span className="chat_name">{msg.name}</span>
                   <span className="chat_message">{msg.message}</span>
                   <span className="chat_time">{msg.timestamp}</span> 
    
               </p> :""
               }</>)

                    })
                }

                
            </div>
        </div>
    )
}

export default ChatBody
