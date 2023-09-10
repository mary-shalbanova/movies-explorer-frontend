import React from 'react';
import './AboutMe.css';
import Title from '../Title/Title';
import photo from '../../images/photo.jpg';

function AboutMe() {
  return (
    <section className='student'>
      <Title>Cтудент</Title>
      <div className='student__wrapper'>
        <div className='student__info'>
          <h3 className='student__name'>Мария</h3>
          <p className='student__profession'>
            Фронтенд&#8209;разработчик, 30 лет
          </p>
          <p className='student__bio'>
            Я живу в Москве, закончила факультет логистики РАНХиГС. Я люблю
            слушать музыку, а ещё увлекаюсь бегом. Недавно начала кодить. С 2017
            года работаю в компании «ООО Джонсон и Джонсон». После того, как
            прошла курс по веб&#8209;разработке, планирую уйти с постоянной
            работы и начать карьеру в веб&#8209;разработке.
          </p>
          <a
            href='https://github.com/mary-shalbanova'
            target='_blank'
            rel='noreferrer noopener'
            className='student__github'
          >
            Github
          </a>
        </div>
        <img className='student__photo' src={photo} alt='фото студента' />
      </div>
    </section>
  );
}

export default AboutMe;
