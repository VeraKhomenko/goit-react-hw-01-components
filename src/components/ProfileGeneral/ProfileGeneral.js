import React from 'react';
import PropTypes from 'prop-types';
// import user from './user.json';
import Profile from '../Profile/Profile';
import ProfileList from '../ProfileList/ProfileList';
import styles from './ProfileGeneral.module.css';
const ProfileGeneral = ({ user: { avatar, name, tag, location, stats } }) =>
	<div className={styles.profile}>
		<Profile
			avatar={avatar}
			name={name}
			tag={tag}
			location={location}
		/>
		<ProfileList stats={stats} />
	</div>

ProfileGeneral.propTypes = {
	user: PropTypes.object,
};
export default ProfileGeneral;