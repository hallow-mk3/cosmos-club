import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import EventCalendar from './components/EventCalendar';
import MissionTracker from './components/MissionTracker';
import PhotoGallery from './components/PhotoGallery';
import LoginForm from './components/LoginForm';
import { useAuth } from './context/AuthContext';
import { Shield } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState<string>('dashboard');
  const { isAuthenticated } = useAuth();

  // If the user logs in, redirect from login tab to dashboard
  useEffect(() => {
    if (isAuthenticated && activeTab === 'login') {
      setActiveTab('dashboard');
    }
  }, [isAuthenticated, activeTab]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main style={{ flex: 1, paddingBottom: '4rem' }} className="container">
        {activeTab === 'dashboard' && <Dashboard setActiveTab={setActiveTab} />}
        {activeTab === 'calendar' && <EventCalendar />}
        {activeTab === 'missions' && <MissionTracker />}
        {activeTab === 'gallery' && <PhotoGallery />}
        {activeTab === 'login' && <LoginForm />}
      </main>

      <footer style={{
        borderTop: '1px solid var(--border-color)',
        padding: '2.5rem 0',
        backgroundColor: 'var(--bg-secondary)',
        fontSize: '0.85rem',
        color: 'var(--text-secondary)',
        marginTop: 'auto'
      }}>
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
          <div>
            <strong>© 2026 Cosmos Club International.</strong> All rights reserved. 
            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>
              Registered 501(c)(3) Nonprofit organization for space education and public celestial telemetry sharing.
            </div>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
            <Shield size={16} style={{ color: 'var(--accent-color)' }} />
            <span>Absolute Client-Side Local Storage Privacy. Zero cookies or analytical trackers.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
