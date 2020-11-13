import React, { Fragment } from "react";
import { Comment, Header, Segment } from "semantic-ui-react";
import CommentForm from "./CommentForm";

const EventChat = ({eventId}) => (
  <Fragment>
    <Segment
      textAlign="center"
      attached="top"
      inverted
      color="teal"
      style={{ border: "none" }}
    >
      <Header>Chat about this event</Header>
    </Segment>

    <Segment attached>
      <Comment.Group>
        <Comment>
          <Comment.Avatar  src="/assets/user.png" />
          <Comment.Content>
            <Comment.Author as="a">Matt</Comment.Author>
            <Comment.Metadata>
              <div>Today at 5:42PM</div>
            </Comment.Metadata>
            <Comment.Text>How artistic!</Comment.Text>
            <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions>
          </Comment.Content>
        </Comment>

       
        <CommentForm eventId={eventId}/>

      </Comment.Group>
    </Segment>
  </Fragment>
);
export default EventChat;