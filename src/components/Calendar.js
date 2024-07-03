import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';

function Calendar() {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin]}
      initialView="dayGridMonth"
      events={[
        { title: 'event 1', date: '2023-04-01' },
        { title: 'event 2', date: '2023-04-02' },
        // Add more events as needed
      ]}
    />
  );
}

export default Calendar;
