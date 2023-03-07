import React from 'react';
import PropTypes from 'prop-types';

import style from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  return (
<div className={style.container}>
      <table className={style.transactionHistory}>
        <thead>
          <tr className={style.head}>
            <th className={style.headItem}>Type</th>
            <th className={style.headItem}>Amount</th>
            <th className={style.headItem}>Currency</th>
          </tr>
        </thead>
  
        <tbody>
          {items.map(element => (
            <tr key={element.id} className={style.counts}>
              <td className={style.count}>{element.type}</td>
              <td className={style.count}>{element.amount}</td>
              <td className={style.count}>{element.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
</div>
  );
  }

export default TransactionHistory

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};