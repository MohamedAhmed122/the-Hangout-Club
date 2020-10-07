import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

function MyApp() {
  const [value, onChange] = useState(new Date());

  return (
    <div style={{marginTop: '7rem', marginRight: '2rem'}}>
      <Calendar
        onChange={onChange}
        value={value}
      />
    </div>
  );
}
export default MyApp