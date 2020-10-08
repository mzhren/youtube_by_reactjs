import React from 'react'

function SidebarRow({ title, Icon }) {
    return (
        <div className="sidebar_row">
            <Icon />
            { title }
        </div>
    )
}

export default SidebarRow
