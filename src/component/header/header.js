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
        <div class={s.top}>
          <p className={s.logo}><span className={s.logo_home}>HOME</span>-Transfer</p>
          <div className={s.nav}>
            <a href='#usov' className={s.nav__item}>Условия</a>
            <a href='#etap' className={s.nav__item}>Этапы работы</a>
            <a href='#sotr' className={s.nav__item}>Для сотрудников</a>
            <div class={s.scale}><a href='#sendt' className={`${s.nav__item} ${s.nav__item_act}`}>Обратная связь</a></div>
          </div>
        </div>

        {isMenuVisible ? (
            <a href="#menu" onClick={handleClick}><img src={burgmenu} className={s.menu} alt='menu'/></a>
          ) : (
            <a href="#1" onClick={handleClick}><img src={burgmenu} className={s.menu} alt='menu'/></a>
          )
        }

        <div class={s.content}>
          <div class={s.infoe}>
            <h1 className={s.zagolovok}>Ищем водителей в русские семьи</h1>
            <p className={s.info}>Прием на работу без посредников <br></br>   Берлин-Германия</p>
            <a href='#sendform' className={s.button}>Оставить заявку</a>
          </div>
          <img src={car} className={s.car} alt='car'/>
        </div>
      </header>
  );
}

export default Header;