import React from 'react'
import {   useHistory } from 'react-router-dom'
import { Card, CardContent, Image } from 'semantic-ui-react'

export default function ProfileCard({profile}) {
    const history = useHistory()

    return (
        <Card onClick={() =>history.replace(`/profile/${profile.id}`)}>
            <Image src={profile.photoURL || '/assets/user.png'} />
            <CardContent>
                <Card.Header content={profile.displayName} />
            </CardContent>
        </Card>
    )
}
