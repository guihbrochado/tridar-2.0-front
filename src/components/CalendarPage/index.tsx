"use client"

import React from 'react';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './styles.css';

const localizer = momentLocalizer(moment);
const DragAndDropCalendar = withDragAndDrop(Calendar);

const myEventsList = [
    {
        title: 'Sample Event',
        start: new Date(),
        end: new Date(),
    },
];

export default function CalendarPage() {
    return (
        <div>
            <DragAndDropCalendar
                defaultDate={moment().toDate()}
                defaultView='month'
                events={[{}]}
                localizer={localizer}
                resizable
                className='calendar'
            />
        </div>
    );
};