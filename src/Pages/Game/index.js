import React, {PureComponent, PropTypes} from 'react';
import {Card} from '../../Components/Card/index.js';
import {List, is} from 'immutable';
import Indicator from '../../Components/Indicator/index.js';
import Counter from '../../Components/Counter/index.js';
import {connect} from 'react-redux';
import * as actionCreators from './../../action_creators.js';
import ui_mapper from './../../ui_mapping.json';
import {DragDropContext} from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import './styles.scss';

export default class Game extends PureComponent {
  render() {
    let playersById = this.props.playersById;
    let collections = this.props.collections;
    let counters = this.props.counters;

    let gameboard = collections.get("gameboard");
    let indic_list = [];
    let coll_list = [];
    let game_list = [];

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
    //gameboard
    gameboard?gameboard.get("content").map(function(row, index){
      //TODO move this logic inside of the card component, if it doesnt exist in the ui_mapper give it an unidentified card style
      if(ui_mapper.hasOwnProperty(row.get(0))){
        let type = row.get(0);
        let id = row.get(1);
        let pos=[row.get(2),row.get(3)];
        let angle=row.get(4);
        if (ui_mapper[type].hasOwnProperty(id)){
          game_list.push(<Card onClick={this.itemClick.bind(this)} row={row} pos={pos}>{ui_mapper[type][id]}</Card>);
        }
      }
    },this):null;
    return (
        <div className="frame">
          <div className="left-col">
            {indic_list}
          </div>
          <div className="center-col">
            <span className="collections">
              {coll_list}
            </span>
            <div onClick={this.getClickPosition.bind(this, gameboard)} id="gameboard" ref={(node) => this.setSize(node,"gameboard")}>
              {game_list}
            </div>
            <span className="hand"></span>
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
  itemClick(row){
    let new_x=row.get(2)+Math.floor((Math.random() * 100) + 1);
    let new_y=row.get(3)+Math.floor((Math.random() * 100) + 1);
    this.props.modCollection("gameboard", "content", [row.get(0),row.get(1),new_x,new_y,row.get(4),row.get(5)],"chg");
  }
  getClickPosition(gameboard, e){
    let collection = this.props.collections.get("gameboard");
    if(collection){
      let collection_pos = collection.get("pos");
      let new_x;
      let new_y;
      gameboard.get("content").map(function(row){
        // new_x = e.clientX - collection_pos.get(0);
        // new_y = e.clientY - collection_pos.get(1);
        new_x = e.clientX;
        new_y = e.clientY;
        this.props.modCollection("gameboard", "content", [row.get(0),row.get(1),new_x,new_y,row.get(4),row.get(5)],"chg");
      },this);
      console.log("collection_pos",collection.get("pos"));
    }
  }
  setSize(node,collect){
    let collection = this.props.collections.get(collect);
    if(node && collection){
      let collection_pos = collection.get("pos");
      let clientRect = node.getBoundingClientRect();
      let position = List([clientRect.left, clientRect.top]);
      let size = [clientRect.width, clientRect.height];
      if(!is(collection_pos,position)){
        this.props.setCollectionPosition(collect, position, size);
      }
    }
  }
}
Game.PropTypes = {
  playersById:  PropTypes.object.isRequired,
  collections: PropTypes.object.isRequired,
  counters: PropTypes.object.isRequired,
  modIndicator: PropTypes.func.isRequired,
  modCollection: PropTypes.func.isRequired,
  setCollectionPosition: PropTypes.func.isRequired
}
function mapStateToProps(state) {
  return {
    playersById: state.get('playersById') || new List(),
    collections: state.get('collections') || new  List(),
    counters: state.get('counters') || new  List()
  };
}
export const GameContext = DragDropContext(HTML5Backend)(Game);
export const GameContainer = connect(mapStateToProps, actionCreators)(Game);
