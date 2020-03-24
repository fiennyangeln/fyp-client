import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from 'mdi-react/CloseIcon';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/index';
import { bool, func } from 'prop-types';

const useStyles = makeStyles((theme) => ({
  closeIcon: {
    position: 'absolute',
    right: theme.spacing(1),
    top: theme.spacing(1),
  },

}));

export default function Documentation(props) {
  const { open, onClose } = props;
  const classes = useStyles();
  return (
    <Dialog open={open} onClose={onClose} scroll="paper">
      <DialogTitle>
        Autonomous CNN
        <IconButton aria-label="close" onClick={onClose} className={classes.closeIcon}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <Typography gutterBottom>
          Autonomous CNN is a data-driven method to learn CNN architecture. It has been implemented
          to solve image classification problem on several widely used datasets, such as MNIST,
          MNIST Fashion, MNIST rot-back-image, CIFAR, and ADHD-200. Out of all these datasets,
          it achieved a state-of-the-art accuracy on MNIST rot-back-image and ADHD-200.
        </Typography>
        <Typography gutterBottom>
          The initialization consists of 1 CNN layer, followed by 1 max-pooling layer and a fully
          connected layer. After that, it goes through a CNN growing process, kernel pruning
          process, and parameter optimization process before achieving the final architecture.
        </Typography>
        <Typography gutterBottom>
          This website aims to visualize the learning process of the AutoCNN.
        </Typography>
      </DialogContent>
    </Dialog>
  );
}

Documentation.propTypes = {
  open: bool.isRequired,
  onClose: func.isRequired,
};
