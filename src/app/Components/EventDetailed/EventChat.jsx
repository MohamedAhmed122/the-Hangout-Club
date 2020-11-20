import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Comment, Header, Segment } from "semantic-ui-react";
import { ConvertToArray, getEventChatRef } from "../../firebase/firebaseService";
import  { getEventComment } from '../../redux/event/eventAction'
import {formatDistance} from 'date-fns'
import CommentForm from "./CommentForm";

const EventChat = ({eventId}) => {

  const dispatch = useDispatch();

  const { comments } = useSelector(state => state.event)

  useEffect(()=>{
    getEventChatRef(eventId).on('value', snapshot =>{
      if(!snapshot.exists()) return;
      dispatch(getEventComment(ConvertToArray(
        snapshot.val()
      )))
    })
  },[eventId, dispatch])
  return(
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
            {
              comments.map(comment =>(
                  <Comment key={comment.id}>
                    <Comment.Avatar  src={comment?.photoURL || "/assets/user.png"} />
                    <Comment.Content>
                      <Comment.Author as={Link} to={`/profile/${comment.uid}`}>{comment?.displayName}</Comment.Author>
                      <Comment.Metadata>
                          <div>{formatDistance(comment.date , Date.now())}</div>
                      </Comment.Metadata>
                      <Comment.Text>{comment?.comment}</Comment.Text>
                    </Comment.Content>
                    <br/>
                  </Comment>
              ))
            }
           
          </Comment.Group>
          <CommentForm eventId={eventId}/>
      </Segment>
      </Fragment>
  )
}
export default EventChat;