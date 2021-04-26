import React from 'react';
import ScreenNumber from './screen-number.jsx';

export default function panel({ letters }) {
    if (typeof letters !== 'string') {
        return null;
    }
    return [].map.call(letters, (letter, index) => {
        return <ScreenNumber key={index} letter={letter} />
    });
}
