import React, {PureComponent, PropTypes} from 'react';
// import Card from '../../Components/Card/index.js';
// import Collection from '../../Components/Collection/index.js';
import {List} from 'immutable';
import Indicator from '../../Components/Indicator/index.js';
import Counter from '../../Components/Counter/index.js';
import {connect} from 'react-redux';
import * as actionCreators from './../../action_creators.js';
import './styles.scss';

export default class Game extends PureComponent {
  render() {
    let playersById = this.props.playersById;
    let collections = this.props.collections;
    let counters = this.props.counters;

    let indic_list = [];
    let coll_list = [];

    let board = document.getElementById("gameboard");
    if (board) {
      let game_dim = [board.style.height, board.style.width];
      console.log(board);
      let xPos = board.offsetParent;
      let yPos = board.clientTop;
      let game_pos = [xPos, yPos];

      console.log(game_dim);
      console.log(game_pos);
    }

    //Indicators
    playersById.forEach(function(value, key, map){
      indic_list.push(<p className="section-name">{playersById.get(key).get('name')+"'s Indicators"}</p>)
      playersById.get(key).get('indicators').forEach(function(value, key2, map){
          indic_list.push(<Indicator playerId={key} action={this.props.modIndicator} label={key2}>{value}</Indicator>)
      }, this);
    },this);

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
            <div id="gameboard"></div>
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
Game.PropTypes = {
  playersById:  PropTypes.object.isRequired,
  collections: PropTypes.object.isRequired,
  counters: PropTypes.object.isRequired,
  modIndicator: PropTypes.func.isRequired
}
function mapStateToProps(state) {
  return {
    playersById: state.get('playersById') || new List(),
    collections: state.get('collections') || new List(),
    counters: state.get('counters') || new List()
  };
}
export const GameContainer = connect(mapStateToProps, actionCreators)(Game);
