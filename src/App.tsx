import React from 'react';
import './App.css';
import { EventSourcing } from './EventSourceing';
import { LongPulling } from './LongPulling';


function App() {
  return (
    <div className="App">
      {/* <LongPulling></LongPulling> */}
      <EventSourcing/>
    </div>
  );
}

export default App;
