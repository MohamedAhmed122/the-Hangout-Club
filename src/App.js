import React, { Fragment } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';

import './App.css';
import ModalManger from './app/Common/Modal/ModalManger';

import EventForm from './app/Components/Events/EventForm/EventForm';
import Navbar from './app/layouts/Header/Header';
import EventDashboard from './app/Pages/EventDashboard/EventDashboard';
import EventDetailedPage from './app/Pages/EventDetailedPage/EventDetailedPage';
import HomePage from './app/Pages/HomePage/HomePage';
import { ToastContainer } from 'react-toastify';
import CommunityPage from './app/Pages/CommunityPage/CommunityPage';
import Error from './app/Common/404/Error';


function App() {

  const { key } = useLocation();
 

  return (
    <div className="App">
      <ModalManger />
      <ToastContainer position='bottom-right' />
      <Route exact path='/' component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <Fragment>
            <Navbar />
              <Switch>
                  <Route exact path="/event"  component ={EventDashboard} />
                  <Route
                  path={["/createEvent", "/manage/:id"]}
                  component={EventForm}
                  key={key}
                />
                  <Route path="/event/:id" component={EventDetailedPage} />
                  <Route path='/community' component={CommunityPage} />
                  <Route path='/error' component={Error} />
              </Switch>
          </Fragment>
        )}
      />
    </div>
  );
}

export default App;
