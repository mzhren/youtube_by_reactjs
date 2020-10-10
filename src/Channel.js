import React from 'react'
import { Avatar } from '@material-ui/core';
import { CheckCircleOutlineOutlined } from '@material-ui/icons';
import Logo from './avatar_big.jpg';

function Channel() {
    return (
        <div className="search_page__channel">
            <Avatar src={Logo}  className="channel_logo"/>
            <div className="channel_info">
                <h3>
                    狂奔的男尸 <CheckCircleOutlineOutlined />
                </h3>
                <p>
                    码中人-深入编程-开发者交流社区
                    <br />
                    http://www.mzh.ren/ 
                    <br />
                    爱写代码的明日作家。
                </p>
            </div>
        </div>
    )
}

export default Channel
