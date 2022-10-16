import React from 'react';
import { Link } from 'react-router-dom';
import TopRibbon from '../components/topribbon.jsx';
import "../css/calendar.css"

import background from "../images/website-background.png";

import {
    Calendar,
    Views,
    momentLocalizer,
  } from 'react-big-calendar';

import 'react-big-calendar/lib/css/react-big-calendar.css';
import'react-big-calendar/lib/addons/dragAndDrop/styles.css';
import moment from 'moment'

function CalendarView() {

    const localizer = momentLocalizer(moment)

    return (
        <main style={{ backgroundImage: `url(${background})`, height: 1000}}>
            <TopRibbon />
            <div class = "calendar-header">
                Calendar
            </div>
            <div class="calendar">
                <Calendar
                    localizer={localizer}
                    defaultDate={moment().toDate()}
                    startAccessor="start"
                    endAccessor="end"
                    style={{ height: 500 }}
                />
            </div>
        </main>
      );
    }
    
    export default CalendarView;