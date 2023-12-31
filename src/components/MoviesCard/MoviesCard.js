import React from 'react';
import './MoviesCard.css';
import { useLocation } from 'react-router-dom';
import * as MainApi from '../../utils/MainApi';

function MoviesCard({
  movie,
  savedMovies,
  setSavedMovies,
  foundMovies,
  setFoundMovies,
  setIsFound,
  setResult,
}) {
  const location = useLocation();
  const isSaved = savedMovies.some((card) => card.movieId === movie.id);

  const movieSaveButtonClassName = `movies__save-button
  ${
    isSaved
      ? 'movies__save-button_type_saved'
      : 'movies__save-button_type_save '
  }`;

  const movieDeleteButtonClassName =
    'movies__save-button movies__save-button_type_delete';

  function convertDuration(minutes) {
    const min = minutes % 60;
    const hours = (minutes - min) / 60;
    const duration =
      hours.toString() + 'ч ' + (min < 10 ? '0' : '') + min.toString() + 'м';
    return duration;
  }

  async function handleSaveMovie(newMovie) {
    try {
      const data = await MainApi.saveMovie(newMovie);
      setSavedMovies([...savedMovies, data]);
    } catch (err) {
      console.error(err);
      setIsFound(false);
      setResult(
        'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
      );
    }
  }

  async function handleDeleteSavedMovie(movie) {
    try {
      await MainApi.deleteMovie(movie);
      const newSavedCards = savedMovies.filter((c) => c._id !== movie._id);
      setSavedMovies(newSavedCards);
      const newFoundCards = foundMovies.filter((c) => c._id !== movie._id);
      setFoundMovies(newFoundCards);
      localStorage.setItem('savedMovies', JSON.stringify(newSavedCards))
    } catch (err) {
      console.error(err);
      setIsFound(false);
      setResult(
        'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
      );
    }
  }

  async function handleDeleteMovie(movie) {
    try {
      const deletedMovie = savedMovies.find(
        (card) => card.movieId === movie.id
      );
      await MainApi.deleteMovie(deletedMovie);
      const newCards = savedMovies.filter((c) => c._id !== deletedMovie._id);
      setSavedMovies(newCards);
    } catch (err) {
      console.error(err);
      setIsFound(false);
      setResult(
        'Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз'
      );
    }
  }

  function handleClick(movie) {
    if (savedMovies === null) {
      const newMovie = {
        country: movie.country,
        description: movie.description,
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        image: `https://api.nomoreparties.co/${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`,
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN,
      };
      handleSaveMovie(newMovie);
    } else {
      const isSaved = savedMovies.some((card) => card.movieId === movie.id);
      if (!isSaved) {
        const newMovie = {
          country: movie.country,
          description: movie.description,
          director: movie.director,
          duration: movie.duration,
          year: movie.year,
          image: `https://api.nomoreparties.co/${movie.image.url}`,
          trailerLink: movie.trailerLink,
          thumbnail: `https://api.nomoreparties.co/${movie.image.formats.thumbnail.url}`,
          movieId: movie.id,
          nameRU: movie.nameRU,
          nameEN: movie.nameEN,
        };
        handleSaveMovie(newMovie);
      } else {
        handleDeleteMovie(movie);
      }
    }
  }

  return (
    <li className='movies__item'>
      <div className='movies__wrapper'>
        <h2 className='movies__title'>{movie.nameRU}</h2>
        <span className='movies__duration'>
          {convertDuration(movie.duration)}
        </span>
      </div>
      <a className='movies__trailer' href={movie.trailerLink} target='_blank' rel='noreferrer noopener'>
        <img
          src={
            location.pathname === '/movies'
              ? `https://api.nomoreparties.co/${movie.image.url}`
              : movie.image
          }
          alt={movie.nameRU}
          className='movies__image'
        />
      </a>
      <div className='movies__button-container'>
        <button
          type='button'
          className={
            location.pathname === '/movies'
              ? movieSaveButtonClassName
              : movieDeleteButtonClassName
          }
          onClick={
            location.pathname === '/movies'
              ? () => handleClick(movie)
              : () => handleDeleteSavedMovie(movie)
          }
        />
      </div>
    </li>
  );
}

export default MoviesCard;
