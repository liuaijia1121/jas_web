import React from 'react';

function VideoPlayer() {
    return (
        <div>
            <video width="100%" height="480" controls>
                <source src="/img/反方向的钟.mp4" type="video/mp4" />
                您的浏览器不支持视频标签。
            </video>
        </div>
    );
}

export default VideoPlayer;
