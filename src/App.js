import React, { Fragment } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import ModalManger from './app/Common/Modal/ModalManger';
import EventForm from './app/Components/Events/EventForm/EventForm';
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
import ChannelPage from './app/Pages/ChannelPage/ChannelPage'
import ReportPage from './app/Pages/ReportPage/ReportPage';

import './App.css';
import PrivateRoute from './app/Common/PrivateRoute/PrivateRoute';
import Hero from './app/Components/Home/Hero';



function App() {

  const { key } = useLocation();

  const {initialized} = useSelector(state => state.async)

  if ( !initialized) return <Loading/>
  return (
    <div className="App">
      <ModalManger />
      <ToastContainer position='bottom-right' />
      <Route exact path='/' component={HomePage} />
      <PrivateRoute exact path='/community' component={CommunityPage} />
      <PrivateRoute exact path='/community/:id' component={ChannelPage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <Fragment>
            {/* <Navbar inverted={inverted}/> */}
              <Switch>
                  <Route exact path="/event"  component ={EventDashboard} />
                  <PrivateRoute
                  path={["/createEvent", "/manage/:id"]}
                  component={EventForm}
                  key={key}
                />
                  <Route path="/event/:id" component={EventDetailedPage} />
                  <Route path='/error' component={Error} />
                  <PrivateRoute path='/settings/:id' component={SettingsPage} />
                  <PrivateRoute path='/profile/:id' component={ProfilePage} />
                  <Route path='/report' component={ReportPage} />
                  <Route path='/home' component={Hero} />
              </Switch>
          </Fragment>
        )}
      />
    </div>
  );
}

export default App;
