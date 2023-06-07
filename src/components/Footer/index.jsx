import React from 'react';
import styles from './styles.module.scss';

const Footer = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Subscribe Now</h1>
          <p>Whether you need to sell your products, share some big news</p>
          <div className={styles.contactEmail}></div>
        </div>
        <div className={styles.body}>
          <div className={styles.item}>
            <h1>
              <img
                src='https://cdn.shopify.com/s/files/1/0567/9169/5421/files/Group_1863_226x.png?v=1650346870'
                alt=''
              />
            </h1>
            <ul>
              <li>4800 San Mateo Ln NE</li>
              <li>(505) 881-0080</li>
              <li>your@email.com</li>
            </ul>
          </div>
          <div className={styles.item}>
            <h1>Extra</h1>
            <ul>
              <li>
                <p>Search</p>
              </li>
              <li>
                <p>News</p>
              </li>
              <li>
                <p>All Collections</p>
              </li>
              <li>
                <p>All Products</p>
              </li>
            </ul>
          </div>
          <div className={styles.item}>
            <h1>Service</h1>
            <ul>
              <li>
                <p>About Us</p>
              </li>
              <li></li>
              <li>
                <p>Wishlist</p>
              </li>
              <li>
                <p>Information</p>
              </li>
              <li>
                <p>Privacy Policy</p>
              </li>
              <li>
                <p>Terms & Conditions</p>
              </li>
            </ul>
          </div>
          <div className={styles.item}>
            <h1>Language & Currency</h1>
            <ul>
              <li>a</li>
              <li>a</li>
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.footer}>
        <div className={styles.content}>
          <div className={styles.contentLeft}>
            <p>© 2023,</p>
            <p>TabBase</p>
            <span></span>
            <p>Powered by Shopify</p>
          </div>
          <div className={styles.contentRight}>a a a a a a</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
