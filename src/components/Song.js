import React from 'react';
import { Link } from 'react-router-dom';

function Song({ imgSrc, singer, songName }) {
    return (
        <div className="intro-song1">
            <div className="intro-song-img">
                <img src={imgSrc} alt={songName} />
            </div>
            <div className="actor-name">
                <p>{singer}</p>
                <p className="actor-introduce">{songName}。</p>
                <Link to="/video">查看详情</Link>
            </div>
        </div>
    );
}

export default Song;
