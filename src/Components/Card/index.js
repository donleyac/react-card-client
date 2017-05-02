import React, {PureComponent, PropTypes} from 'react';
import {DragSource} from 'react-dnd';
import './styles.scss'
export class Card extends PureComponent {
    render() {
      const {connectDragSource, isDragging} = this.props;
      let style = {
        position: "absolute",
        left: this.props.pos[0],
        top: this.props.pos[1],
        "fontSize": "100px",
        background:  "white"
      };
      //Breaking change
      return connectDragSource(<span
        onClick={()=>this.props.onClick(this.props.row)}
        style={style}>{this.props.children}</span>);
    }
}
const type="card";
const spec = {
  beginDrag(props) {
    return {id: props.id};
  }
};
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  }
}
Card.PropTypes = {
  connectDragSource: PropTypes.func.isRequired,
  connectDragPreview: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  pos: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  row: PropTypes.array.isRequired
}
export default DragSource(type, spec, collect)(Card);
