import React from 'react';
import { motion } from 'framer-motion';

import styles from './styles.module.scss';

const container = {
  hidden: { opacity: 0, height: 0, transition: { staggerChildren: 0.05 } },
  show: {
    opacity: 1,
    height: 'auto',
    transition: { when: 'beforeChildren', staggerChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: '100%' },
  show: { opacity: 1, y: 0 },
};

const List = ({ children, listStyle }) => {
  return (
    <motion.ul
      variants={container}
      initial='hidden'
      whileInView='show'
      style={listStyle}
    >
      {children.map((child, index) => (
        <li key={index}>
          <motion.div variants={item}>{child}</motion.div>
        </li>
      ))}
    </motion.ul>
  );
};

const Slogan = () => {
  return (
    <div className={styles.wrapper}>
      <List>
        <h3>NIKE AIR</h3>
        <h3>“ZOOM”</h3>
        <h3>
          <span className={styles.accent}>PEGASUS</span>
        </h3>
        <h4>Running Shoes</h4>
        <p className={styles.accent}>$98.97</p>
        <p>
          Year after year Pegasus has proven itself on the feet of runners everywhere. Now our most trusted style
          returns with new innovations that make it more itself than ever.
        </p>
      </List>
    </div>
  );
};

const Sub = ({ className, title, content, listStyle, ...rest }) => {
  return (
    <div
      className={styles.wrapper + ' ' + styles.right + ' ' + className}
      {...rest}
    >
      <List listStyle={listStyle}>
        <h3>{title}</h3>
        <p>{content}</p>
      </List>
    </div>
  );
};

Slogan.Sub = Sub;

export default Slogan;
