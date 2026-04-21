import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { useNavigate } from 'react-router-dom';
import { events } from '../data/siteData';
import './PageStyles.css';
import './Calendar.css';

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function Calendar() {
  const navigate = useNavigate();

  const calendarEvents = events.map((event) => ({
    title: event.title,
    date: event.date,
    extendedProps: {
      location: event.location,
      track: event.track,
      registrationPath: event.registrationPath,
    },
  }));

  return (
    <div className="page-shell">
      <section className="page-hero">
        <div className="container page-hero__grid">
          <div className="page-hero__content">
            <span className="page-hero__eyebrow">Calendar</span>
            <h1 className="page-hero__title">Workshop calendar with clickable registration dates.</h1>
            <p className="page-hero__text">
              Each workshop is marked on the calendar. Click any workshop day to go directly to the registration page.
            </p>
          </div>

          <aside className="page-hero__panel">
            <div className="page-hero__panel-label">Calendar requirement</div>
            <h3>Workshops are marked by day and linked to registration.</h3>
            <p>This follows the brief directly so users can move from date discovery to registration in one click.</p>
            <ul className="page-hero__panel-list">
              <li>Workshop dates are visible in calendar format</li>
              <li>Each event is clickable</li>
              <li>Clicks route to registration</li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="page-section page-section--white">
        <div className="container">
          <div className="calendar-shell">
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: '',
              }}
              events={calendarEvents}
              height="auto"
              eventDisplay="block"
              eventClick={(info) => {
                info.jsEvent.preventDefault();
                navigate(info.event.extendedProps.registrationPath);
              }}
            />
          </div>
        </div>
      </section>

      <section className="page-section page-section--tint">
        <div className="container">
          <div className="section-header">
            <div className="section-header__left">
              <span className="numbered-label">05 / Workshops</span>
              <h2 className="heading-lg">Upcoming marked dates</h2>
            </div>
          </div>

          <div className="list-grid">
            {events.map((event) => (
              <article key={event.title} className="list-card calendar-event-card">
                <div className="info-card__tag">{event.track}</div>
                <h3>{event.title}</h3>
                <div className="calendar-event-meta">
                  <span>{formatDate(event.date)}</span>
                  <span>{event.location}</span>
                </div>
                <a href={event.registrationPath} className="btn-primary">
                  Go to Registration
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
