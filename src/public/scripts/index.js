import { Calendar } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import listPlugin from '@fullcalendar/list';
import customThemePlugin from './customtheme/main';
import allLocales from '@fullcalendar/core/locales-all';


/* Include styles */
import calendarStyle from '@fullcalendar/core/main.css';
import calendarListStyle from '@fullcalendar/list/main.css';
import customStyle from './customtheme/main.scss';

var me = document.currentScript;
const el = document.createElement("div");

me.parentNode.insertBefore(el, me.nextSibling);

var calendarId = me.getAttribute("googlecalendarid");
var apiKey = me.getAttribute("googlecalendarapikey");
var locale = me.getAttribute("locale") || "en";

const calendar = new Calendar(el, 
  { 
    header: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,listMonth'
    },
    plugins: [ dayGridPlugin, googleCalendarPlugin, listPlugin, customThemePlugin ],
    defaultView: 'dayGridMonth',
    googleCalendarApiKey: apiKey,
    locale: locale,
    locales: allLocales,
    themeSystem: "custom",
    events: {
      googleCalendarId: calendarId 
    }
  }
);
calendar.render();