import React from 'react'
import { Home } from '@material-ui/icons';
import SidebarRow from './SidebarRow';

function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow title="Home" Icon={Home} />
        </div>
    )
}

export default Sidebar
