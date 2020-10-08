import React from 'react'
import { Menu,Search,VideoCall,Apps,Notifications } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';

function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <Menu />
                <img src="https://www.youtube.com/about/static/svgs/icons/brand-resources/YouTube-logo-full_color_light.svg?cache=72a5d9c" className="app_logo" />
            </div>
          
            <div className="header__search">
                <input type="text" placeholder="Search..." />
                <Search className="header__searchBtn" />
            </div>

            <div className="header__icons">
                <VideoCall />
                <Apps />
                <Notifications />
                <Avatar />
            </div>
        </div>
    )
}

export default Header
