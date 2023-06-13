import React from 'react';

import styles from './styles.module.scss';

const Loading = () => {
    console.log('render Loading');
    return (
        <div className={styles.wrapper}>
            <p>Loading</p>
        </div>
    );
};

export default Loading;

