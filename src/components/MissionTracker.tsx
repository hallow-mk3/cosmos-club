import React, { useState, useEffect } from 'react';
import { spaceMissions, type SpaceMission } from '../data/spaceData';
import { Rocket, Timer, MapPin, Layers, Calendar } from 'lucide-react';

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const MissionCard: React.FC<{ mission: SpaceMission }> = ({ mission }) => {
  const [timeLeft, setTimeLeft] = useState<Countdown>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isPast, setIsPast] = useState(false);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(mission.launchDate) - +new Date();
      if (difference <= 0) {
        setIsPast(true);
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    };

    calculateTimeLeft();
    const interval = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(interval);
  }, [mission.launchDate]);

  return (
    <div className="card" style={{ height: '100%', justifyContent: 'space-between' }}>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.8rem' }}>
          <span style={{
            fontSize: '0.75rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            padding: '0.2rem 0.6rem',
            backgroundColor: 'var(--bg-tertiary)',
            borderRadius: '4px',
            color: 'var(--text-primary)'
          }}>
            {mission.agency}
          </span>
          <span style={{
            fontSize: '0.75rem',
            fontWeight: 600,
            color: mission.status === 'Active' ? '#2b8f67' : mission.status === 'Delayed' ? '#c2612b' : 'var(--text-muted)'
          }}>
            ● {mission.status}
          </span>
        </div>

        <h3 style={{ fontSize: '1.4rem', marginBottom: '0.8rem', fontFamily: 'var(--font-serif)' }}>{mission.name}</h3>
        <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', marginBottom: '1.2rem' }}>{mission.description}</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.8rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Layers size={14} />
            <span><strong>Payload:</strong> {mission.payload}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <MapPin size={14} />
            <span><strong>Launch Site:</strong> {mission.site}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Calendar size={14} />
            <span><strong>Target Orbit:</strong> {mission.orbit}</span>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
          <Timer size={14} /> Countdown to Launch
        </div>
        {isPast ? (
          <div style={{ fontWeight: 700, color: 'var(--text-secondary)', fontSize: '1.1rem' }}>Mission In Progress / Completed</div>
        ) : (
          <div className="countdown-grid">
            <div className="countdown-box">
              <span className="countdown-num">{timeLeft.days}</span>
              <span className="countdown-lbl">Days</span>
            </div>
            <div className="countdown-box">
              <span className="countdown-num">{timeLeft.hours}</span>
              <span className="countdown-lbl">Hrs</span>
            </div>
            <div className="countdown-box">
              <span className="countdown-num">{timeLeft.minutes}</span>
              <span className="countdown-lbl">Min</span>
            </div>
            <div className="countdown-box">
              <span className="countdown-num">{timeLeft.seconds}</span>
              <span className="countdown-lbl">Sec</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export const MissionTracker: React.FC = () => {
  const [filterAgency, setFilterAgency] = useState<string>('All');
  const agencies = ['All', 'NASA', 'ISRO', 'SpaceX', 'ESA', 'JAXA'];

  const filteredMissions = filterAgency === 'All' 
    ? spaceMissions 
    : spaceMissions.filter(m => m.agency === filterAgency);

  return (
    <div style={{ padding: '3rem 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', borderBottom: '1px solid var(--border-color)', paddingBottom: '1.5rem', marginBottom: '2rem' }}>
        <div>
          <h2 style={{ fontSize: '2.5rem', fontFamily: 'var(--font-serif)' }}>Mission Control</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Live telemetry and schedule of official global space agencies.</p>
        </div>
        
        {/* Filters */}
        <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.2rem' }}>
          {agencies.map(agency => (
            <button
              key={agency}
              onClick={() => setFilterAgency(agency)}
              className={`btn ${filterAgency === agency ? 'btn-primary' : 'btn-secondary'}`}
              style={{ fontSize: '0.8rem', padding: '0.4rem 0.8rem', borderRadius: '15px' }}
            >
              {agency}
            </button>
          ))}
        </div>
      </div>

      <div className="grid-cols-2">
        {filteredMissions.map(mission => (
          <MissionCard key={mission.id} mission={mission} />
        ))}
      </div>

      {filteredMissions.length === 0 && (
        <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-muted)' }}>
          <Rocket size={48} style={{ strokeWidth: 1, marginBottom: '1rem', color: 'var(--border-color)' }} />
          <div>No missions scheduled for the selected agency filter.</div>
        </div>
      )}
    </div>
  );
};
export default MissionTracker;
