import { Link, useNavigate } from 'react-router-dom';

function Navbar({ onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <nav style={navStyle}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
        <span style={{ fontSize: 28, fontWeight: 900, color: '#fff', letterSpacing: 2, textShadow: '0 2px 8px #90caf9' }}>🦜 EventNest</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 28 }}>
        <Link
          to="/"
          style={linkStyle}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'linear-gradient(90deg,#fffde7,#bbdefb)';
            e.currentTarget.style.color = '#1976d2';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = '';
            e.currentTarget.style.color = 'white';
          }}
        >Home</Link>
        <Link
          to="/events"
          style={linkStyle}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'linear-gradient(90deg,#fffde7,#bbdefb)';
            e.currentTarget.style.color = '#1976d2';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = '';
            e.currentTarget.style.color = 'white';
          }}
        >Events</Link>
        <Link
          to="/health"
          style={linkStyle}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'linear-gradient(90deg,#fffde7,#bbdefb)';
            e.currentTarget.style.color = '#1976d2';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = '';
            e.currentTarget.style.color = 'white';
          }}
        >Health Tracker</Link>
        <Link
          to="/personal-growth"
          style={linkStyle}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'linear-gradient(90deg,#fffde7,#bbdefb)';
            e.currentTarget.style.color = '#1976d2';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = '';
            e.currentTarget.style.color = 'white';
          }}
        >Personal Growth</Link>
        <Link
          to="/guests"
          style={linkStyle}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'linear-gradient(90deg,#fffde7,#bbdefb)';
            e.currentTarget.style.color = '#1976d2';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = '';
            e.currentTarget.style.color = 'white';
          }}
        >Guest List</Link>
        <button
          onClick={handleLogout}
          style={buttonStyle}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'linear-gradient(90deg,#ff8a65,#ffd180)';
            e.currentTarget.style.color = '#fff';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'linear-gradient(90deg,#ff1744,#ff8a65)';
            e.currentTarget.style.color = 'white';
          }}
        >Logout</button>
      </div>
    </nav>
  );
}

const navStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '1.2rem 3vw',
  background: 'linear-gradient(90deg, #1976d2 0%, #00bcd4 100%)',
  boxShadow: '0 2px 16px #b9f6ca',
  position: 'sticky',
  top: 0,
  zIndex: 100,
};

const linkStyle = {
  color: 'white',
  textDecoration: 'none',
  fontSize: '1.1rem',
  fontWeight: 700,
  padding: '8px 18px',
  borderRadius: 8,
  transition: 'background 0.2s, color 0.2s',
  margin: '0 2px',
  boxShadow: '0 1px 6px #bbdefb',
};

const buttonStyle = {
  padding: '8px 22px',
  fontSize: '1.1rem',
  borderRadius: 8,
  border: 'none',
  background: 'linear-gradient(90deg,#ff1744,#ff8a65)',
  color: 'white',
  fontWeight: 700,
  cursor: 'pointer',
  boxShadow: '0 1px 6px #ffcdd2',
  marginLeft: 8,
  transition: 'background 0.2s',
};

export default Navbar;
