import React from 'react';
import './Promo.css';
import world from '../../images/web-world.svg';

function Promo() {
  return (
    <section className='promo'>
      <div className='promo__content'>
        <div>
          <h1 className='promo__title'>
            Учебный проект студента факультета Веб&#8209;разработки.
          </h1>
          <p className='promo__text'>
            Листайте ниже, чтобы узнать больше про этот проект и его создателя.
          </p>
        </div>
        <img className='promo__image' alt='мир вэба' src={world} />
      </div>
      <a href='#about-project'>
        <button className='promo__button'>Узнать больше</button>
      </a>
    </section>
  );
}

export default Promo;
