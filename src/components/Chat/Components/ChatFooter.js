import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import React, {useState} from 'react';

import axios from 'axios';

function ChatFooter() {
    
    const [input, setInput] = useState("");
    const handleChange=(e)=>{
        e.preventDefault();

        setInput(e.target.value);
    }

    const sendMessage = async (e) =>{
        e.preventDefault();

        const data ={
            message: input,
            name: "manpreet",
            timestamp: "12-03-2020",
            received: true
        }

           await axios.post('http://localhost:4001/message/new', data).then((res)=>{
                console.log(res.data);

                setInput("");
            })



    }
    return (
        <div className="chat_footer">
            <EmojiEmotionsIcon />
            <form onSubmit={sendMessage}>
                <input value={input} onChange={handleChange} placeholder="type a message" type="text" />
                <buton className="chat_footer_button" type="button">Send a message</buton>
            </form>
        </div>
    )
}

export default ChatFooter
