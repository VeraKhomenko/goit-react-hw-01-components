import React from 'react';
import ProfileListItem from "../ProfileListItem/ProfileListItem";
import PropTypes from 'prop-types';
import styles from './ProfileList.module.css';
const ProfileList = ({ stats }) => (
  <ul className={styles.stats}>
    {Object.entries(stats).map(([ key, value ]) => (
      <ProfileListItem key={key} label={key} quantity={value} />
    ))}

  </ul>
);

ProfileList.propTypes = {
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};
export default ProfileList;
