import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

export default function SettingFacebook() {
    return (
        <div>
             <p>Please, Go to Facebook to update your Password</p>
                <Button 
                as={Link} 
                to='https://web.facebook.com/'
                content='Go Facebook'
                color='facebook'
                icon ='facebook'
                size='big'
                /> 
        </div>
    )
}
