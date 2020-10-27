import React, { Fragment } from 'react'
import { useDispatch } from 'react-redux'
import { Button } from 'semantic-ui-react'
import { closeModal } from '../../redux/Modal/ModalAction'
import {SocialLogin} from '../../firebase/firebaseService'

export default function SocialLogins() {
    const dispatch = useDispatch();

    const handleLogin = provider =>{
        SocialLogin(provider)
        dispatch(closeModal())
    }
    return (
        <Fragment>
            <Button 
                fluid
                onClick={()=> handleLogin('google')}
                color='google plus'
                icon='google plus'
                content='Login With Google'
                style={{marginBottom: 10}}
            />
            <Button 
               onClick={()=> handleLogin('facebook')}
               fluid
               color='facebook'
               icon='facebook'
               content='Login With Facebook'
            />
        </Fragment>
    )
}
