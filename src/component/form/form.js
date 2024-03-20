import axios from 'axios';
import s from './form.module.scss';
import { useState, useEffect } from 'react';
import ReactPixel from 'react-facebook-pixel';
import moment from 'moment';
import 'moment-timezone';

function Form(props) {
 
 
  const saits = "VODILA_FAM";

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [country, setCountry] = useState('');
  const [nems, setPxl] = useState('');
  const [date, setDate] = useState('');

  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await axios.get('https://ipinfo.io/json');
        const data = response.data;
        setCountry(data.country);
      } catch (error) {
        console.error('Error fetching country:', error);
      }
    };

    fetchCountry();

    const urlParams = new URLSearchParams(window.location.search);
    const pxParam = urlParams.get('nems');
    setPxl(pxParam);

    // Set current date and time when component mounts
    const currentDate = moment().tz('Europe/Kiev').format();
    setDate(currentDate);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const name = formData.get('name');
    const phone = formData.get('phone');

    try {
      const requestData = {
        name: name,
        phone: phone,
        saits: saits,
        country: country,
        nems: nems,
        date: date,
      };

      // Send data to CRM server using Axios
      const response = await axios.post('https://crmmode.online/api/posts', requestData);

      // Output result to console
      console.log(response.data);

      // Send 'Lead' event to Facebook pixel
      ReactPixel.track('Lead');

      // Reset form after successful submission
      e.target.reset();

      // Show confirmation message
      setRestorel(true);
      setTimeout(() => {
        setRestorel(false);
      }, 7000);
    } catch (error) {
      console.error('Form submission failed', error);
    }
  };

  const [restorel, setRestorel] = useState(false);

  return (
    <div className={s.form}>
      <div className={s.form__container}>
        <form className={s.form__form} id='tg' onSubmit={handleSubmit}>
          <input className={s.form__input} type='name' name="name" placeholder='Имя' required/>
          <input className={s.form__input} type='name' name="phone" placeholder='Номер телеграм/ватсап' required/>
          <button className={s.form__button} type='submit'>{props.butt ? ('Отправить') : ('Оставить заявку')}</button>
          <label>
            <input className={s.form__radio} type='radio' name='social' required value={'WhatsApp или Telegram'}/>
            WhatsApp или Telegram
          </label>
          <label>
            <input className={s.form__radio} type='radio' name='social' value={'Нету WhatsApp или Telegram'}/>
            Нету WhatsApp или Telegram
          </label>
          {restorel && <div className={s.form__true}><p className={s.form__true_info}>С Вами свяжется специалист</p></div>}
        </form>
        <p className={s.form__accept}>Нажимая на кнопку, вы принимаете <a href="/" target="_blank">Положение</a> и <a href="/" target="_blank">Согласие</a> на обработку персональных данных.</p>
        <p className={s.form__accept}>Мы не передаем данные третьим лицам.</p>
      </div>
    </div>
  );
}

export default Form;
