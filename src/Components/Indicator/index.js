import React, {Component, PropTypes} from 'react';
import './styles.scss'
export default class Indicator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.children
        };
        this.handleChange = this.handleChange.bind(this);
    }
    //TODO manipulate redux tree on handleClick
    handleClick(op) {
        this.setState({
            value: parseInt(this.state.value) + op
        });
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    render() {
        return (
            <div className="indicators">
                <p>{this.props.label}</p>
                <div className="input-items">
                    <div className="circle-btn" onClick={() => this.handleClick(-1)}>-</div>
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    <div className="circle-btn" onClick={() => this.handleClick(1)}>+</div>
                </div>

            </div>
        )
    }
}

Indicator.propTypes = {
    value: PropTypes.number
};
