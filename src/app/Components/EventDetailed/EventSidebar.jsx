import React from "react";
import { Link } from "react-router-dom";
import { Segment, Item, Label } from "semantic-ui-react";

const EventSidebar = ({event}) =>{ 
    return(
      <div>
        <Segment
          textAlign="center"
          style={{ border: "none", width: '340px',  }}
          attached="top"
          secondary
          inverted
          color="teal"
        >
          {event.attendees.length} {event.attendees.length > 1 ? 'People are' : 'Person is'}   Going
        </Segment>
        <Segment attached>
        <Item.Group relaxed divided>
        {event.attendees.map((attendee) => (
          <Item  key={attendee.id} style={{ position: "relative" }}>
            {
              event.hostUid === attendee.id &&(
                <Label style={{position: 'absolute'}} color='teal' ribbon='right' content='Host' />
              )
            }
            <Item.Image
              circular
              size="tiny"
              src={attendee.photoURL || "/assets/user.png"}
            />
            <Item.Content verticalAlign="middle">
              <Item.Header as={Link} to={`/profile/${attendee.id}`}>
                <span>{attendee.displayName}</span>
              </Item.Header>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
        </Segment>
      </div>
);}
export default EventSidebar;