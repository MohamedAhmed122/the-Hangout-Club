import React from 'react';

import './App.css';
import Navbar from './app/layouts/Header/Header';
import EventDashboard from './app/Pages/EventDashboard/EventDashboard';

function App() {
  return (
    <div className="App">
      <Navbar />
      <EventDashboard />
    </div>
  );
}

export default App;
