import React from 'react'
import LotiteView from './LotiteView/LotiteView'
import animation from './LotiteView/Animation/animation2.json'
import Typical from 'react-typical'
import { Button } from 'semantic-ui-react'



export default function EventBlock() {
    return (
        <div className='event'>
            <div className='event_right'>
                <LotiteView inverted animation={animation} width={600} height={600}/>
            </div>
            <div className='event_right'>
                <Typical
                    steps={['Hang Out Events', 700, 'Join Hang Out Events !', 400]}
                    loop={Infinity}
                    wrapper="h1"
                />
                <div className='event_text'>
                    <p>
                        Hang Out Club provides the best of event In Tomsk State,
                        We provide culture, music, education, food, travel, film, 
                        music and online events
                    </p>
                    <p>
                        All of the Tomsk State University events we provides 
                        and We have of our own programs, 
                        <span>
                            You get excited!, Join Events
                        </span>
                    </p>
                </div>

                <div className='hero_btn'>
                    <Button  color='blue' content='Join The Event' />
                </div>
            </div>
        </div>
    )
}
