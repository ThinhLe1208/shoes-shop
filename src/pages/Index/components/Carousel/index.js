import React, { useCallback, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import styles from './styles.module.scss';
import NikePath from '../NikePath';
import MainShoe from '../MainShoe';
import Info from '../Info';
import Navigation from '../Navigation';

const productList = [
    {
        id: 0,
        brand: 'Nike',
        name: 'Zoom',
        subName: 'Fly 3',
        color: '#56ab2f',
        subColor1: '42, 245, 152',
        subColor2: '8, 174, 234',
        background: 'linear-gradient(40deg, #EE74E1 0%, #3EECAC 100%)',
        price: 230,
        image: require('../../../../assets/images/main_green.webp'),
        navImage: require('../../../../assets/images/nav_green.webp'),
        subShoeList: [
            { id: 0, image: require('../../../../assets/images/sub_green_1.webp') },
            { id: 1, image: require('../../../../assets/images/sub_green_2.webp') },
            { id: 2, image: require('../../../../assets/images/sub_green_3.webp') },
        ],
    },
    {
        id: 1,
        brand: 'Nike',
        name: 'ZoomX',
        subName: 'Vaporfly',
        color: '#CB356B',
        subColor1: '255, 90, 205',
        subColor2: '251, 218, 97',
        background: 'linear-gradient(40deg, #4158d0 0%, #c850c0 46%, #ffcc70 100%)',
        price: 370,
        image: require('../../../../assets/images/main_pink.webp'),
        navImage: require('../../../../assets/images/nav_pink.webp'),
        subShoeList: [
            { id: 0, image: require('../../../../assets/images/sub_pink_1.webp') },
            { id: 1, image: require('../../../../assets/images/sub_pink_2.webp') },
            { id: 2, image: require('../../../../assets/images/sub_pink_3.webp') },
        ]
    },
    {
        id: 2,
        brand: 'Nike',
        name: 'Air Zoom',
        subName: 'SuperRep',
        color: '#1c44ff',
        subColor1: '116, 235, 213',
        subColor2: '159, 172, 230',
        background: 'linear-gradient(40deg, #FC00FF 0%, #00DBDE 100%)',
        price: 410,
        image: require('../../../../assets/images/main_blue.webp'),
        navImage: require('../../../../assets/images/nav_blue.webp'),
        subShoeList: [
            { id: 0, image: require('../../../../assets/images/sub_blue_1.webp') },
            { id: 1, image: require('../../../../assets/images/sub_blue_2.webp') },
            { id: 2, image: require('../../../../assets/images/sub_blue_3.webp') },
        ]
    },
];

const Carousel = () => {
    console.log('render Carousel');
    const [updatedList, setUpdatedList] = useState([
        productList[productList.length - 1],
        ...productList,
        productList[0]
    ]);
    const [currentProduct, setCurrentProduct] = useState(productList[1]);
    const delayCarousel = 0.8;

    const handleSetProduct = useCallback((id) => {
        let index = productList?.findIndex(item => item.id === id);
        let updatedProduct = productList[index];
        // improve logic later
        let preIndex = index - 1;
        if (preIndex < 0) {
            preIndex = productList.length - 1;
        }
        let preCloneIndex = preIndex - 1;
        if (preCloneIndex < 0) {
            preCloneIndex = productList.length - 1;
        }
        let nextIndex = index + 1;
        if (nextIndex > productList.length - 1) {
            nextIndex = 0;
        }
        let nextCloneIndex = nextIndex + 1;
        if (nextCloneIndex > productList.length - 1) {
            nextCloneIndex = 0;
        }
        let updatedList = [productList[preCloneIndex], productList[preIndex], productList[index], productList[nextIndex], productList[nextCloneIndex]];
        setCurrentProduct(updatedProduct);
        setUpdatedList(updatedList);
    }, []);

    return (
        <div className={styles.wrapper}>
            {/* background */}
            <motion.p
                className={styles.backgroundNike}
                initial={{ left: '-100%' }}
                animate={{ left: '50%' }}
                transition={{ type: 'spring', ease: 'easeIn', duration: 2, delay: delayCarousel + 0.6 }}
            >
                NIKE
            </motion.p>
            <div className={styles.overlayBackground}></div>

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
        </div >
    );
};

export default Carousel
    ;