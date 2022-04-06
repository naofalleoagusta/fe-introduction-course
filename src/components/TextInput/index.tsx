import { createStyles, makeStyles, TextField } from '@material-ui/core';
import React from 'react';

import { TInput } from '../../types';

const useStyle = makeStyles(() =>
  createStyles({
    root: {
      marginBottom: '1rem',
    },
  })
);

const TextInput: React.FC<TInput> = ({
  label,
  id,
  value,
  onChange,
  fullWidth,
  error = false,
  helperText = '',
}) => {
  const classes = useStyle();
  return (
    <TextField
      label={label}
      id={id}
      value={value}
      fullWidth={fullWidth}
      onChange={onChange}
      className={classes.root}
      error={error}
      {...(error && { helperText })}
    />
  );
};

export default TextInput;
