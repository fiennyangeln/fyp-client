/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { makeStyles } from '@material-ui/core/index';
import FileUploadIcon from 'mdi-react/FileUploadIcon';
import Button from '@material-ui/core/Button';
import { func } from 'prop-types';

const useStyles = makeStyles((theme) => ({
  input: {
    marginRight: theme.spacing.unit,
  },
  appIcon: {
    fill: theme.palette.common.white,
  },
  button: {
    color: theme.palette.common.white,
  },
}));

export default function FileInput(props) {
  const classes = useStyles();
  return (
    <div>
      <input
        accept=".json"
        className={classes.input}
        style={{ display: 'none' }}
        id="raised-button-file"
        type="file"
        onChange={(event) => {
          const file = event.target.files[0];
          const reader = new FileReader();
          reader.readAsText(file);
          reader.onload = (ev) => {
            props.onFileChange(JSON.parse(ev.target.result));
          };
          reader.onerror = () => {
            props.onFileChange(null);
          };
        }}
      />
      <label htmlFor="raised-button-file">
        <Button
          variant="raised"
          component="span"
          className={classes.button}
          startIcon={
            <FileUploadIcon className={classes.appIcon} />
        }
        >
          Upload
        </Button>
      </label>
    </div>
  );
}

FileInput.propTypes = {
  onFileChange: func.isRequired,
};
