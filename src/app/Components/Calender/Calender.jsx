import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import { Header } from 'semantic-ui-react';

import './StyleCalender.css'

function Calender() {
 
  const [value, onChange] = useState(new Date());

  return (
    <div className='calender_main'>
      <Header minWidth={798}  icon="calendar" attached color="teal" content="Select date" />
      <Calendar
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
export default Calender


