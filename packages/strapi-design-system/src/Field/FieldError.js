import React from 'react';
import { useField } from './FieldContext';
import { Typography } from '../Text';

export const FieldError = () => {
  const { id, error } = useField();

  if (!error) {
    return null;
  }

  return (
    <Typography variant="pi" as="p" id={`${id}-error`} textColor="danger600" data-strapi-field-error>
      {error}
    </Typography>
  );
};
