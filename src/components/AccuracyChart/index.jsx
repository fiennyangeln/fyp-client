import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

export default function AccuracyChart(props) {
  const { data } = props;
  return data && (
    <Grid item>
      <Paper>
        <LineChart
          width={1300}
          height={250}
          data={data}
          margin={{
            right: 16, left: 0,
          }}
          syncId="epoch"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" />
          <YAxis />
          <Tooltip wrapperStyle={{ color: '#123123' }} />
          <Legend verticalAlign="top" />
          <Line type="monotone" name="Training Error" dataKey="training_error" stroke="#8884d8" dot={false} strokeWidth={2} />
          <Line type="monotone" name="Testing Error" dataKey="testing_error" stroke="#82ca9d" dot={false} strokeWidth={2} />
        </LineChart>
      </Paper>
    </Grid>
  );
}
