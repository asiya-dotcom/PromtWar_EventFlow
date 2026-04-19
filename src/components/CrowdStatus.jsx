import React from 'react';

export function CrowdStatus({ zones }) {
  const getDensityColor = (density) => {
    switch (density) {
      case 'Low': return 'var(--density-low)';
      case 'Medium': return 'var(--density-medium)';
      case 'High': return 'var(--density-high)';
      default: return 'var(--text-secondary)';
    }
  };

  return (
    <div className="glass-panel crowd-section">
      <h2>👥 Crowd Movement</h2>
      <div className="zone-grid">
        {zones.map((zone) => (
          <div key={zone.id} className="zone-card">
            <div className="zone-info">
              <span className="zone-type">{zone.type}</span>
              <span className="zone-name">{zone.name}</span>
            </div>
            <div className="density-indicator" style={{ backgroundColor: `${getDensityColor(zone.density)}20`, border: `1px solid ${getDensityColor(zone.density)}` }}>
              <span className="density-dot" style={{ backgroundColor: getDensityColor(zone.density) }}></span>
              {zone.density}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
