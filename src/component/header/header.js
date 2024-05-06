import s from './header.module.scss'
import burgmenu from '../../image/icon/icon-burger-menu.png'
import car from '../../image/car/car2.png'
import React, { useState } from 'react'

function Header() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const handleClick = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
      <header className={s.header}>
        <div className={s.top}>
          <p className={s.logo}><span className={s.logo_home}>HOME</span>-Transfer</p>
          <div className={s.nav}>
            <a href='#usov' className={s.nav__item}>Условия</a>
            <a href='#etap' className={s.nav__item}>Этапы работы</a>
            <a href='#sotr' className={s.nav__item}>Для сотрудников</a>
            <div className={s.scale}>
              <a href='#sendt' className={`${s.nav__item} ${s.nav__item}_act`}>Обратная связь</a>
            </div>
          </div>
        </div>

        <a href={isMenuVisible ? "#menu" : "#1"} onClick={handleClick}>
          <img src={burgmenu} className={s.menu} alt='menu'/>
        </a>

        <div className={s.content}>
          <div className={s.infoe}>
            <h1 className={s.zagolovok}>Ищем водителей по всей Европе</h1>
            <p className={s.info}>
              Присоединяйтесь к нашей команде и наслаждайтесь конкурентоспособной зарплатой, <br />
              гибким графиком.
            </p>
            <a href='#sendform' className={s.button}>Оставить заявку</a>
          </div>
          <img src={car} className={s.car} alt='car'/>
        </div>
      </header>
  );
}

export default Header;
