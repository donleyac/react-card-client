import React, {PureComponent, PropTypes} from 'react';
import './styles.scss'
export default class Indicator extends PureComponent {
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
                    <i className="material-icons btn" onClick={() => this.handleClick(-1)}>chevron_left</i>
                    <input type="text" value={this.state.value} onChange={this.handleChange}/>
                    <i className="material-icons btn" onClick={() => this.handleClick(1)}>chevron_right</i>
                </div>

            </div>
        )
    }
}

Indicator.propTypes = {
    label: PropTypes.string.isRequired
};
