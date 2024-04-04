import s from './footer.module.scss';

const Footer = () => {
  return (
    <footer className={s.footer}>
      <div className={s.block1}>
        <p className={s.item}><span className={s.sva}>Номер:</span> +49 176 13941922</p>
        <p className={s.item}><span className={s.sva}>Адресс:</span> Mauerstraße 12, 10117 Berlin</p>
        <p className={s.item}><span className={s.sva}>Почта:</span> workwhisperergroup@web.de</p>
      </div>
      <div className={s.block1}>
        <p className={s.item}>Impressum</p>
        <p className={s.item}>Datenschutz</p>
        <p className={s.item}>Unternehmensleitbild</p>
      </div>
      <p className={s.block1}>© 2017 | WorkWhisperer Group</p>
    </footer>
  )
}

export default Footer;