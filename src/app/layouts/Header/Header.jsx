
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Menu, Button, MenuItem, Container } from "semantic-ui-react";
import { openCalender } from "../../redux/calender/calenderReducer";
import MenuSignedIn from "./Menu/MenuSignedIn";
import SignedOutMenu from "./Menu/MenuSignedOut";
import './StyleHeader.css'
const Navbar = () => {
    
    const { isAuthenticated } = useSelector(state => state.auth)
    const dispatch = useDispatch()
 



   

    return(
    <nav className='main'>
        <Menu inverted fixed="top">
            <Container>
            <MenuItem as={NavLink} exact to ='/' header>
                {/* <img
                alt="logo"
                style={{ marginRight: "0.7em" }}
                src={"assets/logo.png"}
                /> */}
                the Hangout Club
            </MenuItem>
            <MenuItem as={NavLink} exact to ='/event' name="Events" />
            <MenuItem  as={NavLink} exact to ='/community' name="Community" />
            <MenuItem>
                <Button onClick={()=> dispatch(openCalender())} positive inverted  content="Select Event" />
            </MenuItem>
            <MenuItem position="right">
               {
                   isAuthenticated? <MenuSignedIn /> : <SignedOutMenu setAuth={isAuthenticated}/>
               }
            </MenuItem>
            </Container>
        </Menu>
    </nav>
)};
export default Navbar;