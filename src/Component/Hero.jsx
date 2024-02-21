import React from "react";

const Hero = () => {
    let beachVid;
    return(
        <div className='w-full h-screen relative'>
            <video
                className='w-full h-full object-cover'
                src={beachVid}
                autoPlay
                loop
                muted
            />
        </div>
    )
}