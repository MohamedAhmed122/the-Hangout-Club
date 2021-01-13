import React, { Fragment } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import ModalManger from './app/Common/Modal/ModalManger';
import EventDashboard from './app/Pages/EventDashboard/EventDashboard';
import EventDetailedPage from './app/Pages/EventDetailedPage/EventDetailedPage';
import { ToastContainer } from 'react-toastify';
import CommunityPage from './app/Pages/CommunityPage/CommunityPage';
import Error from './app/Common/404/Error';
import SettingsPage from './app/Pages/SettingsPage/SettingsPage';
import ProfilePage from './app/Pages/ProfilePage/ProfilePage';
import { useSelector } from 'react-redux';
import Loading from './app/Common/Loading/Loading';
import ChannelPage from './app/Pages/ChannelPage/ChannelPage'
import ReportPage from './app/Pages/ReportPage/ReportPage';

import './App.css';
import PrivateRoute from './app/Common/PrivateRoute/PrivateRoute';
import Home from './app/Pages/HomePage/Home'
import { CreateEventPage } from './app/Pages/CreateEventPage/CreateEventPage';



function App() {

  const { key } = useLocation();

  const {initialized} = useSelector(state => state.async)

  if ( !initialized) return <Loading/>
  return (
    <div className="App">
      <ModalManger />
      <ToastContainer position='bottom-right' />
      <Route exact path='/' component={Home} />
      <PrivateRoute exact path='/community' component={CommunityPage} />
      <PrivateRoute exact path='/community/:id' component={ChannelPage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <Fragment>
              <Switch>
                  <Route exact path="/event"  component ={EventDashboard} />
                  <PrivateRoute
                  path={["/createEvent", "/manage/:id"]}
                  component={CreateEventPage}
                  key={key}
                />
                  <Route path="/event/:id" component={EventDetailedPage} />
                  <Route path='/error' component={Error} />
                  <PrivateRoute path='/settings/:id' component={SettingsPage} />
                  <Route exact path='/profile/:id' component={ProfilePage} />
                  <Route path='/report' component={ReportPage} />
                  <Route path='/home' component={Home} />
              </Switch>
          </Fragment>
        )}
      />
    </div>
  );
}

export default App;
