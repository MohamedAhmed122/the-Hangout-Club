import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import { Header } from 'semantic-ui-react';

import './StyleCalender.css'

function Calender({predicate,loading, setPredicate}) {
 

  return (
    <div className='calender_main'>
      <Header 
      style={{backgroundColor: ''}}
      icon="calendar" 
      attached 
      color="teal" 
      content="Select date" />
      <Calendar
        onChange={date =>setPredicate('startDate', date) }
        value={predicate.get('startDate') || new Date()}
        tileDisabled={()=> loading}
      />
    </div>
  );
}
export default Calender


