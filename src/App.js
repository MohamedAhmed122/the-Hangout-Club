import React, { Fragment } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import './App.css';

import EventForm from './app/Components/Events/EventForm/EventForm';
import Navbar from './app/layouts/Header/Header';
import EventDashboard from './app/Pages/EventDashboard/EventDashboard';
import EventDetailedPage from './app/Pages/EventDetailedPage/EventDetailedPage';
import HomePage from './app/Pages/HomePage/HomePage';



function App() {

  const { key } = useLocation();

  return (
    <div className="App">
      <Route exact path='/' component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <Fragment>
            <Navbar />
              <Switch>
                  <Route exact path="/event"  component ={EventDashboard} />
                  <Route exact path='/createEvent' >
                      <EventForm  key={key}/>
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
