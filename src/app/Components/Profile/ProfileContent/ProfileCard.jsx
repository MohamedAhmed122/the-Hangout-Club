import React from 'react'
import { Link } from 'react-router-dom'
import { Card, CardContent, Header, Image, Segment } from 'semantic-ui-react'

export default function ProfileCard({profile}) {
    return (
        <Card as={Link} to={`profile/${profile.id}`}>
            <Image src={profile.photoURL || '/assets/user.png'} />
            <CardContent>
                <Card.Header content={profile.displayName} />
            </CardContent>
        </Card>
    )
}
