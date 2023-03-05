import React from 'react';
import style from './Statistics.modul.css';

const Statistics = ({ title, stats }) => {
  return <section className="statistics">
    <h2 className="title" show={title}>{ title }</h2>
      <ul className="stat-list">
      {
        stats.map((element) => (
          <li className="item" key={element.id}>
            <span className="label">{element.label} </span>
            <span className="percentage">{element.percentage}%</span>
          </li>
        ))
      }
      </ul>
    </section>
};

export default Statistics

