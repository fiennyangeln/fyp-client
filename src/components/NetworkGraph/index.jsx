/* eslint-disable consistent-return */
import React, { useCallback, useState } from 'react';
import Tree from 'react-d3-tree';
import Slider from '@material-ui/core/Slider';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import { arrayOf, object, number } from 'prop-types';
import PlayIcon from 'mdi-react/PlayIcon';
import PauseIcon from 'mdi-react/PauseIcon';
import Grid from '@material-ui/core/Grid';

const PrettoSlider = withStyles({
  root: {
    color: '#4177a5',
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: '#fff',
    border: '2px solid currentColor',
    marginTop: -8,
    marginLeft: -12,
    '&:focus,&:hover,&$active': {
      boxShadow: 'inherit',
    },
  },
  active: {},
  valueLabel: {
    left: 'calc(-50% + 4px)',
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

const svgSquare = {
  shape: 'rect',
  shapeProps: {
    width: 20,
    height: 20,
    x: -10,
    y: -10,
  },
};

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 2 * theme.spacing.unit,
  },
  appIcon: {
    fill: theme.palette.text.primary,
  },
  slider: {
    flexGrow: 1,
    marginLeft: 2 * theme.spacing.unit,
  },
}));

function useInterval(callback, delay) {
  const intervalRef = React.useRef();
  const callbackRef = React.useRef(callback);

  // Remember the latest callback:
  //
  // Without this, if you change the callback, when setInterval ticks again, it
  // will still call your old callback.
  //
  // If you add `callback` to useEffect's deps, it will work fine but the
  // interval will be reset.

  React.useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);

  // Set up the interval:

  React.useEffect(() => {
    if (typeof delay === 'number') {
      intervalRef.current = window.setInterval(() => callbackRef.current(), delay);

      // Clear interval if the components is unmounted or the delay changes:
      return () => window.clearInterval(intervalRef.current);
    }
  }, [delay]);

  // Returns a ref to the interval ID in case you want to clear it manually:
  return intervalRef;
}

function getNetworkIndexFromEpochNumber(epochNumber, networks) {
  const epochsLTEvalue = Object.keys(networks).filter((epoch) => (epoch <= epochNumber));
  return epochsLTEvalue.length ? epochsLTEvalue[epochsLTEvalue.length - 1] : 0;
}
export default function NetworkGraph(props) {
  const classes = useStyles();
  const [networkIndex, setNetworkIndex] = useState(0);
  const [epochNumber, setEpochNumber] = useState(20);
  const [isPlaying, setIsPlaying] = useState(false);
  const { networks, numberOfEpoch } = props;
  const onChange = useCallback((event, value) => {
    setEpochNumber(value);
    if (!networks) return;
    setNetworkIndex(getNetworkIndexFromEpochNumber(value, networks));
  }, [networks]);

  const intervalRef = useInterval(() => {
    if (epochNumber < numberOfEpoch) {
      setEpochNumber(epochNumber + 1);
      setNetworkIndex(getNetworkIndexFromEpochNumber(epochNumber + 1, networks));
    } else {
      window.clearInterval(intervalRef.current);
    }
  }, isPlaying ? 500 : null);

  if (!networks || !(networkIndex in networks)) return null;
  return (
    <Paper variant="outlined" classes={{ root: classes.root }}>
      <div id="treeWrapper" style={{ width: '100%', height: '80vh' }}>
        <Tree
          separation={{ siblings: 0.5, nonSiblings: 1.5 }}
          data={networks[networkIndex]}
          collapsible={false}
          nodeSvgShape={svgSquare}
        />
      </div>
      <Grid container alignItems="center">
        <Grid item>
          <IconButton
            onClick={() => { setIsPlaying(!isPlaying); }}
          >
            {isPlaying
              ? <PauseIcon className={classes.appIcon} size={30} />
              : <PlayIcon className={classes.appIcon} size={30} />}
          </IconButton>
        </Grid>
        <Grid item className={classes.slider}>
          <PrettoSlider
            onChangeCommitted={onChange}
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            value={epochNumber}
            max={numberOfEpoch}
          />
        </Grid>
      </Grid>
    </Paper>
  );
}

NetworkGraph.propTypes = {
  networks: arrayOf(object).isRequired,
  numberOfEpoch: number.isRequired,
};
