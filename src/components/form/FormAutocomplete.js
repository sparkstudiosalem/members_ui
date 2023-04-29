/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback } from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { Autocomplete, TextField } from '@mui/material';

function renderInput(tagProps) {
  return <TextField {...tagProps} />;
}

export default function FormAutocomplete({ name, label, options }) {
  const { control } = useFormContext();

  const handleRender = useCallback(({ field: { value, onChange }, fieldState: { error } }) => {
    return (
      <Autocomplete
        name={name}
        label={label}
        error={!!error}
        value={value}
        options={options}
        fullWidth={true}
        variant="outlined"
        renderInput={renderInput}
        onChange={onChange}
      />
    );
  }, [label, name, options]);

  return (
    <Controller name={name} control={control} render={handleRender} />
  );
}
