import React, { useEffect } from 'react';
import {Routes, Route, Link, useNavigate} from "react-router-dom";
import Singleplayer from './Components/Singleplayer.js';
import PlayerInput from './Components/PlayerInput.js';
import DualPlayer from './Components/DualPlayer.js';


function App() {
  return (
    <div className="App">
             <Routes>
                <Route path='/' element={<PlayerInput/>}></Route>
                <Route path="/Singleplayer" element={<Singleplayer/>} ></Route>
                <Route path="/DualPlayer" element={<DualPlayer/>} ></Route>
             </Routes>
      </div>
  );
}

export default App;
