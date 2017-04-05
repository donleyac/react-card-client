import React, {PureComponent, PropTypes} from 'react';
import './styles.scss'
export default class Card extends PureComponent {
    render() {
        return <span>{this.props.children}</span>
    }
}
