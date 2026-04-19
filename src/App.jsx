import React, { useState } from 'react';
import { useSimulation, STADIUMS } from './hooks/useSimulation';
import { Header } from './components/Header';
import { RouteOptimization } from './components/RouteOptimization';
import { CrowdStatus } from './components/CrowdStatus';
import { WaitTimes } from './components/WaitTimes';
import { Alerts } from './components/Alerts';
import './App.css';

function App() {
  const [selectedStadium, setSelectedStadium] = useState('chinnaswamy');
  const { zones, alerts } = useSimulation(selectedStadium);

  return (
    <div className="dashboard-container">
      <Header stadiums={STADIUMS} selectedStadium={selectedStadium} onStadiumChange={(e) => setSelectedStadium(e.target.value)} />
      <RouteOptimization zones={zones} />
      <Alerts alerts={alerts} />
      <CrowdStatus zones={zones} />
      <WaitTimes zones={zones} />
    </div>
  );
}

export default App;
