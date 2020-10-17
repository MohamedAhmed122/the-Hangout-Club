import React from "react";
import { Button } from "semantic-ui-react";
const SignedOutMenu = ({ setAuth }) => (
    <>
        <Button onClick={() => setAuth(true)} basic inverted content="Login" />
        <Button basic inverted content="Register" style={{ marginLeft: "0.6em" }} />
    </>
);
export default SignedOutMenu;