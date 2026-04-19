import React from 'react';

export function WaitTimes({ zones }) {
  // Simple heuristic: Low -> 0-5 mins, Medium -> 10-20 mins, High -> 25-45 mins
  const calculateWaitTime = (density) => {
    switch (density) {
      case 'Low': return Math.floor(Math.random() * 5) + 1;
      case 'Medium': return Math.floor(Math.random() * 10) + 10;
      case 'High': return Math.floor(Math.random() * 20) + 25;
      default: return 0;
    }
  };

  const facilities = zones.filter(z => ['Gate', 'Food', 'Washroom'].includes(z.type));

  return (
    <div className="glass-panel wait-section">
      <h2>⏳ Wait Times</h2>
      <div className="wait-list">
        {facilities.map((facility) => {
          const waitMins = calculateWaitTime(facility.density);
          let color = 'var(--density-low)';
          if (waitMins > 10) color = 'var(--density-medium)';
          if (waitMins > 20) color = 'var(--density-high)';

          return (
            <div key={`wait-${facility.id}`} className="wait-item">
              <div className="wait-info">
                <span className="wait-name">{facility.name}</span>
                <span className="wait-type">{facility.type}</span>
              </div>
              <div className="wait-time" style={{ color }}>
                {waitMins} min
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
