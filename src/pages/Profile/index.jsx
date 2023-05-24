import React, { useEffect } from 'react';

import styles from './styles.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { usersThunk } from 'redux/thunks/usersThunk';

const Profile = () => {
  const dispatch = useDispatch();
  const userProfile = useSelector((state) => state.usersSlice.userProfile);
  console.log('Profile ~ userProfile:', userProfile);

  useEffect(() => {
    dispatch(usersThunk.getProfile());
  }, [dispatch]);

  return (
    <>
      <img src={userProfile?.avatar} alt='avatar' style={{ width: '200px' }} />
      <p>Name : {userProfile?.name}</p>
      <p>Email : {userProfile?.email}</p>
    </>
  );
};

export default Profile;
