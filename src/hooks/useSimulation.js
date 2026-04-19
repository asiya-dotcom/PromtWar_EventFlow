import { useState, useEffect } from 'react';

export const STADIUMS = [
  { id: 'chinnaswamy', name: 'M. Chinnaswamy Stadium, Bengaluru' },
  { id: 'wankhede', name: 'Wankhede Stadium, Mumbai' },
  { id: 'narendra', name: 'Narendra Modi Stadium, Ahmedabad' }
];

const STADIUM_ZONES = {
  chinnaswamy: [
    { id: 'gate-n', name: 'North Gate (Cubbon Park)', type: 'Gate', density: 'Low' },
    { id: 'gate-s', name: 'South Gate (Queens Rd)', type: 'Gate', density: 'Medium' },
    { id: 'seat-p', name: 'Pavilion End', type: 'Seating', density: 'High' },
    { id: 'seat-h', name: 'Hill Stand', type: 'Seating', density: 'Medium' },
    { id: 'food-1', name: 'KSCA Canteen', type: 'Food', density: 'High' },
    { id: 'wash-1', name: 'North Restroom', type: 'Washroom', density: 'Low' }
  ],
  wankhede: [
    { id: 'gate-v', name: 'Vinoo Mankad Gate', type: 'Gate', density: 'High' },
    { id: 'gate-p', name: 'Polly Umrigar Gate', type: 'Gate', density: 'Low' },
    { id: 'seat-s', name: 'Sachin Tendulkar Stand', type: 'Seating', density: 'High' },
    { id: 'seat-g', name: 'Garware Pavilion', type: 'Seating', density: 'Medium' },
    { id: 'food-m', name: 'Mumbai Chaat Stand', type: 'Food', density: 'Medium' },
    { id: 'wash-w', name: 'West Restroom', type: 'Washroom', density: 'Low' }
  ],
  narendra: [
    { id: 'gate-1', name: 'Main Gate 1', type: 'Gate', density: 'Medium' },
    { id: 'gate-2', name: 'Gate 2 (Metro)', type: 'Gate', density: 'High' },
    { id: 'seat-p', name: 'Presidential Stand', type: 'Seating', density: 'Low' },
    { id: 'seat-u', name: 'Upper Tier', type: 'Seating', density: 'High' },
    { id: 'food-g', name: 'Gujarati Snacks', type: 'Food', density: 'Medium' },
    { id: 'wash-e', name: 'East Washroom', type: 'Washroom', density: 'High' }
  ]
};

const INITIAL_ALERTS = [
  { id: 1, message: 'Welcome to the EventFlow Dashboard.', type: 'info', time: new Date().toLocaleTimeString() }
];

export function useSimulation(selectedStadium) {
  const [zones, setZones] = useState(STADIUM_ZONES[selectedStadium]);
  const [alerts, setAlerts] = useState(INITIAL_ALERTS);

  // Reset zones when stadium changes
  useEffect(() => {
    setZones(STADIUM_ZONES[selectedStadium]);
    setAlerts([{ id: Date.now(), message: `Switched view to ${STADIUMS.find(s => s.id === selectedStadium).name}.`, type: 'info', time: new Date().toLocaleTimeString() }]);
  }, [selectedStadium]);

  useEffect(() => {
    const interval = setInterval(() => {
      setZones(prevZones => prevZones.map(zone => {
        // Randomly fluctuate density
        const rand = Math.random();
        let newDensity = zone.density;
        if (rand > 0.8) {
          const densities = ['Low', 'Medium', 'High'];
          newDensity = densities[Math.floor(Math.random() * densities.length)];
        }
        return { ...zone, density: newDensity };
      }));

      // Randomly generate alerts
      if (Math.random() > 0.85) {
        setAlerts(prev => {
          const currentZones = STADIUM_ZONES[selectedStadium];
          const newAlert = {
            id: Date.now(),
            message: `Update: Crowd movement detected near ${currentZones[Math.floor(Math.random() * currentZones.length)].name}.`,
            type: 'warning',
            time: new Date().toLocaleTimeString()
          };
          return [newAlert, ...prev].slice(0, 5); // Keep last 5 alerts
        });
      }
    }, 10000);

    return () => clearInterval(interval);
  }, [selectedStadium]);

  return { zones, alerts };
}
