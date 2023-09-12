import React from 'react';

function VideoCard(videoSrc, title) {
    return (
        <div className="max-w-xs ">
            <img
                src={videoSrc} // Replace with your video thumbnail URL
                alt="Video Thumbnail"
                className="w-full"
            />
            <div className="py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
            </div>
        </div>
    );
}

export default VideoCard;