import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

export default function SettingFacebook() {
    return (
        <div>
             <p>If you want to update your password go to Facebook </p>
                <Button 
                as={Link} 
                to='https://web.facebook.com/'
                content='Go Facebook'
                color='facebook'
                icon ='facebook'
                size='big'
                style={{margin: '20px 0px'}}
                /> 
        </div>
    )
}
