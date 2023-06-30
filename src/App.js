import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import First from './components/First/First.js';
import Dashboard from './components/Dashboard/Dashboard.js';
import {Routes, Route} from 'react-router-dom';
import Details from './components/Details/Details.js';
import Edit from './components/Edit/Edit.js';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<First/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
        <Route path="/edit" element={<Edit/>}/>
        <Route path="/details/:firstName" element={<Details/>}/>
     </Routes>
    </div>
  );
}

export default App;
