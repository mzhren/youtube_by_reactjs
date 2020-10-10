import React from 'react'
import { AccountBox, AccessTime, PlayCircleOutline,CommentOutlined } from '@material-ui/icons';


function VideoRow({ src, title, url, play, time,desc,comments }) {
    let img_src = '/bili/' + src;
    return (
        <div className="video_row">
            <a href={url} target="_blank" rel="noopener noreferrer"> <img className="video_row_thumbnail" src={img_src} alt={title} /></a>
            <div className="video_row__info">
                <h4 className="video_row_title">
                    <a href={url} target="_blank" rel="noopener noreferrer"> {title}</a>
                </h4>

                <div className="video_row_desc">
                    <pre>
                        {desc.trim()}
                    </pre>
                </div>

                <div className="video_row_meta">
                    <span className="video_author"> <AccountBox /> 狂奔的男尸</span>
                    <span className="views">
                        <PlayCircleOutline /> {play}
                    </span>
                    <span className="comments">
                        <CommentOutlined /> {comments} 弹幕
                    </span>
                    <span className="time">
                        <AccessTime /> {time}
                    </span>
                </div>
            </div>




        </div>
    )
}

export default VideoRow
