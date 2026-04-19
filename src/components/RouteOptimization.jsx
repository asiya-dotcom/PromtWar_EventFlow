import React, { useState } from 'react';

export function RouteOptimization({ zones }) {
  const [destination, setDestination] = useState('');
  
  const handleSelect = (e) => {
    setDestination(e.target.value);
  };

  const getBestRoute = () => {
    if (!destination) return null;
    const destZone = zones.find(z => z.id === destination);
    
    // Mocking route logic based on density
    if (destZone.density === 'Low') {
      return { path: `Direct path to ${destZone.name} is clear.`, color: 'var(--density-low)' };
    } else if (destZone.density === 'Medium') {
      return { path: `Slight crowd near ${destZone.name}. Use Alternative Route B.`, color: 'var(--density-medium)' };
    } else {
      return { path: `Heavy congestion at ${destZone.name}. Please wait or use Alternative Route C.`, color: 'var(--density-high)' };
    }
  };

  const route = getBestRoute();

  return (
    <div className="glass-panel route-section">
      <h2>🗺️ Route Optimization</h2>
      <div className="route-controls">
        <label htmlFor="destination-select">Select Destination:</label>
        <select id="destination-select" value={destination} onChange={handleSelect} className="premium-select">
          <option value="">-- Choose a location --</option>
          {zones.map(z => (
            <option key={z.id} value={z.id}>{z.name} ({z.type})</option>
          ))}
        </select>
      </div>

      {route && (
        <div className="route-result" style={{ borderLeftColor: route.color }}>
          <h4>Suggested Route:</h4>
          <p style={{ color: route.color }}>{route.path}</p>
        </div>
      )}
    </div>
  );
}
