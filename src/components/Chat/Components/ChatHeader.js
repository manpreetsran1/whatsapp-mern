import { Avatar, IconButton } from '@material-ui/core'
import { SearchOutlined } from '@material-ui/icons';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import AttachFileIcon from '@material-ui/icons/AttachFile';
import React from 'react'

function ChatHeader(props) {
    return (
        <div className="chat_header">
            <div className="chatHeader_Container row">
                <div className="chatHeader_left row col-6 d-flex text-left">
                   <div className="col-3 text-right d-flex justify-content-end">
                   <Avatar/>
                   </div>
                    <div className="chatheader_leftInfo col-9 text-left">
                        <h4 className="chatuser_name">jhone doe</h4>
                        <p className="chatuser_lastSeen">Last Seen {"..."}</p>
                    </div>
                </div>
                <div className="chatHeader_Right col-6 text-right">
<IconButton>
<SearchOutlined/>
</IconButton>

<IconButton>
<MoreVertIcon />
</IconButton>


<IconButton>
<AttachFileIcon />
</IconButton>
                </div>
                
            </div>
            
        </div>
    )
}

export default ChatHeader
