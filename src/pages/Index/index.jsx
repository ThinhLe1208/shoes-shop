import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles.module.scss';
import { productThunk } from 'redux/thunks/productThunk';
import Carousel from 'components/Carousel';
import Collection from 'components/Collection';
import Container from 'components/Container';

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
      <Container>
        <Collection productList={productByKeywordList} title='Special Shoes' subTitle='Collection' />
      </Container>
    </div>
  );
};

export default Index;
