import React from 'react';
import SidebarRow from './SidebarRow';
import '../styles/Sidebar.css';
import HomeIcon from '@mui/icons-material/Home';
import ExploreOutlinedIcon from '@mui/icons-material/ExploreOutlined';
import LocalPlayOutlinedIcon from '@mui/icons-material/LocalPlayOutlined';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import PlayCircleFilledWhiteOutlinedIcon from '@mui/icons-material/PlayCircleFilledWhiteOutlined';

function Sidebar() {
  return (
    <div className='sidebar'>
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={ExploreOutlinedIcon} title="Explore" />
      <SidebarRow Icon={LocalPlayOutlinedIcon} title="Shorts" />
      <SidebarRow Icon={SubscriptionsOutlinedIcon} title="Subscriptions" />
      <SidebarRow Icon={SmartDisplayOutlinedIcon} title="Originals" />
      <SidebarRow Icon={PlayCircleFilledWhiteOutlinedIcon} title="WetubeMusic" />
    </div>
  )
}

export default Sidebar