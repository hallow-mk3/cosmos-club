import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { Shield, Sparkles, LogIn } from 'lucide-react';

export const LoginForm: React.FC = () => {
  const { login, googleLogin } = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [country, setCountry] = useState('');
  const [age, setAge] = useState<number | ''>('');
  const [error, setError] = useState('');
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!username.trim()) {
      setError('Username is required.');
      return;
    }
    if (!password.trim() || password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }
    if (!country.trim()) {
      setError('Please select/enter your country.');
      return;
    }
    if (!age || age < 13 || age > 120) {
      setError('Please enter a valid age (13 - 120).');
      return;
    }

    login(username, country, Number(age));
  };

  const handleGoogleOAuthSimulate = () => {
    setIsGoogleLoading(true);
    setError('');
    // Simulate a secure Google OAuth pop-up flow
    setTimeout(() => {
      googleLogin();
      setIsGoogleLoading(false);
    }, 1500);
  };

  return (
    <div className="auth-container" style={{ marginInline: 'auto' }}>
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <h2 style={{ fontSize: '1.8rem', marginBottom: '0.5rem' }}>Access Cosmos Registry</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
          Connect with international astrophysicists, researchers, and space enthusiasts.
        </p>
      </div>

      {error && (
        <div style={{
          backgroundColor: 'rgba(239, 68, 68, 0.1)',
          border: '1px solid rgba(239, 68, 68, 0.3)',
          color: '#ef4444',
          padding: '0.75rem',
          borderRadius: 'var(--card-radius)',
          fontSize: '0.85rem',
          marginBottom: '1rem',
          textAlign: 'left'
        }}>
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g. j_kepler"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '1rem' }}>
          <div className="form-group">
            <label>Country</label>
            <input
              type="text"
              className="form-control"
              placeholder="e.g. Germany"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Age</label>
            <input
              type="number"
              className="form-control"
              placeholder="e.g. 28"
              value={age}
              onChange={(e) => setAge(e.target.value === '' ? '' : Number(e.target.value))}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '1rem' }}>
          <LogIn size={16} /> Sign In / Register
        </button>
      </form>

      <div style={{ position: 'relative', margin: '2rem 0', textAlign: 'center' }}>
        <hr style={{ border: 'none', borderTop: '1px solid var(--border-color)' }} />
        <span style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'var(--bg-secondary)',
          padding: '0 0.8rem',
          fontSize: '0.8rem',
          color: 'var(--text-muted)'
        }}>OR</span>
      </div>

      <button
        onClick={handleGoogleOAuthSimulate}
        className="btn btn-secondary"
        style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '0.6rem' }}
        disabled={isGoogleLoading}
      >
        <Sparkles size={16} />
        {isGoogleLoading ? 'Initiating Secure Google OAuth...' : 'Continue with Google Account'}
      </button>

      <div style={{
        marginTop: '2rem',
        padding: '0.8rem',
        border: '1px dashed var(--border-color)',
        borderRadius: 'var(--card-radius)',
        display: 'flex',
        gap: '0.6rem',
        alignItems: 'flex-start',
        backgroundColor: 'var(--bg-primary)'
      }}>
        <Shield size={24} style={{ color: 'var(--accent-color)', flexShrink: 0 }} />
        <div style={{ textAlign: 'left', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
          <strong>Academic & Investor Privacy Shield:</strong> All registration data and session activity are encrypted locally inside your browser\'s sandbox. We do not track, collect, or upload your data to any centralized database.
        </div>
      </div>
    </div>
  );
};
export default LoginForm;
