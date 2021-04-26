import React, {useEffect, useState} from 'react';
import Panel from './panel.jsx';

function setResetDateTime(deadline) {
    const endTime = deadline.getTime();
    const nowTime = new Date().getTime();

    const resetSec = endTime - nowTime;

    const day = Math.max((resetSec / (60 * 60 * 24 * 1000)) | 0, 0);
    const hour = Math.max((resetSec / (60 * 60 * 1000) % 24) | 0, 0);
    const min = Math.max((resetSec / (60 * 1000) % 60) | 0, 0);
    const sec = Math.max((resetSec / 1000 % 60) | 0, 0);

    return [day, hour, min, sec];
}

// new Date('2021-4-27 22:00:00')
export default function clock({deadline}) {
    const [letters, setLetters] = useState('');
    useEffect(() => {
        const intervalId = setInterval(() => {
            const [day, hour, min, sec] = setResetDateTime(deadline);
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
