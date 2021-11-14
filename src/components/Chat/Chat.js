import React from 'react'
import ChatBody from './Components/ChatBody'
import ChatFooter from './Components/ChatFooter'
import ChatHeader from './Components/ChatHeader'
function Chat() {
    return (
        <div className="chat-box col-9">
            
            <ChatHeader />
            <ChatBody/>
            <ChatFooter/>
        </div>
    )
}

export default Chat
