import React, {PureComponent, PropTypes} from 'react';
import './styles.scss'
export default class Card extends PureComponent {
    constructor(props) {
        super(props);
    }
    render() {
        return <span>{this.props.children}</span>
    }
}

Card.propTypes = {

};
