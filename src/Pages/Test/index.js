import React from 'react';
import Card from '../../Components/Card/index.js';
import Collection from '../../Components/Collection/index.js';
import Indicator from '../../Components/Indicator/index.js';
import Counter from '../../Components/Counter/index.js';
import InitialState from '../../initial.json';

import './styles.scss';

export default function(props){
  let opp_indicators = InitialState.playersById.opponent.indicators;
  let you_indicators = InitialState.playersById.you.indicators;
  let counters = InitialState.counters;
  let opp_hand_size = InitialState.collections.hand_opp.content.length;
  const CARD_BACK = '🂠';

  let rows=[];
  for (let i=0; i<opp_hand_size; i++){
    rows.push(<Card>{CARD_BACK}</Card>);
  }
  return (
    <div className="frame">
      <div className="left-col">
        <div className="indicators">
          <p>Opponent Indicators</p>
          {Object.keys(opp_indicators).map(function(label,value){
            return <Indicator label={label}>{opp_indicators[label]}</Indicator>
          })}
        </div>
        <div className="counters">
          {counters.map(function(type){
            return <Counter label={type}>💙</Counter>
          })}
        </div>
      </div>
      <div className="center-col">
        <div className="opp-hand">
          {rows}
        </div>
      </div>
      <div className="right-col">
        <div className="counters">
          {counters.map(function(type){
            return <Counter label={type}>💙</Counter>
          })}
        </div>
        <div className="indicators">
          <p>Your Indicators</p>
          {Object.keys(you_indicators).map(function(label,value){
            return <Indicator label={label}>{you_indicators[label]}</Indicator>
          })}
        </div>
      </div>
      {/* <Card>🂡</Card>
      <Collection layout="stacked"><Card>🂡</Card></Collection> */}
    </div>
  )
}
