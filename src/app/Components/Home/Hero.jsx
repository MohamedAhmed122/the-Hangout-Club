import React from 'react'
import LotiteView from './LotiteView/LotiteView'
import { Wave} from 'react-animated-text';
import './StyleHome.css'

export default function Hero() {
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
                        <Wave  text="Of you Mind" effect="stretch" effectChange={2.0} />
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
            </div>
            
            <div className='hero_right'>
                <LotiteView />
            </div>
        </div>
    )
}
