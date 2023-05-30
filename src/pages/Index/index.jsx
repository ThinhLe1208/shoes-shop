import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles.module.scss';
import { productThunk } from 'redux/thunks/productThunk';
import Carousel from 'components/Carousel';
import Collection from 'components/Slider';
import Container from 'components/Container';

const Index = () => {
  const dispatch = useDispatch();
  const productByKeywordList = useSelector((state) => state.product.productByKeywordList);
  console.log('Index ~ productByKeywordList:', productByKeywordList);

  useEffect(() => {
    dispatch(productThunk.getProductByKeyword());
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <Carousel productList={productByKeywordList} />

      <div className={styles.container}>
        <Container>
          <Collection
            productList={productByKeywordList}
            title='Special Shoes'
            subTitle='Collection'
          />
        </Container>
      </div>
    </div>
  );
};

export default Index;
