
import React from "react";
import { Segment, Grid, Icon, Button } from "semantic-ui-react";
import {format} from 'date-fns'
import EventMap from "./EventMap";
import { useState } from "react";


const EventInfo = ({ events: { description, date, venue } }) => {
  const [showMap , setShowMap] = useState(false)
  return(
    <Segment.Group>
      <Segment attached="top">
        <Grid>
          <Grid.Column width={1}>
            <Icon size="large" color="teal" name="info" />
          </Grid.Column>
          <Grid.Column width={15}>
            <p>{description}</p>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign="middle">
          <Grid.Column width={1}>
            <Icon name="calendar" size="large" color="teal" />
          </Grid.Column>
          <Grid.Column width={15}>
            <span> {format(date, 'MMMM d, yyyy h:mm a')}</span>
          </Grid.Column>
        </Grid>
      </Segment>
      <Segment attached>
        <Grid verticalAlign="middle">
          <Grid.Column width={1}>
            <Icon name="marker" size="large" color="teal" />
          </Grid.Column>
          <Grid.Column width={11}>
            <span> {venue.address}</span>
          </Grid.Column>
          <Grid.Column width={4}>
            <Button 
            onClick={()=> setShowMap(!showMap)}
            color="teal" 
            size="tiny" 
            content={showMap ? 'Hide Map' : "Show Map"} 
            />
          </Grid.Column>
        </Grid>
      </Segment>
      {
       showMap && <EventMap latLng={venue.latLng} />
      }
    </Segment.Group>
)};
export default EventInfo;