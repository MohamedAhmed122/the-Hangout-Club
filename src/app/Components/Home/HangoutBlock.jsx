import React from 'react'
import LotiteView from './LotiteView/LotiteView'
import animation from './LotiteView/Animation/connect.json'
import Typical from 'react-typical'
import { Button } from 'semantic-ui-react'
import'./StyleHome.css'
import { useHistory } from 'react-router-dom'



export default function HangoutBlock() {
    const history = useHistory()

    return (
        <div className='event_hero'>
            <div className='event_hero_left'>
                <LotiteView  animation={animation}  />
            </div>
            <div className='event_hero_left type'>
                <Typical
                    steps={['Welcome To the Family', 700, 'Hang Out Family', 400]}
                    loop={Infinity}
                    wrapper="h1"
                />
                <div className='event_hero_text hang'>
                    <p>
                        Hang Out Club provides the best of event In Tomsk State,
                        We provide culture, music, education, food, travel, film, 
                        music and online events
                    </p>
                    <p className='hidden-sm'>
                        All of the Tomsk State University events we provides 
                        and We have of our own programs, 
                        <span>
                            You get excited!, Join Events
                        </span>
                    </p>
                </div>

                <div  className='hero_btn'>
                    <Button onClick={()=>history.push('/event')} style={{ backgroundColor: '#14a2f4', color: 'white'}} content='Join The Club' />
                </div>
            </div>
        </div>
    )
}
