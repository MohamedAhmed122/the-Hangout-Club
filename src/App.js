import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';
import EventForm from './app/Components/Events/EventForm/EventForm';
import Navbar from './app/layouts/Header/Header';
import EventDashboard from './app/Pages/EventDashboard/EventDashboard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
          <Route exact path='/'component={EventDashboard} /> 
          <Route exact path='/createEvent' component={EventForm} />
      </Switch>
    </div>
  );
}

export default App;
