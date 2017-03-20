import React from 'react';
import Card from '../../Components/Card/index.js';
import Collection from '../../Components/Collection/index.js';
import Indicator from '../../Components/Indicator/index.js';
import Counter from '../../Components/Counter/index.js';
import InitialState from '../../initial.json';

import './styles.scss';

export default function(props){
  let playersById = InitialState.playersById;
  let collections = InitialState.collections;
  let counters = InitialState.counters;
  let opp_hand_size = InitialState.collections.hand_opp.content.length;
  const CARD_BACK = '🂠';
  const ID = 'you';

  //Opponents hand size
  let rows=[];
  for (let i=0; i<opp_hand_size; i++){
    rows.push(<Card>{CARD_BACK}</Card>);
  }
  return (
    <div className="frame">
      <div className="left-col">
          {/* Output indicators */}
          {Object.keys(playersById).map(function(id){
            return (<div key={id} className={id}>
                      <p className="section-name">{playersById[id].name+"'s Indicators"}</p>
                      {Object.keys(playersById[id].indicators).map(function(label){
                        return (
                          <Indicator key={label} label={label}>{playersById[id].indicators[label]}</Indicator>
                        )
                      })}
                    </div>)
          })}
      </div>
      <div className="center-col">
        <span className="collections">
          {Object.keys(collections).map(function(type){
            return(
            <span>
              <span>{type}: {collections[type].content.length}</span>
              <span><span>Control:</span>{collections[type].control.map(function(who){
                return <span>{who}</span>
              })}</span>
            </span>
          )
          })}
        </span>
      </div>
      <div className="right-col">
        <div className="counters">
          {counters.map(function(type){
            return <Counter label={type}>💙</Counter>
          })}
        </div>
      </div>
      {/* <Card>🂡</Card>
      <Collection layout="stacked"><Card>🂡</Card></Collection> */}
    </div>
  )
}
