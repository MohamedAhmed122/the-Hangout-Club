import React from "react";
import { Dimmer, Loader } from "semantic-ui-react";

const Loading = ({ inverted = true }) => (
  <Dimmer inverted={inverted} active={true}>
    <Loader />
  </Dimmer>
);
export default Loading