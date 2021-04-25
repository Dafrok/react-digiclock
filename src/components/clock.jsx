import React, {useEffect, useState} from 'react';
import Panel from './panel.jsx';

function setResetDateTime(str) {
    const endTime = new Date(str).getTime();
    const nowTime = new Date().getTime();

    const resetSec = endTime - nowTime;

    const day = Math.max(parseInt(resetSec / (60 * 60 * 24 * 1000), 10), 0);
    const hour = Math.max(parseInt(resetSec / (60 * 60 * 1000) % 24, 10), 0);
    const min = Math.max(parseInt(resetSec / (60 * 1000) % 60, 10), 0);
    const sec = Math.max(parseInt(resetSec / 1000 % 60, 10), 0);

    return [day, hour, min, sec];
}

// new Date('2021-4-27 22:00:00')
export default function clock(props) {
    const [letters, setLetters] = useState('');
    useEffect(() => {
        const intervalId = setInterval(() => {
            const [day, hour, min, sec] = setResetDateTime('2021-04-27 22:00:00');
            setLetters(`${
              day
            }d:${
              hour.toString().padStart(2, '0')
            }:${
              min.toString().padStart(2, '0')
            }:${
              sec.toString().padStart(2, '0')
            }`);
        }, 1000);
        return () => {
            clearInterval(intervalId);
        };
    }, []);
    return (
        <div className='react-digiclock'>
            <Panel letters={letters} />
        </div>
    );
}
