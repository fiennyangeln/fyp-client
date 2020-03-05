import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withWidth from '@material-ui/core/withWidth';
import {
  string, arrayOf, number, shape,
} from 'prop-types';
import { getChartWidth, getChartHeight } from '../../utils/getChartSize';

function OtherChart(props) {
  const {
    dataKey, title, data, width,
  } = props;
  const chartWidth = getChartWidth(width);
  const chartHeight = getChartHeight(width);
  return data && (
    <Grid container direction="column" alignContent="center">
      <Paper>
        <Typography align="center" variant="h5" gutterBottom>{title}</Typography>
        <div>
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
            <Line type="monotone" dataKey={dataKey} stroke="#8884d8" dot={false} strokeWidth={2} name={title} />
          </LineChart>
        </div>
      </Paper>
    </Grid>
  );
}

OtherChart.propTypes = {
  dataKey: string.isRequired,
  title: string.isRequired,
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
export default withWidth()(OtherChart);
