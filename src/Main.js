import React from 'react'
import VideoCard from './VideoCard'
import VideoData from './data.json';

function Main() {
    return (
        <div className="main">
            <h2>最新的 YouTube 帖子</h2>
            <div className="main__videos">
                {

                    VideoData.map((video,k)=>{
                        return (<VideoCard key={k} { ...video } />)
                    })
                }
                
            </div>
        </div>
    )
}

export default Main
