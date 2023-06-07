import React, { useMemo, useRef } from 'react';

const SaleCaculationHOC = ({ product, featureProductList, Component, ...rest }) => {
  // make a random point for a rate feature
  const starRef = useRef(Math.floor(Math.random() * 4 + 2));

  // make a random sale price for feature products, check this product is in featureProductList or not
  const salePrecentRef = useRef(Math.floor(Math.random() * 20 + 10));
  const randomSalePrice = useMemo(() => {
    const isSale = featureProductList.some((item) => item?.id === product?.id);
    if (isSale) {
      return Math.ceil((product?.price * 100) / (100 - salePrecentRef.current));
    } else {
      return null;
    }
  }, [product, featureProductList]);

  return (
    <Component
      product={product}
      star={starRef.current}
      randomSalePrecent={salePrecentRef.current}
      randomSalePrice={randomSalePrice}
      {...rest}
    />
  );
};

export default SaleCaculationHOC;
