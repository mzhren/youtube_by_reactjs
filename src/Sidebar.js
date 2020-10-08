import React from 'react'
import { Home,Whatshot,Subscriptions,VideoLibrary,History,OndemandVideo,ThumbUpAltOutlined,ExpandMoreOutlined,WatchLater } from '@material-ui/icons';
import SidebarRow from './SidebarRow';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow selected title="首页" Icon={Home}   />
            <SidebarRow title="时下流行" Icon={Whatshot}   />
            <SidebarRow title="订阅内容" Icon={Subscriptions}   />
            <hr />
            <SidebarRow title="媒体库" Icon={VideoLibrary}   />
            <SidebarRow title="历史记录" Icon={History}   />
            <SidebarRow title="您的视频" Icon={OndemandVideo}   />
            <SidebarRow title="稍后观看" Icon={WatchLater}   />
            <SidebarRow title="顶过的视频" Icon={ThumbUpAltOutlined}   />
            <SidebarRow title="展开更多" Icon={ExpandMoreOutlined}   />
        </div>
    )
}

export default Sidebar
