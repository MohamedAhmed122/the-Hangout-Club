
import React from "react";
import {
  Segment,
  Container,
  Header,
  Button,
  Icon,
} from "semantic-ui-react";
import './StyleHomePage.css'

const HomePage = ({ history }) => (
    // <div className='home'>
        <Segment  inverted textAlign="center" vertical className="home">
            <Container style={{marginTop: '25em'}}>
            <Header as="h1" inverted >
                {/* <Image
                size="massive"
                src="/assets/logo.png"
                style={{ marginBottom: 12 }}
                /> */}
                 Hang out Club
            </Header>
            <Button onClick={() => history.push("/event")} size="huge" inverted>
                Get Started
                <Icon name="right arrow" inverted />
            </Button>
            </Container>
        </Segment>
    // </div>
);

export default HomePage;