import React from 'react';
import './styles.scss';
export default function(props) {
    return (
        <div className="counter">
            <p className="label">{props.label}</p>
            <span className="icon green">{props.children}</span>
        </div>
    )
}
