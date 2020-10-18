import React from "react";
import { Segment, Item } from "semantic-ui-react";

const EventSidebar = () => (
  <div style={{ }}>

    <Segment
      textAlign="center"
      style={{ border: "none", width: '340px',  }}
      attached="top"
      secondary
      inverted
      color="teal"
    >
      2 People Going
    </Segment>
    <Segment attached>
      <Item.Group relaxed divided>
        <Item style={{ position: "relative" }}>
          <Item.Image size="tiny" circular src='https://randomuser.me/api/portraits/men/27.jpg' />
          <Item.Content verticalAlign="middle">
            <Item.Header as="h3">
              <span>Tom</span>
            </Item.Header>
          </Item.Content>
        </Item>
        <Item style={{ position: "relative" }}>
          <Item.Image size="tiny" circular src='https://randomuser.me/api/portraits/men/22.jpg'/>
          <Item.Content verticalAlign="middle">
            <Item.Header as="h3">
              <span>Bob</span>
            </Item.Header>
          </Item.Content>
        </Item>
      </Item.Group>
    </Segment>
  </div>
);
export default EventSidebar;