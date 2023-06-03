import React from 'react';

import styles from './styles.module.scss';

const Carousel = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.slider}>
        {/* SLIDE 1 */}
        <div className={styles.row + ' ' + styles.fullheight + ' ' + styles.slide + ' ' + styles.active}>
          <div className={styles.col6 + ' ' + styles.fullheight}>
            {/* PRODUCT INFO */}
            <div className={styles.productInfo}>
              <div className={styles.infoWrapper}>
                <div className={styles.productPrice + ' ' + styles.leftToRight}>
                  <span>$</span>230
                </div>
                <div className={styles.productName + ' ' + styles.leftToRight}>
                  <h2>Nike ZoomX Vaporfly NEXT%</h2>
                </div>
                <div className={styles.productSize + ' ' + styles.leftToRight}>
                  <h3>SIZE</h3>
                  <div className={styles.sizeWrapper}>
                    <div>35</div>
                    <div>36</div>
                    <div className={styles.active}>37</div>
                    <div>38</div>
                    <div>39</div>
                    <div>40</div>
                  </div>
                </div>
                <div className={styles.productColor + ' ' + styles.leftToRight}>
                  <h3>COLORS</h3>
                  <div className={styles.colorWrapper}>
                    <div className={styles.active}>
                      <div className={styles.bgRed} />
                    </div>
                    <div className=''>
                      <div className={styles.bgBlue} />
                    </div>
                    <div className=''>
                      <div className={styles.bgWhite} />
                    </div>
                  </div>
                </div>
                <div className={styles.productDescription + ' ' + styles.leftToRight}>
                  <p>
                    The Nike ZoomX Vaporfly NEXT% clears your path to record-breaking speed with a lighter design and
                    faster feel than before. With more cushioning underfoot and reduced weight up top, the result is
                    unprecedented energy return and comfort
                  </p>
                </div>
                <div className={styles.button + ' ' + styles.leftToRight}>
                  <button>Add to cart</button>
                </div>
              </div>
            </div>
            {/* END PRODUCT INFO */}
          </div>
          <div
            className={styles.col6 + ' ' + styles.fullheight + ' ' + styles.imgCol}
            style={{ backgroundImage: 'linear-gradient(to top right, #e19e95, #fd835c)' }}
          >
            {/* PRODUCT IMAGE */}
            <div className={styles.productImg}>
              <div className={styles.imgWrapper + ' ' + styles.rightToLeft}>
                <div className={styles.bounce}>
                  <img
                    src={require('../../assets/images/zoomx-vaporfly-next-running-shoe-4Q5jfG.png')}
                    alt='placeholder'
                  />
                </div>
              </div>
            </div>
            {/* END PRODUCT IMAGE */}
            {/* PRODUCT MORE IMAGES */}
            <div className={styles.moreImages}>
              <div className={styles.moreImagesItem + ' ' + styles.bottomUp}>
                <img
                  src={require('../../assets/images/zoomx-vaporfly-next-running-shoe-4Q5jfG-1.jpg')}
                  alt='placeholder'
                />
              </div>
              <div className={styles.moreImagesItem + ' ' + styles.bottomUp}>
                <img
                  src={require('../../assets/images/zoomx-vaporfly-next-running-shoe-4Q5jfG (1).jpg')}
                  alt='placeholder'
                />
              </div>
              <div className={styles.moreImagesItem + ' ' + styles.bottomUp}>
                <img
                  src={require('../../assets/images/zoomx-vaporfly-next-running-shoe-4Q5jfG (3).jpg')}
                  alt='placeholder'
                />
              </div>
              <div className={styles.moreImagesItem + ' ' + styles.bottomUp}>
                <img
                  src={require('../../assets/images/zoomx-vaporfly-next-running-shoe-4Q5jfG (4).jpg')}
                  alt='placeholder'
                />
              </div>
            </div>
            {/* ENDPRODUCT MORE IMAGES */}
          </div>
        </div>
        {/* END SLIDE 1 */}

        {/* SLIDE CONTROL */}
        <div className={styles.slideControl}>
          <div className='slideControlItem'>
            <img src={require('../../assets/images/zoomx-vaporfly-next-running-shoe-4Q5jfG.png')} alt='placeholder' />
          </div>
          <div className='slideControlItem'>
            <img src={require('../../assets/images/zoom-fly-3-mens-running-shoe-XhzpPH.png')} alt='placeholder' />
          </div>
          <div className='slideControlItem'>
            <img
              src={require('../../assets/images/air-max-alpha-tr-3-mens-training-shoe-0C1CV7.png')}
              alt='placeholder'
            />
          </div>
          <div className='slideControlItem'>
            <img
              src={require('../../assets/images/air-zoom-superrep-mens-hiit-class-shoe-ZWLnJW (1).png')}
              alt='placeholder'
            />
          </div>
        </div>
        {/* END SLIDE CONTROL */}
      </div>
    </div>
  );
};

export default Carousel;
