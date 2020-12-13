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
  const { isAuthenticated } = useSelector(state => state.auth)

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
          style={{ border: "none", marginTop: '2rem', marginBottom:'2rem' }}
        >
          <Header>{isAuthenticated? 'Chat about this event' : "You need to sign in order to chat"}</Header>
        </Segment>

          {isAuthenticated &&
           <Segment attached  style={{ marginBottom:'2rem' }}>
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
        </Segment>}
      </Fragment>
  )
}
export default EventChat;