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
import SettingsPage from './app/Pages/SettingsPage/SettingsPage';
import ProfilePage from './app/Pages/ProfilePage/ProfilePage';
import { useSelector } from 'react-redux';
import Loading from './app/Common/Loading/Loading';



function App() {

  const { key } = useLocation();
  const {initialized} = useSelector(state => state.async)
  const {currentUserProfile} = useSelector(state => state.profile)

  if (!initialized || !currentUserProfile) return <Loading/>
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
                  <Route path='/settings/:id' component={SettingsPage} />
                  <Route path='/profile/:id' component={ProfilePage} />
              </Switch>
          </Fragment>
        )}
      />
    </div>
  );
}

export default App;
