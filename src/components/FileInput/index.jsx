import React, { useState } from 'react';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/index';

const useStyles = makeStyles((theme) => ({
  input: {
    margin: theme.spacing.unit,
  },
}));

export default function FileInput() {
  const classes = useStyles();
  const [file, setFile] = useState(null);
  return (
    <Input
      className={classes.input}
      type="file"
      name="file"
      onChange={(event) => {
        setFile(event.target.files[0]);
        console.log(event.target.files[0]);
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsBinaryString(file);
        reader.onload = function (event) {
          // TODO
        };
        reader.onerror = function (event) {
          // TODO
        };
      }}
    />
  );
}
