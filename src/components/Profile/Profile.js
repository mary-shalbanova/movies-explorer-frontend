import React from 'react';
import { Link } from 'react-router-dom';
import './Profile.css';
import Header from '../Header/Header';
import InputError from '../InputError/InputError';
import FormButton from '../FormButton/FormButton';

function Profile({ isLoggedIn }) {
  const [errorMessage, setErrorMessage] = React.useState(
    ''
  );
  const [isEdited, setIsEdited] = React.useState(false);

  return (
    <>
      <Header isLoggedIn={isLoggedIn} />
      <div className='profile'>
        <h2 className='profile__title'>Привет, Виталий!</h2>
        <form className='profile__form' name='profile-form'>
          <fieldset className='profile__input-container'>
            <div className='profile__field-wrapper'>
              <label className='profile__form-label'>Имя</label>
              <input type='text' className='profile__form-input' />
            </div>
            <div className='profile__field-wrapper'>
              <label className='profile__form-label'>E-mail</label>
              <input type='email' className='profile__form-input' />
            </div>
          </fieldset>
          {isEdited ? (
            <>
              {errorMessage && <InputError errorMessage={errorMessage} />}
              <FormButton
                buttonTitle='Сохранить'
                isValid={errorMessage ? false : true}
              />
            </>
          ) : (
            <>
              <button
                className='profile__button'
                onClick={() => setIsEdited(true)}
              >
                Редактировать
              </button>
              <Link to='/signin' className='profile__link'>
                <button className='profile__button profile__button_type_exit'>
                  Выйти из аккаунта
                </button>
              </Link>
            </>
          )}
        </form>
      </div>
    </>
  );
}

export default Profile;
