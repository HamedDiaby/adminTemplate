import React from "react";
import styles from './styles.module.css';
import { CalendarProps } from "./interfaces";

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

export const Calendar:React.FC<CalendarProps> = ({
    events
})=> {

    return (
        <>
            <FullCalendar
                locale='fr-FR'
                plugins={[ dayGridPlugin, timeGridPlugin, listPlugin ]}
                initialView="dayGridMonth"
                slotMinTime="05:00:00"
                slotMaxTime="24:00:00"
                headerToolbar={
                    {
                        left: 'prev,next today',
                        center: 'title',
                        right: 'dayGridMonth,timeGridWeek,listWeek',
                    }
                }
                events={events}
            />
        </>
    )
}