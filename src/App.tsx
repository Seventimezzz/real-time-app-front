import React from 'react';
import './App.css';
import { EventSourcing } from './EventSourceing';
import { LongPulling } from './LongPulling';
import  WebSock  from './WebSock';


function App() {
  return (
    <div className="App">
      {/* <LongPulling></LongPulling> */}
      {/* <EventSourcing/> */}
        <WebSock></WebSock>
    </div>
  );
}

export default App;
