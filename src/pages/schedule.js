import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from 'react-bootstrap';
import Navbaring from '../Components/Nav';
import './schedule.css';

const Schedule = () => {
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        // 1. Fetch all events
        const response = await axios.get('https://ieeeweek2025.onrender.com/api/events');
        const events = response.data;

        // 2. Group events by date
        const groupedByDate = events.reduce((acc, event) => {
          const date = event.date;
          if (!acc[date]) {
            acc[date] = {
              date,
              events: []
            };
          }
          acc[date].events.push(event);
          return acc;
        }, {});

        // 3. Convert to array and sort by date
        const schedule = Object.values(groupedByDate)
          .map(day => ({
            ...day,
            events: day.events.sort((a, b) => a.time.localeCompare(b.time))
          }))
          .sort((a, b) => new Date(a.date) - new Date(b.date));

        setSchedule(schedule);
      } catch (error) {
        console.error('Error fetching schedule:', error);
        setSchedule([]); // Ensure schedule is always an array
      } finally {
        setLoading(false);
      }
    };

    fetchSchedule();
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <>
      <Navbaring />
      <div className="futuristic-timeline">
        <div className="timeline-line"></div>
        
        <div className="schedule-header text-center mb-5" style={{ padding: '0 20px' }}>
          <h1 className="display-4 fw-bold" style={{ 
            color: '#00f7ff',
            textShadow: '0 0 10px rgba(0, 247, 255, 0.5)',
            letterSpacing: '2px'
          }}>
            EVENT TIMELINE
          </h1>
          <p style={{ 
            color: '#a0a0a0',
            fontSize: '1.1rem',
            maxWidth: '700px',
            margin: '0 auto'
          }}>
            Explore the cutting-edge events we've curated for an unforgettable experience
          </p>
        </div>

        {schedule.length > 0 ? (
          schedule.map((day, dayIndex) => (
            <div 
              key={day.date} 
              className={`timeline-item ${dayIndex % 2 === 0 ? 'left' : 'right'}`}
              style={{ top: `${dayIndex * 40}px` }}
            >
              <div className="timeline-node" style={{ top: '40px' }}></div>
              <div className="timeline-card">
                <div className="day-header">
                  {new Date(day.date).toLocaleDateString('en-US', { 
                    weekday: 'short', 
                    month: 'short', 
                    day: 'numeric' 
                  })}
                </div>
                
                {day.events.map((event, eventIndex) => (
                  <div key={`${day.date}-${eventIndex}`} className="event-item">
                    <div className="event-time">
                      <i className="bi bi-clock me-1"></i>
                      {event.time}
                    </div>
                    <h3 className="event-title">{event.title}</h3>
                    <div className="event-location">
                      <i className="bi bi-geo-alt-fill me-2"></i>
                      {event.location}
                    </div>
                    <a 
                      href={event.registrationForm} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="register-btn"
                    >
                      <i className="bi bi-box-arrow-up-right"></i>
                      Register Now
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-5" style={{ color: '#a0a0a0' }}>
            <p>No events scheduled yet. Please check back later.</p>
          </div>
        )}
      </div>
    </>
  );
};

export default Schedule;