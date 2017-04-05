import React, {PureComponent, PropTypes} from 'react';
import './styles.scss'
export default class Collection extends PureComponent {
    render() {
        let classname = this.props.layout;
        return <span className={classname}>{this.props.children}</span>
    }
}

Collection.propTypes = {
    layout: React.PropTypes.string.isRequired
};
