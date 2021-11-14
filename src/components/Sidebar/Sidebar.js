import React ,{ useState, useEffect } from 'react';
import {Avatar,IconButton} from "@material-ui/core";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChatIcon from '@material-ui/icons/Chat';
import "./Sidebar.css"
import SidebarChat from './components/SidebarChat';
import { SearchOutlined } from '@material-ui/icons';

function Sidebar() {
    return (
        <div className="sidebar col-3 p-3">
            <div className="sidebar_header justify-content-between row">

                <div className="sidebar_header_left col-4">
                    <Avatar />
                </div>
                <div className="sidebar_header_right col-8 justify-content-between">
                        <IconButton>
                            <DonutLargeIcon />
                        </IconButton>

                        <IconButton>
                            <ChatIcon />
                        </IconButton>
                        <IconButton>
                            <MoreVertIcon />
                        </IconButton>

                </div>

                <div className="col-12 sidebar_search">
                    <div className="sidebar_search_container">
                            <SearchOutlined />

                                <input type="text" placeholder="search" />

                    </div>
                </div>
            </div>

            <div className="sidebar_chat">
                <h3>Add New Chat</h3>
                <div className="sidebarChat_container">
                    <SidebarChat/>
                    <SidebarChat/>
                    <SidebarChat/>
                    <SidebarChat/>
                    <SidebarChat/>
                    <SidebarChat/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
