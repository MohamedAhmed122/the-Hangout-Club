import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "semantic-ui-react";
import { openModal } from "../../../redux/Modal/ModalAction";
const SignedOutMenu = () =>{ 
    const dispatch = useDispatch()
    return(
        <div className='hide'>
            <Button 
            onClick={() => dispatch(openModal({modalType: 'LoginForm'}))} 
            basic 
            inverted 
            content="Login" 
            />
            <Button
            onClick={() => dispatch(openModal({modalType: 'RegisterForm'}))}
            basic 
            inverted
            content="Register" 
            style={{ marginLeft: "0.6em" }} 
            />
        </div>
)}
export default SignedOutMenu;