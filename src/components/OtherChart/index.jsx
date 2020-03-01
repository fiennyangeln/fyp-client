import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

import Grid from '@material-ui/core/Grid';

import Typography from '@material-ui/core/Typography';

export default function OtherChart(props) {
  const { dataKey, title, data } = props;
  return (
    <Grid container direction="column" alignContent="center">
      <Typography align="center" variant="subtitle1">{title}</Typography>
      <div>
        <LineChart
          width={730}
          height={250}
          data={data}
          margin={{
            right: 0, left: 0,
          }}
          syncId="epoch"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" />
          <YAxis />
          <Tooltip wrapperStyle={{ color: '#123123' }} />
          <Line type="monotone" dataKey={dataKey} stroke="#8884d8" dot={false} strokeWidth={2} name={title}/>
        </LineChart>
      </div>
    </Grid>
  );
}
