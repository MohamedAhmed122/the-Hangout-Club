import React from 'react'
import { Button, Form, Header, Segment } from 'semantic-ui-react'
import './StyleEventForm.css'
export default function EventForm() {
    return (
        <div className='event-form'>
            <div className='form-main'>
                <Segment clearing>
                    <Header content="Create new Event" />
                    <Form>
                        <Form.Field>
                        <input type="text" placeholder="Event Title" />
                        </Form.Field>
                        <Form.Field>
                        <input type="text" placeholder="Category" />
                        </Form.Field>
                        <Form.Field>
                        <input type="text" placeholder="Description" />
                        </Form.Field>
                        <Form.Field>
                        <input type="text" placeholder="City" />
                        </Form.Field>
                        <Form.Field>
                        <input type="text" placeholder="Venue" />
                        </Form.Field>
                        <Form.Field>
                        <input type="date" placeholder="Date" />
                        </Form.Field>
                        <Button content="Submit" type="submit" positive floated="right" />
                        <Button
                        content="Cancel"
                        type="submit"
                        floated="right"
                        />
                    </Form>
        </Segment>
            </div>
        </div>
    )
}
