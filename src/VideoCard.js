import React from 'react'
import { AccountBox,AccessTime,PlayCircleOutline } from '@material-ui/icons';

function VideoCard({src,title,url,play,time}) {
    let img_src = '/bili/' + src;
    return (
        <div className="video_card">
            <a href={url}  target="_blank" rel="noopener noreferrer"> <img className="video_card_thumbnail" src={img_src} alt={title} /></a>
            <h4 className="video_card_title">
            <a href={url}  target="_blank" rel="noopener noreferrer"> { title }</a>
            </h4>

            <div className="video_card_meta">
                    <span className="video_author"> <AccountBox /> 狂奔的男尸</span>
                        <span className="views">
                        <PlayCircleOutline /> {play}
                        </span>
                        <span className="time">
                          <AccessTime /> { time }
                        </span>
             </div>



        </div>
    )
}

export default VideoCard
