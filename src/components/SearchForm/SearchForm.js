import React from 'react';
import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';

function SearchForm({
  isChecked,
  searchInput,
  setSearchInput,
  searchMovies,
  filterMovies,
}) {


  function handleChange(e) {
    setSearchInput(e.target.value);
  }

  return (
    <section>
      <form className='search-form' onSubmit={searchMovies} noValidate>
        <div className='search-form__wrapper'>
          <input
            className='search-form__input'
            type='text'
            placeholder='Фильм'
            required={true}
            value={searchInput}
            onChange={handleChange}
          />
          <button type='submit' className='search-form__button'>
            Поиск
          </button>
        </div>
        <FilterCheckbox
          isChecked={isChecked}
          onChange={filterMovies}
        >
          Короткометражки
        </FilterCheckbox>
      </form>
    </section>
  );
}

export default SearchForm;
