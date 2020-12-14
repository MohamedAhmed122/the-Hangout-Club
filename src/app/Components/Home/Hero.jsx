import React from 'react'
import LotiteView from './LotiteView/LotiteView'
import { Wave} from 'react-animated-text';
import animation from './LotiteView/Animation/animation.json'
import './StyleHome.css'
import { Button } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';

export default function Hero() {
    const history = useHistory()
    var w = window.innerWidth;
    console.log(w)
    return (
        <div className='hero'>
            <div>
                <div className='hero_text'> 
                    <p className='wave_big_text' >
                        <Wave text="Hang " effect="stretch" effectChange={1.5} />
                    </p>
                    <p className='wave_small_text'>
                        <Wave  text="On Your Money" effect="stretch" effectChange={2.0} />
                    </p>
                </div>
                <div className='hero_text' > 
                    <p className='wave_big_text' >
                        <Wave text="Out " effect="stretch" effectChange={1.5} autoPlay={false} />
                    </p>
                    <p className='wave_small_text'>
                        <Wave  text="Of Your Mind" effect="stretch" effectChange={2.0} />
                    </p>
                </div>
                <div className='hero_text' > 
                    <p className='wave_small_texts' >
                        <Wave text="In Our" effect="stretch" effectChange={2.0} />
                    </p>
                    <p className='wave_big_texts'>
                        <Wave  text="Club" effect="stretch" effectChange={1.5} />
                    </p>
                </div>
                <div className='hero_btn'>
                    <Button onClick={()=>history.push('/event')} color='teal' content=' Join The Club ' />
                </div>
            </div>
            
            <div className='hero_right'>
                <LotiteView inverted animation={animation} width={w <=700? 300: 600} height={w <=700? 300: 600} />
            </div>
        </div>
    )
}
