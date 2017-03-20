import React from 'react';

export default function(props){
  let classname = props.layout;
  return <span className={classname}>{props.children}</span>
}
