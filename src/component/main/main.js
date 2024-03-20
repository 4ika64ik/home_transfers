import s from './main.module.scss'
import ride from '../../image/car/ride3.png'
import Etap from './etap/etap';
import Sotr from './sotr/sotr';
import SendForm from './sendform/sendform';
import SendTwoForm from './sendtwoform/sendtwoform';
import Abaut from './abaut-us/abaut-us';

function Main() {
  return (
      <main className={s.main}>
        <div className={s.main__container}>
          <section className={s.umov} id='usov'>
            <img src={ride} className={s.umov__ride} alt='ride'/>
            <div className={s.umov__content}>
              <h2 className={s.umov__title}>УСЛОВИЯ РАБОТЫ</h2>
              <p className={s.umov__whyme}>Почему именно мы:</p>
              <div className={s.umov__info}>
                <p className={s.umov__item}>ЗП от 2800Є</p>
                <p className={s.umov__item}>Полностью отвечаем за автомобили которые предоставляем</p>
              </div>
              <div className={s.umov__info}>
                <p className={s.umov__item}>Своевременные выплаты, дважды в месяц </p>
                <p className={s.umov__item}>Оплачиваем жильё </p>
              </div>
              <a href='#sotr' className={s.vigoda}>Выгодные условия для сотрудников</a>
            </div>
          </section>
        </div>
        <Etap />
        <Sotr />
        <SendForm />
        <Abaut />
        <SendTwoForm />
      </main>
  );
}

export default Main;