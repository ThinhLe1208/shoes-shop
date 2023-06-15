import React, { useCallback, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './styles.module.scss';
import NikePath from '../NikePath';
import MainShoe from '../MainShoe';
import Info from '../Info';
import Navigation from '../Navigation';
import { carouselItemList } from 'data/carouselItemList';

const Carousel = () => {
    const [updatedList, setUpdatedList] = useState([
        carouselItemList[carouselItemList.length - 1],
        ...carouselItemList,
        carouselItemList[0]
    ]);
    const [currentProduct, setCurrentProduct] = useState(carouselItemList[1]);
    const [showBackground, setShowBackground] = useState(true);
    const delayCarousel = 0.8;

    const handleSetProduct = useCallback((id) => {
        let index = carouselItemList?.findIndex(item => item.id === id);
        let updatedProduct = carouselItemList[index];
        // improve logic later
        let preIndex = index - 1;
        if (preIndex < 0) {
            preIndex = carouselItemList.length - 1;
        }
        let preCloneIndex = preIndex - 1;
        if (preCloneIndex < 0) {
            preCloneIndex = carouselItemList.length - 1;
        }
        let nextIndex = index + 1;
        if (nextIndex > carouselItemList.length - 1) {
            nextIndex = 0;
        }
        let nextCloneIndex = nextIndex + 1;
        if (nextCloneIndex > carouselItemList.length - 1) {
            nextCloneIndex = 0;
        }
        let updatedList = [carouselItemList[preCloneIndex], carouselItemList[preIndex], carouselItemList[index], carouselItemList[nextIndex], carouselItemList[nextCloneIndex]];
        setCurrentProduct(updatedProduct);
        setUpdatedList(updatedList);
    }, []);

    return (
        <motion.div
            className={styles.wrapper}
            onViewportEnter={() => {
                setShowBackground(true);
            }}
            onViewportLeave={() => {
                setShowBackground(false);
            }}
        >
            <AnimatePresence>
                {showBackground && (
                    <motion.div className={styles.content}>
                        {/* background */}
                        <motion.p
                            className={styles.backgroundNike}
                            initial={{ left: '-100%' }}
                            animate={{ left: '50%' }}
                            transition={{ type: 'spring', ease: 'easeIn', duration: 2, delay: delayCarousel + 0.6 }}
                        >
                            NIKE
                        </motion.p>

                        <motion.div
                            className={styles.overlayBackground}
                        ></motion.div>

                        <NikePath delayCarousel={delayCarousel} />

                        {/* Slider */}

                        <div className={styles.slider}>
                            <div className={styles.infoContainer}>
                                <Info product={currentProduct} delayCarousel={delayCarousel} />
                            </div>

                            <div className={styles.mainShoeContainer}>
                                <MainShoe product={currentProduct} delayCarousel={delayCarousel} />
                            </div>

                            <div className={styles.navContainer}>
                                <AnimatePresence>
                                    <Navigation key={currentProduct?.id} handleSetProduct={handleSetProduct} updatedList={updatedList} />
                                </AnimatePresence>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div >
    );
};

export default Carousel
    ;