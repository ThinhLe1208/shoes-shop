import React, { useMemo, useRef } from 'react';

const SaleCaculationHOC = ({ product, saleProductList, Component }) => {
  // make a random point for a rate feature
  const starRef = useRef(Math.floor(Math.random() * 5 + 1));

  // make a random sale price for feature products, check this product is in saleProductList or not
  const salePrecentRef = useRef(Math.floor(Math.random() * 20 + 10));
  const randomSalePrice = useMemo(() => {
    const isSale = saleProductList.some((item) => item.id === product.id);
    if (isSale) {
      return Math.ceil((product?.price * 100) / (100 - salePrecentRef.current));
    } else {
      return null;
    }
  }, [product, saleProductList]);

  return (
    <Component
      product={product}
      star={starRef.current}
      randomSalePrecent={salePrecentRef.current}
      randomSalePrice={randomSalePrice}
    />
  );
};

export default SaleCaculationHOC;
