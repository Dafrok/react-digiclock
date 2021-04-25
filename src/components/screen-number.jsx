import React from 'react';
import Diode from './diode.jsx';
import dict from '../dict.js';
import ScreenColon from './screen-colon';

export default function screenNumber({letter}) {
    if (dict[letter]?.diode) {
        return <ScreenColon />;
    }
    return (
        <div className='screen'>
            {letter} {dict[letter]?.middle}
            <Diode position='top horizontal' isShow={dict[letter]?.top} />
            <Diode position='middle horizontal' isShow={dict[letter]?.middle} />
            <Diode position='bottom horizontal' isShow={dict[letter]?.bottom} />
            <Diode position='left top vertical' isShow={dict[letter]?.leftTop} />
            <Diode
                position='right top vertical'
                isShow={dict[letter]?.rightTop}
            />
            <Diode
                position='left bottom vertical'
                isShow={dict[letter]?.leftBottom}
            />
            <Diode
                position='right bottom vertical'
                isShow={dict[letter]?.rightBottom}
            />
        </div>
    );
}
