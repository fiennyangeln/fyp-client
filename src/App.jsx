import { hot } from 'react-hot-loader';
import React from 'react';
import './App.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Chart from './AccuracyChart';
import OtherChart from './OtherChart';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 60,
    padding: 2 * theme.spacing.unit,
  },
}));

const App = () => {
  const classes = useStyles();
  return (
    <div className="App">
      <AppBar>
        <Toolbar>
          <Typography variant="h6">AutoCNN</Typography>
        </Toolbar>
      </AppBar>
      <main
        className={classes.container}
      >
        <Grid container>
          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Chart />
          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <OtherChart />

          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <OtherChart />

          </Grid>

          <Grid item xs={12} sm={12} md={6} lg={6}>
            <Chart />

          </Grid>

        </Grid>
      </main>
    </div>
  );
};

export default hot(module)(App);
