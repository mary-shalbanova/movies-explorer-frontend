import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section className='search-form'>
      <div className='search-form__wrapper'>
        <input
          className='search-form__input'
          type='text'
          placeholder='Фильм'
        />
        <button type='submit' className='search-form__button'>Поиск</button>
      </div>
      <FilterCheckbox>Короткометражки</FilterCheckbox>
      <div className='search-form__underline' />
    </section>
  );
}

export default SearchForm;
