import React from 'react';
import Test from './Sea.mp4';

const Video = () => (
    <div className="video">
        <video className='app-video'
                autoPlay loop muted
                style={{
                  position: "fixed",
                  width:"100vw",
                  left: "50%",
                  top: "50%",
                  height: "100vh",
                  objectFit: "cover",
                  transform: "translate(-50%, -50%)",
                  zIndex: "-1" 
                }}>
                <source src={Test} type="video/mp4" />
       </video>     
    </div>
)

export default Video;