import React, { useEffect, useRef } from 'react';
import { Outlet, useHref } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles.module.scss';
import Footer from 'components/Footer';
import Header from 'components/Header';
import { productThunk } from 'redux/thunks/productThunk';

const HomeTemplate = () => {
  const outletRef = useRef();
  const href = useHref();
  const dispatch = useDispatch();
  const productByKeywordList = useSelector((state) => state.product.productByKeywordList);
  console.log('Index ~ productByKeywordList:', productByKeywordList.default);

  // the index page dont need a paddding-top
  useEffect(() => {
    if (href === '/' || href === '/index') {
      outletRef.current.style.paddingTop = 0;
    } else {
      outletRef.current.style.paddingTop = 'var(--padding-top-header)';
    }
  }, [href]);

  useEffect(() => {
    dispatch(productThunk.getProductByKeyword());
    dispatch(productThunk.getProductByFeature(true));
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <Header />
      <div ref={outletRef}>
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default HomeTemplate;
