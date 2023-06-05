import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles.module.scss';
import { usersThunk } from 'redux/thunks/usersThunk';
import { storage } from 'utils/storage';
import Container from 'components/Container';
import Breadcrumb from 'components/Breadcrumb';
import UserInfo from './components/UserInfo';
import UserOrderHistory from './components/UserOrderHistory';
import UserFavorite from './components/UserFavorite';

const Profile = () => {
  const dispatch = useDispatch();
  const { userProfile, isLoading } = useSelector((state) => state.users);
  console.log('Profile ~ userProfile:', userProfile);

  const breadCrumbList = [{ href: '/', title: 'Home' }, { title: 'Profile' }];

  useEffect(() => {
    dispatch(usersThunk.getProfile());
    dispatch(usersThunk.getProductfavorite());
  }, [dispatch]);

  return (
    storage.checkLogin() && (
      <div className={styles.wrapper}>
        <Container>
          <Breadcrumb breadCrumbList={breadCrumbList} />

          <div className={styles.userInfo}>
            <UserInfo
              userProfile={userProfile}
              isLoading={isLoading}
            />
          </div>
          <div className={styles.userFavorite}>
            <h3 className={styles.title}>Favorite Shoes</h3>
            <UserFavorite />
          </div>
          <div className={styles.userOrders}>
            <h3 className={styles.title}>Orders History</h3>
            <UserOrderHistory userProfile={userProfile} />
          </div>
        </Container>
      </div>
    )
  );
};

export default Profile;
