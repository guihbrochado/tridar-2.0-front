"use client"

import React, { useState } from 'react';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import './styles.css';
import { EventsDefault } from '@/utils/EventsCalendar/EventsDefault';

const localizer = momentLocalizer(moment);
const DragAndDropCalendar = withDragAndDrop(Calendar);

export default function CalendarPage() {
    const [events, setEvents] = useState(EventsDefault)

    const MovEvents = (data: any) => {
        const { start, end } = data;
        const updatedEvents = events.map((event) => {
            if (event.id === data.event.id) {
                return {
                    ...event,
                    start: new Date(start),
                    end: new Date(end)
                };
            }
            return event;
        });

        setEvents(updatedEvents)
    }

    return (
        <div>
            <DragAndDropCalendar
                defaultDate={moment().toDate()}
                // defaultView='month'
                events={events}
                localizer={localizer}
                resizable
                className='calendar'
                onEventDrop={MovEvents}
                onEventResize={MovEvents}

            />
        </div>
    );
}
