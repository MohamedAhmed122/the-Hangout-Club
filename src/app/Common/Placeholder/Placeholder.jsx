import React from 'react'
import { Button, Grid, GridColumn, Placeholder, Segment } from 'semantic-ui-react'
import './StylePlaceholder.css'

export default function PlaceholderLoading() {
    return (
        <div className='placeholder'>
            <Grid>
                <GridColumn width={5}>
                <Placeholder>
                    <Placeholder.Header image>
                        <Placeholder.Line />
                        <Placeholder.Line />
                    </Placeholder.Header>
                </Placeholder>
                <Placeholder>
                    <Placeholder.Header image>
                        <Placeholder.Line />
                        <Placeholder.Line />
                    </Placeholder.Header>
                </Placeholder>
                <Placeholder>
                    <Placeholder.Header image>
                        <Placeholder.Line />
                        <Placeholder.Line />
                    </Placeholder.Header>
                </Placeholder>
                <Placeholder>
                    <Placeholder.Header image>
                        <Placeholder.Line />
                        <Placeholder.Line />
                    </Placeholder.Header>
                </Placeholder>
                <Placeholder>
                    <Placeholder.Header image>
                        <Placeholder.Line />
                        <Placeholder.Line />
                    </Placeholder.Header>
                </Placeholder>
                <Placeholder>
                    <Placeholder.Header image>
                        <Placeholder.Line />
                        <Placeholder.Line />
                    </Placeholder.Header>
                </Placeholder>
                <Placeholder>
                    <Placeholder.Header image>
                        <Placeholder.Line />
                        <Placeholder.Line />
                    </Placeholder.Header>
                </Placeholder>
                <Placeholder>
                    <Placeholder.Header image>
                        <Placeholder.Line />
                        <Placeholder.Line />
                    </Placeholder.Header>
                </Placeholder>
                <Placeholder>
                    <Placeholder.Header image>
                        <Placeholder.Line />
                        <Placeholder.Line />
                    </Placeholder.Header>
                </Placeholder>
                </GridColumn>
                <GridColumn width={8}>
                    <div className='placeholder_right'>
                        <Placeholder fluid>
                            <Segment.Group>
                                <Segment style={{ minHeight: 110 , }}>
                                <Placeholder fluid style={{ height: 150,}}>
                                    <Placeholder.Image square style={{ height: 150}}/>
                                </Placeholder>
                                </Segment>
                                <Segment>
                                <Placeholder>
                                    <Placeholder.Header image>
                                        <Placeholder.Line />
                                        <Placeholder.Line />
                                    </Placeholder.Header>
                                </Placeholder>
                                </Segment>
                                <Segment>
                                <Placeholder>
                                    <Placeholder.Line />
                                    <Placeholder.Line />
                                </Placeholder>
                                </Segment>
                                <Segment secondary style={{ minHeight: 70 }} />
                                <Segment clearing>
                                    <Button disabled color="blue" floated="right" content="View" />
                                </Segment>
                            </Segment.Group>
                        </Placeholder>
                    </div>
                        
                </GridColumn>
            </Grid>
        </div>
    )
}
