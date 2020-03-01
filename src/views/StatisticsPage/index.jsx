import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/index';
import Chart from '../../components/AccuracyChart';
import OtherChart from '../../components/OtherChart';
import FileInput from '../../components/FileInput';
import { correlation, convLayerEvo } from './sample_stat';


const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 60,
    padding: 2 * theme.spacing.unit,
  },
}));

export default function StatisticsPage() {
  const classes = useStyles();
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h6">AutoCNN</Typography>
        </Toolbar>
      </AppBar>
      <main
        className={classes.container}
      >
        <Grid container justify="center">
          <FileInput />
          <Grid container item xs={12} sm={12} md={12} lg={12} justify="center">
            <Chart />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <OtherChart title="FSS Score" data={correlation} dataKey="mean_correlation_score_acc" />

          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <OtherChart title="Convolutional Layer Evolution" data={convLayerEvo} dataKey="conv_layer_evo" />
          </Grid>
        </Grid>
      </main>
    </div>
  );
}
