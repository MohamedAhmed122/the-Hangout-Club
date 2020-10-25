import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";

const Loading = ({ inverted = true, children }) => (
  <Dimmer inverted={inverted} active={true}>
    <Loader />
    <p style={{color: 'black', marginTop: '9rem'}}>{children}</p>
  </Dimmer>
);
export default Loading