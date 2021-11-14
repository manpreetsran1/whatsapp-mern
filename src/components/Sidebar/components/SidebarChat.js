import { Avatar } from '@material-ui/core'
import React from 'react'

function SidebarChat(props) {
    return (
        <div className="sidebarChat row justify-content-around">
            <div className="sidebarchat_avatar col-3">
            <Avatar />

            </div>
            <div className="sidebarChat_info col-9 text-left">
                <h5>jhon doe</h5>
                <p>this is first message</p>
            </div>
        </div>
    )
}

export default SidebarChat
