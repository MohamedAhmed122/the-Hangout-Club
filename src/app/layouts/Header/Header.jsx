
import React from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Menu, Button, MenuItem, Container, Icon } from "semantic-ui-react";
import { openCalender } from "../../redux/calender/calenderReducer";
import MenuSignedIn from "./Menu/MenuSignedIn";
import SignedOutMenu from "./Menu/MenuSignedOut";
import ResponsiveHeader from "./ResponsiveHeader/ResponsiveHeader";
import './StyleHeader.css'
const Navbar = ({inverted}) => {
    
    const { isAuthenticated } = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const [displayNavbar , setDisplayNavbar] = useState(false)
 



   

    return(
        <>
            {displayNavbar && <ResponsiveHeader />}
            <nav className={ inverted ? "main-none" : "main"}>
                <Menu inverted fixed="top">
                    <Container>
                            <MenuItem className='item_nav' as={NavLink} exact to ='/' header>
                                {/* <img
                                alt="logo"
                                style={{ marginRight: "0.7em" }}
                                src={"assets/logo.png"}
                                /> */}
                                Hangout Club
                            </MenuItem>
                            <MenuItem className='item_menu_nav' onClick={()=>setDisplayNavbar(!displayNavbar)}>
                                <Icon name='th' size='big' />
                            </MenuItem>
                            <MenuItem  className='item_nav' as={NavLink} exact to ='/event' name="Events" />
                            <MenuItem  className='item_nav'  as={NavLink} exact to ='/community' name="Community" />
                            <MenuItem className='item_nav' >
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
        
        </>
)};
export default Navbar;