import { Avatar, IconButton } from '@material-ui/core';
import { DonutLarge, MoreVert, Chat as ChatIcon, SearchOutlined } from '@material-ui/icons';
import React from 'react';
import './Sidebar.css';
import SidebarChat from './SidebarChat';


const Sidebar = ({latestMsg}) => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar src="" />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>
      {/* <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start new chat" type="text" />
        </div>
      </div> */}
      <div className="sidebar__chats">
        <SidebarChat latestMsg={latestMsg} />
      </div>
    </div>
  );
}

export default Sidebar;

