import React from 'react';
import PropTypes from 'prop-types';

import style from './Statistics.module.css';

function getRandomHexColor() {
  let bgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  return bgColor;
}

const Statistics = ({ title, stats }) => {
  return <section className={style.statistics}>
    <h2 className={style.title} show={title}>{ title }</h2>
    <ul className={style.stats}>
      {
        stats.map((element) => (
          <li className={style.stat} key={element.id} style={{ backgroundColor: getRandomHexColor() }}>
            <span className="label">{element.label} </span>
            <span className="percentage">{element.percentage}%</span>
          </li>
        ))
      }
      </ul>
    </section>
};

export default Statistics

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ).isRequired,
};