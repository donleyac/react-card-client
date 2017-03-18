import React from 'react';
import './styles.scss';
export default function(props){
  return (
    <div id="home">
      <h1>Welcome to the React Card Engine</h1>
      <div className="row-items">
        <div className="rnd-btn">Setup Game Configs</div>
        <div className="rnd-btn">Load Game Configs</div>
      </div>
    </div>
  )
}
