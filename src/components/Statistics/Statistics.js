import React from 'react';
import PropTypes from 'prop-types';
import StatisticsList from '../StatisticsList/StatisticsList';
import styles from './Statistics.module.css';
const Statistics = ({ title, stats }) => (
  <section className={styles.statistics}>
    {title && <h2 className={styles.title}>{title}</h2>}
    <ul className={styles.list}>
      {stats.map(({ id, label, percentage }) => (
        <StatisticsList key={id} label={label} percentage={percentage} />
      ))}
    </ul>
  </section>
);

Statistics.defaultProps = {
  title: '',
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      // label: PropTypes.string.isRequired,
      // percentage: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

export default Statistics;
