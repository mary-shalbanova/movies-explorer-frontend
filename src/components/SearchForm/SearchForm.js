import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm() {
  return (
    <section>
      <form className='search-form'>
        <div className='search-form__wrapper'>
          <input
            className='search-form__input'
            type='text'
            placeholder='Фильм'
            required={true}
          />
          <button type='submit' className='search-form__button'>
            Поиск
          </button>
        </div>
        <FilterCheckbox>Короткометражки</FilterCheckbox>
      </form>
    </section>
  );
}

export default SearchForm;
