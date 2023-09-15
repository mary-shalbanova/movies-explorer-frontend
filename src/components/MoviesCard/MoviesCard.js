import React from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';

function MoviesCard({ movie }) {
  const location = useLocation();
  const [isSaved, setIsSaved] = React.useState(false);

  const movieSaveButtonClassName = `movies__save-button
  ${
    isSaved
      ? 'movies__save-button_type_saved'
      : 'movies__save-button_type_save '
  }`;

  const movieDeleteButtonClassName ='movies__save-button movies__save-button_type_delete';

  return (
    <li className='movies__item'>
      <div className='movies__wrapper'>
        <h2 className='movies__title'>{movie.name}</h2>
        <span className='movies__duration'>{movie.duration}</span>
      </div>
      <img src={movie.link} alt={movie.name} className='movies__image' />
      <div className='movies__button-container'>
        <button
          type='button'
          className={location.pathname === '/movies' ? movieSaveButtonClassName : movieDeleteButtonClassName}
          onClick={() => setIsSaved((prevValue) => !prevValue)}
        />
      </div>
    </li>
  );
}

export default MoviesCard;
