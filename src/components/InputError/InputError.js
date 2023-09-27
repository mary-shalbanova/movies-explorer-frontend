import React from 'react';
import './InputError.css';

function InputError({ errorMessage }) {
  return (
    <span
      className={`form__error ${errorMessage && 'form__error_visible'}
    `}
    >
      {errorMessage}
    </span>
  );
}

export default InputError;
