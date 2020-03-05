import React, { useCallback, useState } from 'react';
import Tree from 'react-d3-tree';
import Slider from '@material-ui/core/Slider';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { arrayOf, object, number } from 'prop-types';

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
}));

export default function NetworkGraph(props) {
  const classes = useStyles();
  const [networkIndex, setNetworkIndex] = useState(0);
  const { networks, numberOfEpoch } = props;
  const onChange = useCallback((event, value) => {
    if (!networks) return;
    const epochsLTEvalue = Object.keys(networks).filter((epoch) => (epoch <= value));
    const epochValue = epochsLTEvalue.length ? epochsLTEvalue[epochsLTEvalue.length - 1] : 0;
    setNetworkIndex(epochValue);
  }, [networks]);

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
      <PrettoSlider
        onChangeCommitted={onChange}
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        defaultValue={20}
        max={numberOfEpoch}
      />
    </Paper>
  );
}

NetworkGraph.propTypes = {
  networks: arrayOf(object).isRequired,
  numberOfEpoch: number.isRequired,
};
