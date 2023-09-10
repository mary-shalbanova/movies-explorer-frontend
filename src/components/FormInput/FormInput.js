import React from 'react';
import './FormInput.css';

function FormInput({ type, name, labelTitle }) {
  return (
    <>
      <label className='form__label'>{labelTitle}</label>
      <input
        className='form__input'
        type={type}
        name={name}
        placeholder=''
        required={true}
      />
    </>
  );
}

export default FormInput;
