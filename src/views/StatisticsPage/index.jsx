import React, { useState, useContext } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/index';
import { useTheme } from '@material-ui/styles';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import LightBulbOn from 'mdi-react/LightbulbOnIcon';
import LightBulbOnOutline from 'mdi-react/LightbulbOnOutlineIcon';
import BookOpenPageVariantIcon from 'mdi-react/BookOpenPageVariantIcon';
import Chart from '../../components/AccuracyChart';
import NetworkGraph from '../../components/NetworkGraph';
import OtherChart from '../../components/OtherChart';
import FileInput from '../../components/FileInput';
import ToggleThemeContext from '../../utils/ToggleTheme';
import { THEME } from '../../theme';


const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 60,
    padding: 2 * theme.spacing.unit,
  },
  title: {
    flexGrow: 1,
    color: THEME.PRIMARY_TEXT_DARK,
  },
  appBar: {
    position: 'fixed',
    backgroundColor: theme.palette.secondary.dark,
    zIndex: theme.zIndex.drawer + 1,
  },
  appIcon: {
    fill: theme.palette.common.white,
  },
  graph: {
    marginTop: 2 * theme.spacing.unit,
  },
}));

function StatisticsPage() {
  const classes = useStyles();
  const [data, setData] = useState(null);
  const theme = useTheme();
  const setTheme = useContext(ToggleThemeContext);
  return (
    <div>
      <AppBar className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>Autonomous CNN</Typography>
          <FileInput onFileChange={setData} />
          <Tooltip placement="bottom" title="Toggle light/dark theme">
            <IconButton
              className={classes.leftAppBarButton}
              onClick={() => { setTheme(theme.palette.type === 'dark' ? 'light' : 'dark'); }}
            >
              {theme.palette.type === 'dark' ? (
                <LightBulbOn className={classes.appIcon} />
              ) : (
                <LightBulbOnOutline className={classes.appIcon} />
              )}
            </IconButton>
          </Tooltip>
          <Tooltip placement="bottom" title="Documentation">
            <IconButton>
              <BookOpenPageVariantIcon className={classes.appIcon} />
            </IconButton>
          </Tooltip>
        </Toolbar>
      </AppBar>
      <main
        className={classes.container}
      >
        <NetworkGraph
          networks={data && data.networkData ? data.networkData : null}
          numberOfEpoch={data ? data.lineChartData.length : 0}
        />
        <Grid container justify="center">
          <Grid container item xs={12} sm={12} md={12} lg={12} justify="center" className={classes.graph}>
            <Chart
              data={data && data.lineChartData ? data.lineChartData : null}
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} className={classes.graph}>
            <OtherChart
              title="FSS Score"
              data={data && data.lineChartData ? data.lineChartData : null}
              dataKey="mean_correlation_score_acc"
            />
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={12} className={classes.graph}>
            <OtherChart
              title="Convolutional Layer Evolution"
              data={data && data.lineChartData ? data.lineChartData : null}
              dataKey="conv_layer_evo"
            />
          </Grid>
        </Grid>
      </main>
    </div>
  );
}

export default StatisticsPage;
