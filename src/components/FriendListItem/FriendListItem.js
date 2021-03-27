import React from 'react';
import PropTypes from 'prop-types';
import defaultImage from './default.jpg';
import styles from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={styles.item}>
    <span className={isOnline ? styles.isOnline : styles.isOffline}>
      {isOnline}</span>
    <img className={styles.avatar} src={avatar} alt="" width="48" />
    <p className={styles.name}>{name}</p>
  </li>
);

FriendListItem.defaultProps = {
  avatar: defaultImage,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
