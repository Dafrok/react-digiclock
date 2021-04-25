import React from 'react';

export default (props) => (
    <div
        className={
        props.isShow
            ? props.position + ' diode active'
            : props.position + ' diode'
        }
    ></div>
);
