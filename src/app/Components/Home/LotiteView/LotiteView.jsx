import Lottie from 'react-lottie';
import animation from "./Animation/animation.json"
import React from 'react'

export default function LotiteView({...props}) {
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animation,
      };
    return (
        <Lottie options={defaultOptions}
            height={600}
            width={600}
            style={{
                transform: 'scaleX(-1)'
            }}
            />
    )
}
