import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles.module.scss';
import { productThunkAction } from 'redux/thunkActions/productThunkAction';

export default function Index() {
  const dispatch = useDispatch();

  const { storeList } = useSelector((state) => state.productReducer);

  useEffect(() => {
    dispatch(productThunkAction.getAllStore());
  }, [dispatch]);

  console.log(storeList);
  return <div>Index</div>;
}
