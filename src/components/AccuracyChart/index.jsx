import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withWidth from '@material-ui/core/withWidth';
import {
  string, number, arrayOf, shape,
} from 'prop-types';
import { getChartWidth, getChartHeight } from '../../utils/getChartSize';

function AccuracyChart(props) {
  const { data, width } = props;
  const chartWidth = getChartWidth(width);
  const chartHeight = getChartHeight(width);
  return data && (
    <Grid item>
      <Paper>
        <Typography align="center" variant="h5" gutterBottom>Error Graph</Typography>
        <LineChart
          width={chartWidth}
          height={chartHeight}
          data={data}
          margin={{
            right: 16, left: 0,
          }}
          syncId="epoch"
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" minTickGap={50} />
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

AccuracyChart.propTypes = {
  data: arrayOf(
    shape({
      x: number,
      training_error: number,
      testing_error: number,
      mean_correlation_score_acc: number,
      conv_layer_evo: number,
    }),
  ).isRequired,
  width: string.isRequired,
};

export default withWidth()(AccuracyChart);
