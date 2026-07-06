import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { ThemeSwitcher } from './ThemeSwitcher';
import { Compass, Calendar, Film, Rocket, User, LogOut, Award, ShieldAlert } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab }) => {
  const { user, isAuthenticated, logout } = useAuth();
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        <div className="logo" style={{ cursor: 'pointer' }} onClick={() => setActiveTab('dashboard')}>
          <Compass size={28} style={{ color: 'var(--accent-color)' }} />
          <span>COSMOS CLUB</span>
        </div>

        <ul className="nav-links">
          <li>
            <button
              className={`btn btn-secondary nav-link ${activeTab === 'dashboard' ? 'active' : ''}`}
              onClick={() => setActiveTab('dashboard')}
              style={{ display: 'flex', gap: '0.4rem', border: 'none' }}
            >
              <Compass size={16} /> Dashboard
            </button>
          </li>
          <li>
            <button
              className={`btn btn-secondary nav-link ${activeTab === 'calendar' ? 'active' : ''}`}
              onClick={() => setActiveTab('calendar')}
              style={{ display: 'flex', gap: '0.4rem', border: 'none' }}
            >
              <Calendar size={16} /> Calendar
            </button>
          </li>
          <li>
            <button
              className={`btn btn-secondary nav-link ${activeTab === 'missions' ? 'active' : ''}`}
              onClick={() => setActiveTab('missions')}
              style={{ display: 'flex', gap: '0.4rem', border: 'none' }}
            >
              <Rocket size={16} /> Missions
            </button>
          </li>
          <li>
            <button
              className={`btn btn-secondary nav-link ${activeTab === 'gallery' ? 'active' : ''}`}
              onClick={() => setActiveTab('gallery')}
              style={{ display: 'flex', gap: '0.4rem', border: 'none' }}
            >
              <Film size={16} /> Gallery
            </button>
          </li>
        </ul>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
          <ThemeSwitcher />

          {isAuthenticated && user ? (
            <div style={{ position: 'relative' }}>
              <button
                className="btn btn-secondary"
                onClick={() => setShowProfileDropdown(!showProfileDropdown)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.4rem 0.8rem',
                  border: '1px solid var(--border-color)',
                  borderRadius: '20px'
                }}
              >
                <User size={16} />
                <span>{user.username}</span>
                {user.badge !== 'None' && (
                  <Award size={16} style={{ color: 'var(--text-primary)' }} />
                )}
              </button>

              {showProfileDropdown && (
                <div style={{
                  position: 'absolute',
                  top: '120%',
                  right: 0,
                  width: '280px',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  borderRadius: 'var(--card-radius)',
                  boxShadow: 'var(--shadow-lg)',
                  padding: '1.2rem',
                  zIndex: 200,
                  textAlign: 'left'
                }}>
                  <div style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.8rem', marginBottom: '0.8rem' }}>
                    <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.2rem' }}>{user.username}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Member #{user.memberNumber}</div>
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '0.85rem', marginBottom: '1rem' }}>
                    <div><strong>Origin:</strong> {user.country}</div>
                    <div><strong>Age:</strong> {user.age} years</div>
                    <div><strong>Session Logins:</strong> {user.loginCount} times</div>
                  </div>

                  {user.badge !== 'None' && (
                    <div style={{ marginBottom: '1rem' }}>
                      <span className={`badge-display ${user.badge === 'Elite' ? 'badge-elite' : 'badge-supporter'}`}>
                        <Award size={14} /> {user.badge} Badge
                      </span>
                    </div>
                  )}

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.4rem',
                    backgroundColor: 'var(--bg-primary)',
                    borderRadius: '4px',
                    fontSize: '0.7rem',
                    color: 'var(--text-muted)',
                    marginBottom: '1rem',
                    border: '1px solid var(--border-color)'
                  }}>
                    <ShieldAlert size={16} style={{ color: 'var(--accent-color)' }} />
                    Local Privacy Shield Active
                  </div>

                  <button
                    onClick={() => {
                      logout();
                      setShowProfileDropdown(false);
                    }}
                    className="btn btn-primary"
                    style={{ width: '100%', padding: '0.4rem 0.8rem', fontSize: '0.85rem' }}
                  >
                    <LogOut size={14} /> Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <button
              className="btn btn-primary"
              onClick={() => setActiveTab('login')}
              style={{ padding: '0.4rem 1rem', borderRadius: '20px' }}
            >
              Sign In
            </button>
          )}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
