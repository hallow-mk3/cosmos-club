import React, { useState } from 'react';
import { calendarEvents, type CalendarEvent } from '../data/spaceData';
import { Calendar, ChevronLeft, ChevronRight, Info, MapPin } from 'lucide-react';

export const EventCalendar: React.FC = () => {
  const [currentYear, setCurrentYear] = useState(2026);
  const [currentMonth, setCurrentMonth] = useState(7); // 0-indexed, so 7 is August
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(calendarEvents[0]);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const daysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const startDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };

  const handlePrevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  const handleNextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  const renderDays = () => {
    const totalDays = daysInMonth(currentYear, currentMonth);
    const startDay = startDayOfMonth(currentYear, currentMonth);
    const cells = [];

    // Fill empty cells for previous month
    for (let i = 0; i < startDay; i++) {
      cells.push(<div key={`prev-${i}`} className="calendar-cell different-month"></div>);
    }

    // Fill actual month days
    for (let day = 1; day <= totalDays; day++) {
      const dateString = `${currentYear}-${String(currentMonth + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
      const dayEvents = calendarEvents.filter(e => e.date === dateString);

      cells.push(
        <div 
          key={`day-${day}`} 
          className={`calendar-cell ${dayEvents.length > 0 ? 'has-events' : ''}`}
          onClick={() => {
            if (dayEvents.length > 0) {
              setSelectedEvent(dayEvents[0]);
            }
          }}
        >
          <div className="calendar-date-number">{day}</div>
          <div className="calendar-events-container">
            {dayEvents.map(e => (
              <span 
                key={e.id} 
                className={`calendar-event-tag event-${e.type}`}
                title={e.title}
              >
                {e.title}
              </span>
            ))}
          </div>
        </div>
      );
    }

    return cells;
  };

  const dayLabels = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div style={{ padding: '3rem 0' }}>
      <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '1.5rem', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)' }}>Cosmic Calendar</h2>
        <p style={{ color: 'var(--text-secondary)' }}>Track celestial observations, rocket launches, and expert colloquiums.</p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr', gap: '2rem' }}>
        {/* Calendar Grid Column */}
        <div>
          <div className="calendar-view">
            <div className="calendar-header">
              <h3 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-sans)' }}>
                {monthNames[currentMonth]} {currentYear}
              </h3>
              <div style={{ display: 'flex', gap: '0.4rem' }}>
                <button className="btn btn-secondary" onClick={handlePrevMonth} style={{ padding: '0.3rem 0.6rem' }}>
                  <ChevronLeft size={16} />
                </button>
                <button className="btn btn-secondary" onClick={handleNextMonth} style={{ padding: '0.3rem 0.6rem' }}>
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>

            <div className="calendar-grid" style={{ marginBottom: '0.5rem' }}>
              {dayLabels.map(label => (
                <div key={label} className="calendar-day-label">{label}</div>
              ))}
            </div>

            <div className="calendar-grid">
              {renderDays()}
            </div>
          </div>

          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', justifyContent: 'center', fontSize: '0.85rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ display: 'inline-block', width: '12px', height: '12px', borderRadius: '3px', backgroundColor: '#2b5c8f' }}></span>
              <span>Celestial Event</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ display: 'inline-block', width: '12px', height: '12px', borderRadius: '3px', backgroundColor: '#c2612b' }}></span>
              <span>Space Launch</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <span style={{ display: 'inline-block', width: '12px', height: '12px', borderRadius: '3px', backgroundColor: '#2b8f67' }}></span>
              <span>Lecture / Webinar</span>
            </div>
          </div>
        </div>

        {/* Selected Event Detail Column */}
        <div>
          <div className="card" style={{ height: '100%', minHeight: '350px', justifyContent: 'space-between' }}>
            {selectedEvent ? (
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--accent-color)', fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.8rem' }}>
                  <Info size={16} /> Event Spotlight
                </div>
                <h3 style={{ fontSize: '1.6rem', fontFamily: 'var(--font-serif)', marginBottom: '1rem' }}>{selectedEvent.title}</h3>
                
                <div style={{ fontSize: '0.9rem', marginBottom: '1rem' }}>
                  <strong>Date:</strong> {selectedEvent.date}
                </div>

                {selectedEvent.location && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
                    <MapPin size={16} />
                    <span>{selectedEvent.location}</span>
                  </div>
                )}

                <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.6' }}>
                  {selectedEvent.description}
                </p>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'var(--text-muted)' }}>
                <Calendar size={48} style={{ strokeWidth: 1, marginBottom: '1rem' }} />
                <div>Select an highlighted date to view event details.</div>
              </div>
            )}

            <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1.2rem', marginTop: '1.5rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
              Astronomy Club nonprofit educational initiatives are open-source and free for students and academics worldwide.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EventCalendar;
