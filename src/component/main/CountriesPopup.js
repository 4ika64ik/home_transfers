// src/components/CountriesPopup.js
import React from 'react';
import s from './CountriesPopup.module.scss';

const CountriesPopup = ({ onClose }) => {
  const countries = ['Germany', 'France', 'England', 'Norway'];

  return (
    <div className={s.overlay}>
      <div className={s.popup}>
        <button className={s.closeButton} onClick={onClose}>×</button>
        <h2 className={s.popupTitle}>Список доступных стран</h2>
        <table className={s.table}>
          <tbody>
            {countries.map((country, index) => (
              <tr key={index}>
                <td>{country}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CountriesPopup;
