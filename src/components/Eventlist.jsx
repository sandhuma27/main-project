import Navbar from './Navbar';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function EventList({ onLogout }) {
  const [events, setEvents] = useState([
    { id: '1', title: 'Birthday Celebration', date: '', description: '' },
    { id: '2', title: 'Wellness Workshop', date: '', description: '' },
    { id: '3', title: 'Meditation Session', date: '', description: '' },
  ]);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const eventIcons = [
    '🎉',
    '💪', 
    '🧘‍♂️', 
    '🎤',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEvent = {
      id: Date.now().toString(),
      title,
      date,
      description,
    };
    setEvents([newEvent, ...events]);
    setTitle('');
    setDate('');
    setDescription('');
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2000);
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #e3f2fd 0%, #fce4ec 100%)', padding: '0 0 48px 0' }}>
      <Navbar onLogout={onLogout} />
      <div
        style={{
          maxWidth: 700,
          margin: '40px auto',
          background: 'linear-gradient(135deg, #fffde7 0%, #e3f2fd 100%)',
          borderRadius: 22,
          boxShadow: '0 2px 8px #b3c6e0',
          padding: '36px 16px',
          border: '2px solid #1976d2',
          width: '95vw',
        }}
      >
        <h2
          style={{
            fontSize: 'clamp(22px, 6vw, 32px)',
            fontWeight: 800,
            color: '#0d47a1',
            letterSpacing: 1,
            marginBottom: 28,
            textAlign: 'center',
          }}
        >
          Upcoming Events
        </h2>

      
        <form
          onSubmit={handleSubmit}
          style={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: 400,
            width: '100%',
            margin: '0 auto 32px auto',
            background: '#f5faff',
            borderRadius: 12,
            padding: 18,
            boxShadow: '0 1px 8px #e3eafc',
          }}
        >
          <h3 style={{ color: '#1976d2', fontWeight: 700, marginBottom: 12 }}>Add New Event</h3>
          <input
            type="text"
            placeholder="Event Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={{ marginBottom: '1rem', padding: '0.75rem', fontSize: '1rem', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            style={{ marginBottom: '1rem', padding: '0.75rem', fontSize: '1rem', borderRadius: '5px', border: '1px solid #ccc' }}
          />
          <textarea
            placeholder="Event Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            style={{ marginBottom: '1rem', padding: '0.75rem', fontSize: '1rem', borderRadius: '5px', border: '1px solid #ccc', height: '100px' }}
          />
          <button type="submit" style={{ padding: '0.75rem', fontSize: '1rem', borderRadius: '5px', border: 'none', backgroundColor: '#007BFF', color: 'white', cursor: 'pointer' }}>Add Event</button>
          {submitted && <p style={{ color: 'green', marginTop: 10 }}>Event added successfully!</p>}
        </form>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 28,
          }}
        >
          {events.map((event, idx) => (
            <div
              key={event.id}
              className="event-card"
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                background: 'linear-gradient(90deg, #e3f2fd 60%, #bbdefb 100%)',
                borderRadius: 16,
                boxShadow: '0 1px 4px #b3c6e0',
                padding: '18px 10px',
                transition: 'transform 0.2s, box-shadow 0.2s, border 0.2s',
                border: '1.5px solid #1976d2',
                gap: 16,
                cursor: 'pointer',
                flexWrap: 'wrap',
                minWidth: 0,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-4px) scale(1.025)';
                e.currentTarget.style.boxShadow = '0 4px 16px #90caf9';
                e.currentTarget.style.border = '2.5px solid #7c3aed';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'none';
                e.currentTarget.style.boxShadow = '0 1px 4px #b3c6e0';
                e.currentTarget.style.border = '1.5px solid #1976d2';
              }}
            >
              <span style={{ fontSize: 'clamp(24px, 6vw, 38px)', marginRight: 12 }}>{eventIcons[idx] || eventIcons[3]}</span>
              <div style={{ flex: 1, minWidth: 0 }}>
                <Link
                  to={`/events/${event.id}`}
                  style={{
                    textDecoration: 'none',
                    color: '#1976d2',
                    fontWeight: 700,
                    fontSize: 'clamp(16px, 4vw, 22px)',
                    letterSpacing: 0.5,
                    transition: 'color 0.2s',
                    wordBreak: 'break-word',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#7c3aed')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#1976d2')}
                >
                  {event.title}
                </Link>
                <div style={{ color: '#607d8b', fontSize: 'clamp(13px, 3vw, 15px)', marginTop: 4, wordBreak: 'break-word' }}>{event.date && <>Date: {event.date} <br /></>}{event.description}</div>
              </div>
              <span style={{ fontSize: 'clamp(13px, 3vw, 18px)', color: '#43a047', fontWeight: 700, background: '#e8f5e9', borderRadius: 8, padding: '6px 12px', boxShadow: '0 1px 6px #b9f6ca', marginTop: 8 }}>Active</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default EventList;
