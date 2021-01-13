import React from 'react'
import { Card, Header, Segment } from 'semantic-ui-react'
import ProfileCard from './ProfileCard'

export default function ProfileFollowers({title, profile}) {
    return (
        <div style={{marginTop: '8rem'}}>
            <Segment>
                <Header content={title} icon='person' />
                <Card.Group itemsPerRow={3}>
                    <ProfileCard profile={profile} />
                </Card.Group>
            </Segment>
        </div>
    )
}
