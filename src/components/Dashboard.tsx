import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Users, Award, ShieldCheck, ArrowRight, Activity } from 'lucide-react';

interface DashboardProps {
  setActiveTab: (tab: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ setActiveTab }) => {
  const { user, isAuthenticated, totalMembers } = useAuth();

  return (
    <div>
      {/* Hero Header */}
      <section className="hero">
        <div className="container">
          <span className="hero-subtitle">Est. 2026 / Non-Profit Scientific Alliance</span>
          <h1 className="hero-title">Cosmic Knowledge Open to Humanity</h1>
          <p className="hero-description">
            Democratizing space exploration schedules, telemetry data, and deep sky imagery for students, researchers, and universities globally.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <button className="btn btn-primary" onClick={() => setActiveTab('gallery')}>
              Explore Gallery <ArrowRight size={16} />
            </button>
            <button className="btn btn-secondary" onClick={() => setActiveTab('calendar')}>
              View Cosmic Calendar
            </button>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section style={{ padding: '3rem 0', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="grid-cols-4">
            <div className="card" style={{ padding: '1.2rem', textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', color: 'var(--accent-color)', marginBottom: '0.4rem' }}>
                <Users size={24} />
              </div>
              <div style={{ fontSize: '1.8rem', fontWeight: 700, fontFamily: 'var(--font-sans)', color: 'var(--text-primary)' }}>
                {totalMembers}
              </div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>
                Active Fellows
              </div>
            </div>

            <div className="card" style={{ padding: '1.2rem', textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', color: 'var(--accent-color)', marginBottom: '0.4rem' }}>
                <Activity size={24} />
              </div>
              <div style={{ fontSize: '1.8rem', fontWeight: 700, fontFamily: 'var(--font-sans)' }}>5</div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>
                Agencies Monitored
              </div>
            </div>

            <div className="card" style={{ padding: '1.2rem', textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', color: 'var(--accent-color)', marginBottom: '0.4rem' }}>
                <Award size={24} />
              </div>
              <div style={{ fontSize: '1.8rem', fontWeight: 700, fontFamily: 'var(--font-sans)' }}>100</div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>
                Elite Badge Cap
              </div>
            </div>

            <div className="card" style={{ padding: '1.2rem', textAlign: 'center' }}>
              <div style={{ display: 'flex', justifyContent: 'center', color: 'var(--accent-color)', marginBottom: '0.4rem' }}>
                <ShieldCheck size={24} />
              </div>
              <div style={{ fontSize: '1.8rem', fontWeight: 700, fontFamily: 'var(--font-sans)' }}>100%</div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--text-muted)' }}>
                Privacy Secure
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intro details with Callouts */}
      <section style={{ padding: '4rem 0' }}>
        <div className="container">
          <div className="grid-cols-2" style={{ textAlign: 'left', alignItems: 'center' }}>
            <div>
              <h2 style={{ fontSize: '2.2rem', fontFamily: 'var(--font-serif)', marginBottom: '1.5rem', lineHeight: '1.2' }}>
                Dedicated to Academic Inquiry & Research
              </h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.2rem', fontSize: '1rem', lineHeight: '1.7' }}>
                The Cosmos Club operates as a global, independent nonprofit organization. We assemble live telemetry schedules, publish planetary archives, and coordinate research collaborations with Ivy League institutes, MIT, Stanford, and international space researchers.
              </p>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                Our privacy-first architecture guarantees zero tracking. No analytical engines, cloud server uploads, or telemetry processors handle user details.
              </p>
              
              {!isAuthenticated ? (
                <button className="btn btn-primary" onClick={() => setActiveTab('login')}>
                  Register Member Profile
                </button>
              ) : (
                <div style={{
                  padding: '1rem',
                  border: '1px solid var(--border-color)',
                  backgroundColor: 'var(--bg-secondary)',
                  borderRadius: 'var(--card-radius)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.8rem'
                }}>
                  <Award size={24} style={{ color: user?.badge === 'Elite' ? '#ffd700' : '#c0c0c0' }} />
                  <div>
                    <div style={{ fontWeight: 600, fontSize: '0.9rem' }}>Welcome Back, {user?.username}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      Membership badge status: <strong>{user?.badge} Member</strong> (Registry #{user?.memberNumber})
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div>
              <div className="card" style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.3rem', fontFamily: 'var(--font-sans)', marginBottom: '1rem' }}>Latest Announcements</h3>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', listStyle: 'none' }}>
                  <li style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.8rem' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>JULY 20, 2026</div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.3rem' }}>Euclid Telescope Collaboration</h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Cosmos Club has partnered with the Euclid consortium to expose dark energy data grids.</p>
                  </li>
                  <li style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.8rem' }}>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>JULY 15, 2026</div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.3rem' }}>Gaganyaan-1 Telemetry Feed</h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Pre-launch parameters for ISRO crewed flight program have been synchronized.</p>
                  </li>
                  <li>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.2rem' }}>JULY 02, 2026</div>
                    <h4 style={{ fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.3rem' }}>Weekly Catalog Growth Program</h4>
                    <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>Automatic update scheduler deployed to add 20+ cosmic images every Monday.</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Dashboard;
