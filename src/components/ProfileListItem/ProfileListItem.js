import React from 'react';
// import Profile from "./Profile";
import PropTypes from 'prop-types';
import styles from './ProfileListItem.module.css';


const ProfileListItem = ({ label, quantity }) => (

  <li className={styles.item}>
    <span className={styles.label}>{label}</span>
    <span className={styles.quantity}>{quantity}</span>
  </li>

);


ProfileListItem.defaultProps = {
  quantity: 0,
};

ProfileListItem.prototype = {
  label: PropTypes.string.isRequired,
  quantity: PropTypes.number,
};
export default ProfileListItem;
