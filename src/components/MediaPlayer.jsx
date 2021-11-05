import React, { useRef, useState } from 'react'

const MediaPlayer = () => {

    const videoRef = useRef();
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = (e) => {
        const videoPlayer = videoRef.current;
        if(isPlaying) {
            videoPlayer.pause();
            setIsPlaying(false);
        } else {
            videoPlayer.play();
            setIsPlaying(true);
        }
    }

    return (
        <div>
            <h2 className="my-4">Media Player App</h2>
            <video ref={videoRef}>
                <source src="videos/dog-video.mp4" type="video/mp4"/>
            </video>

            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <button onClick={handlePlay} className="btn btn-primary p-3 pb-0 m-3">
                            {isPlaying ?
                                <p>Pause <span className="btn-icon"><i className="fas fa-pause"></i></span></p>
                            :
                                <p>Play <span className="btn-icon"><i className="fas fa-play"></i></span></p>
                            }
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MediaPlayer
