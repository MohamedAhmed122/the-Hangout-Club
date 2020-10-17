import React, { Fragment, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import EventForm from './app/Components/Events/EventForm/EventForm';
import Navbar from './app/layouts/Header/Header';
import EventDashboard from './app/Pages/EventDashboard/EventDashboard';
import EventData from './app/API/API'
import EventDetailedPage from './app/Pages/EventDetailedPage/EventDetailedPage';
import HomePage from './app/Pages/HomePage/HomePage';



function App() {

  // const { key } = useLocation();

  const [events , setEvent] = useState(EventData)
  const [selectedEvent, setSelectedEvent] = useState(null);
 
  const handleCreateEvent =(event)=> setEvent([...events,event])
  const handleSelected = (event) =>  setSelectedEvent(event);

  const handleUpdateEvent = (updateEvent) => {
    setEvent(
      events.map((event) => (event.id === updateEvent.id ? updateEvent : event))
    );
    setSelectedEvent(null);
  };
 
  return (
    <div className="App">
      <Route exact path='/' component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <Fragment>
            <Navbar />
              <Switch>
                  <Route exact path="/event"  >
                      <EventDashboard 
                        events={events}
                        setEvent={setEvent}
                        handleSelected={handleSelected}
                      />
                  </Route >
                  <Route exact path='/createEvent' >
                      <EventForm 
                        handleCreateEvent={handleCreateEvent}
                        selectedEvent={selectedEvent}
                        handleUpdateEvent={handleUpdateEvent}
                        key={selectedEvent ? selectedEvent.id : null}
                      />
                  </Route>
                  <Route path="/event/:id" component={EventDetailedPage} />
              </Switch>
          </Fragment>
        )}
      />
    </div>
  );
}

export default App;
