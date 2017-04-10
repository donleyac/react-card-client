import React, {PureComponent, PropTypes} from 'react';
import './styles.scss'
export default class Card extends PureComponent {
    render() {
      let style = {
        position: "absolute",
        left: this.props.pos[0],
        top: this.props.pos[1],
        "fontSize": "100px",
        background:  "white"
      };
      return <span style={style}>{this.props.children}</span>
    }
}
Card.PropTypes = {
  pos: PropTypes.array.isRequired
}
