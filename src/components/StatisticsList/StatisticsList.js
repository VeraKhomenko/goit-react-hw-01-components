import React from 'react';
import PropTypes from 'prop-types';
import styles from './StatisticsList.module.css';

const r = () => Math.floor(Math.random() * 256);
const randomColor = () => 'rgb(' + r() + ',' + r() + ',' + r() + ', 0.9)';

const StatisticsList = ({ label, percentage }) => (
  <li className={styles.item} style={{ backgroundColor: randomColor() }}>
    <span className={styles.label}>{label}</span>
    <span className={styles.percentage}>{percentage}%</span>
  </li>
);

StatisticsList.propTypes = {
  // id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticsList;
