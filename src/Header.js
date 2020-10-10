import React, { useState } from 'react'
import { Menu, Search, VideoCall, Apps, Notifications } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';
import userAvatar from './avatar.jpg';
import Logo from './YouTube-logo.svg';



function Header() {
    const [inputSearch, setInputSearch] = useState("")
    return (
        <div className="header">
            <div className="header__left">
                <Menu />
                <Link to='/'>
                    <img src={Logo} alt="APP Logo" className="app_logo" />
                </Link>
            </div>

            <div className="header__search">
                <form action={`/search/${inputSearch}`} className="header__search_form">
                    <input type="text" onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder="Search..." />
                    <Link to={`/search/${inputSearch}`} className="header__searchLink">
                        <Search className="header__searchBtn" />
                    </Link>
                </form>
            </div>

            <div className="header__icons">
                <VideoCall />
                <Apps />
                <Notifications />
                <Link to="/search/mzhren">
                    <Avatar src={userAvatar} />
                </Link>
            </div>
        </div>
    )
}

export default Header
