import Lottie from 'react-lottie';
import React from 'react'
import { handleWidthAndHeight } from '../../../Common/utils/utils';

export default function LotiteView({animation,inverted,  ...props}) {
    var w = window.innerWidth;
    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animation,
      };
    return (
        <> {inverted ?
            <Lottie options={defaultOptions}
                height={handleWidthAndHeight(w)}
                width={handleWidthAndHeight(w)}
                inverted 
                style={{
                transform: 'scaleX(-1)' 
                }} 
                />:
                <Lottie options={defaultOptions}
                height={handleWidthAndHeight(w)}
                width={handleWidthAndHeight(w)}
                inverted 
               
                />
            }
        </>
    )
}
