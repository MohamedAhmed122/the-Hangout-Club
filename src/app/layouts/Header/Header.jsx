
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, Button, MenuItem, Container } from "semantic-ui-react";
import MenuSignedIn from "./Menu/MenuSignedIn";
import SignedOutMenu from "./Menu/MenuSignedOut";
import './StyleHeader.css'
const Navbar = () => {

    const [auth, setAuth] = useState(false);

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
                <Button positive inverted content="Create Event" />
            </MenuItem>
            <MenuItem position="right">
               {
                   auth? <MenuSignedIn /> : <SignedOutMenu setAuth={setAuth}/>
               }
            </MenuItem>
            </Container>
        </Menu>
    </nav>
)};
export default Navbar;