import React from 'react';
import './MoviesCardList.css';
import { movies } from '../../utils/constants';
import MoviesCard from '../MoviesCard/MoviesCard';

function MoviesCardList() {
  return (
    <section className='movies-card-list'>
      <ul className='movies'>
        {movies.map((movie) => (
          <MoviesCard
            key={movie._id}
            movie={movie}
          />
        ))}
      </ul>
    </section>
  );
}

export default MoviesCardList;
