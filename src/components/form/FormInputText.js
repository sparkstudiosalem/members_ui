import React, { useCallback } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { TextField } from '@mui/material';

export default function FormInputText({ name, label, multiline }) {
  const { control } = useFormContext();

  const handleRender = useCallback(({ field: { value, onChange }, fieldState: { error } }) => {
    return (
      <TextField
        name={name}
        label={label}
        multiline={!!multiline}
        error={!!error}
        value={value}
        fullWidth={true}
        variant="outlined"
        onChange={onChange}
      />
    );
  }, [label, multiline, name]);

  return (
    <Controller name={name} control={control} render={handleRender} />
  );
}