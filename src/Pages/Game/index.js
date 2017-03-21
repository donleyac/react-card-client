import React, {PureComponent, PropTypes} from 'react';
import Card from '../../Components/Card/index.js';
import Collection from '../../Components/Collection/index.js';
import Indicator from '../../Components/Indicator/index.js';
import Counter from '../../Components/Counter/index.js';
import {connect} from 'react-redux';
import './styles.scss';

export default class Game extends PureComponent {
  constructor(props) {
      super(props);
  }
  render() {
    let playersById = this.props.playersById;
    let collections = this.props.collections;
    let counters = this.props.counters;
    const CARD_BACK = '🂠';
    const ID = 'you';

    let indic_list = [];

    //Indicators
    playersById.forEach(function(value, key, map){
      indic_list.push(<p className="section-name">{playersById.get(key).get('name')+"'s Indicators"}</p>)
      playersById.get(key).get('indicators').forEach(function(value, key, map){
          indic_list.push(<Indicator label={key}>{value}</Indicator>)
      })
    });

    return (
        <div className="frame">
          <div className="left-col">
            {indic_list}
          </div>
          {/* <div className="center-col">
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
          </div> */}
        </div>
      )
  }
}

function mapStateToProps(state) {
  return {
    playersById: state.get('playersById'),
    collections: state.get('collections'),
    counters: state.get('counters')
  };
}
export const GameContainer = connect(mapStateToProps)(Game);
