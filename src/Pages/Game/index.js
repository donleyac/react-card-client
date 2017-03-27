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
    let coll_list = [];

    //Indicators
    playersById.forEach(function(value, key, map){
      indic_list.push(<p className="section-name">{playersById.get(key).get('name')+"'s Indicators"}</p>)
      playersById.get(key).get('indicators').forEach(function(value, key, map){
          indic_list.push(<Indicator label={key}>{value}</Indicator>)
      });
    });

    //Collections
    collections.forEach(function(value, key, map) {
      coll_list.push(<span>{key}: {collections.get(key).get("content").size}</span>);
      collections.get(key).get("control").forEach(function(value, key, map){
          coll_list.push(<span>Control: {value}</span>);
      });
    });

    return (
        <div className="frame">
          <div className="left-col">
            {indic_list}
          </div>
          <div className="center-col">
            <span className="collections">
              {coll_list}
            </span>
          </div>
          <div className="right-col">
            <div className="counters">
              {counters.map(function(type){
                return <Counter label={type}>💙</Counter>
              })}
            </div>
          </div>
        </div>
      )
  }
}

function mapStateToProps(state) {
  console.log("Component State",state);
  return {
    playersById: state.get('playersById'),
    collections: state.get('collections'),
    counters: state.get('counters')
  };
}
export const GameContainer = connect(mapStateToProps)(Game);
