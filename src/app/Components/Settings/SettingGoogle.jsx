import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'

export default function SettingGoogle() {
    return (
        <div>
             <p>Please, Go to Google to update your Password</p>
            <Button 
            as={Link} 
            to='https://web.facebook.com/'
            content='google plus'
            color='google plus'
            size='big'
            icon ='google plus'
            /> 
        </div>
    )
}
