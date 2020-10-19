import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "semantic-ui-react";
import { openModal } from "../../../redux/Modal/ModalAction";
const SignedOutMenu = ({ setAuth }) =>{ 
    const dispatch = useDispatch()
    return(
        <>
            <Button onClick={() => dispatch(openModal({modalType: 'LoginForm'}))} basic inverted content="Login" />
            <Button basic inverted content="Register" style={{ marginLeft: "0.6em" }} />
        </>
)}
export default SignedOutMenu;