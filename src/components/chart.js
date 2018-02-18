import React, { Component } from 'react';
// import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';
import _ from 'lodash';

import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

function average(data) {
    return _.round(_.sum(data) / data.length);
}

// const data = [
//     { name: 'Page A', uv: 4000, pv: 2400, amt: 2400 },
//     { name: 'Page B', uv: 3000, pv: 1398, amt: 2210 },
//     { name: 'Page C', uv: 2000, pv: 9800, amt: 2290 },
//     { name: 'Page D', uv: 2780, pv: 3908, amt: 2000 },
//     { name: 'Page E', uv: 1890, pv: 4800, amt: 2181 },
//     { name: 'Page F', uv: 2390, pv: 3800, amt: 2500 },
//     { name: 'Page G', uv: 3490, pv: 4300, amt: 2100 },
// ];

// Function Component
export default (props) => {
    return (
        <div className="line-chart">
            <ResponsiveContainer width={250} height={170}>
                <LineChart data={props.data} dataKey="name">
                    <XAxis dataKey="time" hide="true" />
                    <YAxis domain={[props.min, props.max]} />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Line type="monotone" dataKey={props.dataKey} unit={props.units} stroke={props.color} strokeWidth={2} dot={{ strokeWidth: 1, r: 2.5 }} activeDot={{ r: 3 }} />
                </LineChart>
                {/* <div>{average(props.data)} {props.units}</div> */}
            </ResponsiveContainer>
        </div>
    )
}