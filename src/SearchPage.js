import React from 'react'
import VideoData from './data.json';
import { TuneOutlined } from '@material-ui/icons';
import Channel from './Channel';
import VideoRow from './VideoRow';


function SearchPage() {
    return (
        <div className="main search_page_main">
            <div className="search_page__filter">
            <TuneOutlined />
            <h2>  FILTER</h2> 
            </div>

            <hr />
           
           <Channel />
           
            <hr />
            <div className="search__videos">
                {

                    VideoData.map((video,k)=>{
                        return (<VideoRow key={k} { ...video } />)
                    })
                }
                
            </div>
        </div>
    )
}

export default SearchPage
