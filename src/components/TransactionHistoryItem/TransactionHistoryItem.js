import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistoryItem.module.css';

const TransactionHistoryItem = ({ type, amount, currency }) => (
  <tbody>
    <tr className={styles.tableTr}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  </tbody>
);

TransactionHistoryItem.propTypes = {
  // id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionHistoryItem;
