
import React from "react";
import { Menu, Button, MenuItem, Container } from "semantic-ui-react";
import './StyleHeader.css'
const Navbar = () => (
    <div className='main'>
        <Menu inverted fixed="top">
            <Container>
            <MenuItem header>
                {/* <img
                alt="logo"
                style={{ marginRight: "0.7em" }}
                src={"assets/logo.png"}
                /> */}
                the Hangout Club
            </MenuItem>
            <MenuItem name="Events" />
            <MenuItem name="Community" />
            {/* <MenuItem>
                <Button positive inverted content="Create Event" />
            </MenuItem> */}
            <MenuItem position="right">
                <Button basic inverted content="Login" />
                <Button
                basic
                inverted
                content="Register"
                style={{ marginLeft: "0.6em" }}
                />
            </MenuItem>
            </Container>
        </Menu>
    </div>
);
export default Navbar;