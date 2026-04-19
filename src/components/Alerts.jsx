import React from 'react';

export function Alerts({ alerts }) {
  return (
    <div className="glass-panel alerts-section">
      <h2>🚨 Live Alerts</h2>
      <div className="alerts-list">
        {alerts.map((alert) => (
          <div key={alert.id} className={`alert-card alert-${alert.type}`}>
            <span className="alert-time">{alert.time}</span>
            <p className="alert-message">{alert.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
