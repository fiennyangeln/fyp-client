import React from 'react';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/index';

const useStyles = makeStyles((theme) => ({
  input: {
    padding: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
}));

export default function FileInput(props) {
  const classes = useStyles();
  return (
    <Input
      className={classes.input}
      type="file"
      name="file"
      onChange={(event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsText(file);
        reader.onload = function (event) {
          props.onFileChange(JSON.parse(event.target.result));
        };
        reader.onerror = function (event) {
          props.onFileChange(null);
        };
      }}
    />
  );
}
