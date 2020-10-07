import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import cuid from 'cuid';

import './App.css';

import EventForm from './app/Components/Events/EventForm/EventForm';
import Navbar from './app/layouts/Header/Header';
import EventDashboard from './app/Pages/EventDashboard/EventDashboard';
import EventData from './app/API/API'



function App() {
  const [events , setEvent] = useState(EventData)
 
  const handleCreateEvent =(event)=>{

      setEvent([...events,event])
  }
  return (
    <div className="App">
      <Navbar />
      <Switch>
          <Route exact path='/'>
            <EventDashboard 
              events={events}
              setEvent={setEvent}
            />
          </Route>
          <Route exact path='/createEvent' >
            <EventForm handleCreateEvent={handleCreateEvent}/>
          </Route>
      </Switch>
    </div>
  );
}

export default App;
