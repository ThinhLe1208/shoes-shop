import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles.module.scss';
import { productThunk } from 'redux/thunks/productThunk';
import Carousel from 'components/Carousel';
import Collection from 'components/Collection';

const Index = () => {
  const dispatch = useDispatch();
  const productByKeywordList = useSelector((state) => state.productSlice.productByKeywordList);
  console.log('Index ~ productByKeywordList:', productByKeywordList);

  useEffect(() => {
    dispatch(productThunk.getProductByKeyword());
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <Carousel productList={productByKeywordList} />
      {/* <Collection productList={productByKeywordList} /> */}
    </div>
  );
};

export default Index;
