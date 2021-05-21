import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './components/clock.jsx';

function App() {
    const deadline = React.useMemo(() => {
        // '2021-05-27 22:00:00'
        const d = new Date();
        d.setFullYear(2021);
        d.setMonth(4);
        d.setDate(27);
        d.setHours(22);
        d.setMinutes(0);
        d.setSeconds(0);
        return d;
    });
    return (
        <div>
            <h1>距离《怪物猎人：崛起 version 3.0》配信还有：</h1>
            <Clock deadline={deadline} />
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);