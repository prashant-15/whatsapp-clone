import { Avatar } from '@material-ui/core';
import React from 'react';
import './SidebarChat.css';


const SidebarChat = ({latestMsg}) => {
  return (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat__info">
        <h2>Room 1</h2>
        <p>{latestMsg}</p>
      </div>
    </div>
  );
}

export default SidebarChat;

