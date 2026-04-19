import React from 'react';
import '../App.css';

export function Header({ stadiums, selectedStadium, onStadiumChange }) {
  return (
    <div className="glass-panel header-section header-container" style={{ flexWrap: 'wrap', gap: '1rem' }}>
      <div>
        <h1>EventFlow Live Dashboard</h1>
        <p className="subtitle">Real-Time Venue Coordination System</p>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <select 
          className="premium-select" 
          style={{ width: 'auto', padding: '0.5rem 1rem' }}
          value={selectedStadium} 
          onChange={onStadiumChange}
        >
          {stadiums.map(s => (
            <option key={s.id} value={s.id}>{s.name}</option>
          ))}
        </select>
        <div className="status-badge">
          <span className="live-dot"></span> LIVE
        </div>
      </div>
    </div>
  );
}
