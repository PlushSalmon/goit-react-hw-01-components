import React from 'react';
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