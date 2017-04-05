import React, {PureComponent, PropTypes} from 'react';
import './styles.scss'
export default class Indicator extends PureComponent {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }
    handleClick(change) {
      this.props.action(this.props.playerId, this.props.label, change);
    }
    handleChange(event) {
        this.props.action(this.props.playerId, this.props.label, parseInt(event.target.value), "replace")
    }
    render() {
        return (
            <div className="indicators">
                <p>{this.props.label}</p>
                <div className="input-items">
                    <i className="material-icons btn" onClick={() => this.handleClick(-1)}>chevron_left</i>
                    <input type="text" value={this.props.children} onChange={this.handleChange}/>
                    <i className="material-icons btn" onClick={() => this.handleClick(1)}>chevron_right</i>
                </div>
            </div>
        )
    }
}

Indicator.propTypes = {
    label: PropTypes.string.isRequired,
    action: PropTypes.func.isRequired
};
