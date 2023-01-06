import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Game from "./Game";

export default function PlayerInput(){

    const navigate = useNavigate();

    const [player_1 ,setPlayer_1] = useState('');
    const [player_2 ,setPlayer_2] = useState('') 

    const [game,setGame] = useState('Dual')

    const HandleClick = ()=>{
      
        if(game === 'dual'){
            navigate('/DualPlayer',{state:{Player1:player_1,Player2:player_2}}); 
        }else if(game === "single"){
            navigate('/Singleplayer',{state:{Player1:player_1,Player2:player_2}})
        }         
    } 
    
    return (
        <div className='PlayerDeitals'>
        <h1> TIC TAC TOE</h1>
          <div className='player1'>
            <label for="player1" className='label'>Player 1 : </label>
            <input type="text" id='player1' className="playerName--1" onChange={(e)=> setPlayer_1(e.target.value)}/>
            </div>
            <div className='player2'>
            <label for="player2" className='label'>Player 2 : </label>
            <input type="text" id="player2" className="playerName--2" onChange={(e)=> setPlayer_2(e.target.value)}/>
            </div>
           <button className='btn button_continue' onClick={HandleClick}>Continue</button>
        
           <div className="typeGame">
            <label for="singlePlayer">Single Player</label>
                <input type="checkbox" id="singlePlayer" checked={game === "single"} onChange={()=>setGame('single')}/>
            <label for="dualPlayer">Dual Player</label> 
            <input type="checkbox" id="dualPlayer"  checked={game === "dual"} onChange={()=>setGame('dual')}/>
        </div>
        </div>
    )
    
}