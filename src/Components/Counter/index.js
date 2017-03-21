import React, {PureComponent, PropTypes} from 'react';
import './styles.scss'
export default class Counter extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return (
          <div className="counter">
              <p className="label">{this.props.label}</p>
              <span className="icon green">{this.props.children}</span>
          </div>
        )
    }
}

Counter.propTypes = {
    label: React.PropTypes.string.isRequired
};
