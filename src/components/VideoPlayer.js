import React from 'react';
import { Card } from '@material-ui/core';
import './components.css';
import ReactPlayer from 'react-player';

function VideoPlayer({ url }) {
    return (
        <div>
            <Card className="card centered">
                <ReactPlayer url={url}/>
            </Card>
        </div>
    );
}

export default VideoPlayer;