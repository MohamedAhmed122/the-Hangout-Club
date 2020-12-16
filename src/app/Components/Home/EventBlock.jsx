import React from 'react'
import LotiteView from './LotiteView/LotiteView'
import animation from './LotiteView/Animation/animation2.json'
import Typical from 'react-typical'
import { Button } from 'semantic-ui-react'
import { useHistory } from 'react-router-dom'



export default function EventBlock() {
    const history = useHistory()
   

    return (
        <div className='event_hero'>
            <div className='event_hero_left'>
                <LotiteView animation={animation} inverted />
            </div>
            <div className='event_hero_left'>
                <Typical
                    steps={['Hang Out Events', 700, 'Join Hang Out Events !', 400]}
                    loop={Infinity}
                    wrapper="h1"
                />
                <div className='event_hero_text'>
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
                <div className='hero_btn'>
                    <Button  onClick={()=>history.push('/event')} color='blue' content='Join The Event' />
                </div>
            </div>
        </div>
    )
}

// {/* <div className='even_block_right'>
//     <LotiteView animation={animation} inverted width={600} height={600}/>
// </div>
// <div className='event_block_right'>
//     <Typical
//         steps={['Hang Out Events', 700, 'Join Hang Out Events !', 400]}
//         loop={Infinity}
//         wrapper="h1"
//     />
//     <div className='event_block'>
//         <p>
//             Hang Out Club provides the best of event In Tomsk State,
//             We provide culture, music, education, food, travel, film, 
//             music and online events
//         </p>
//         <p>
//             All of the Tomsk State University events we provides 
//             and We have of our own programs, 
//             <span>
//                 You get excited!, Join Events
//             </span>
//         </p>
//     </div>

//     <div className='hero_btn'>
//         <Button  onClick={()=>history.push('/event')} color='blue' content='Join The Event' />
//     </div>
// </div> */}