import s from './abaut-us.module.scss'

function Abaut() {

  return (
    <section className={s.abaut}>
      <h2 className={s.abaut__title}>Факты о нашей компании</h2>
      <p className={s.abaut__info}>Работаем с 2017 года, за это время мы смогли добиться лучших условий работы для наших сотрудников, 99,8% человек остались довольны нашим сотрудничеством. </p>
    </section>
  );
}

export default Abaut;