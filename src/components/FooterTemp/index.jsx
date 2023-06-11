import React from 'react';
import styles from './styles.module.scss';
import { Divider, Select } from 'antd';
import { FacebookFilled, InstagramFilled, TwitterOutlined, YoutubeFilled } from '@ant-design/icons';

const FooterTemp = () => {
  return (
    <footer className={styles.wrapper}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Subscribe Now</h1>
          <p>Whether you need to sell your products, share some big news</p>
        </div>
        <Divider />
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
              <li>Search</li>
              <li>News</li>
              <li>All Collections</li>
              <li>All Products</li>
            </ul>
          </div>
          <div className={styles.item}>
            <h1>Service</h1>
            <ul>
              <li>About Us</li>
              <li></li>
              <li>Wishlist</li>
              <li>Information</li>
              <li>Privacy Policy</li>
              <li>Terms & Conditions</li>
            </ul>
          </div>
          <div className={styles.item}>
            <h1>Language & Currency</h1>
            <ul>
              <li>
                <Select
                  defaultValue='United States (USD S)'
                  style={{
                    width: 300,
                    backgroundColor: 'transparent',
                  }}
                  options={[
                    {
                      value: 'United States (USD S)',
                      label: 'United States (USD S)',
                    },
                    {
                      value: 'France (EUR C)',
                      label: 'France (EUR C)',
                    },
                    {
                      value: 'Egypt (EGP)',
                      label: 'Egypt (EGP)',
                    },
                  ]}
                />
              </li>
              <li>
                <Select
                  defaultValue='English'
                  style={{
                    width: 300,
                    backgroundColor: 'transparent',
                  }}
                  options={[
                    {
                      value: 'English',
                      label: 'English',
                    },
                    {
                      value: 'Vietnamese',
                      label: 'Vietnamese',
                    },
                  ]}
                />
              </li>
              <li>
                <span className={styles.icon}>
                  <TwitterOutlined />
                </span>
                <span className={styles.icon}>
                  <FacebookFilled />
                </span>
                <span className={styles.icon}>
                  <YoutubeFilled />
                </span>
                <span className={styles.icon}>
                  <InstagramFilled />
                </span>
              </li>
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
            <p>'Powered by Shopify</p>
          </div>
          <div className={styles.contentRight}>
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR36iP1b-yoCNDzSnYUbKOktgHB0JMm64DuUsMIHtJw1P6wzo7dTfy_cxadONRDx8XohWQ&usqp=CAU'
              alt=''
            />
            <img
              src='https://adina.com.vn/wp-content/uploads/2016/07/mastercard_logo.png'
              alt=''
            />
            <img
              src='data:image/png;base64,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'
              alt=''
            />
            <img
              src='data:image/jpeg;base64,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'
              alt=''
            />
            <img
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1B-1JkRKA-oFZRv7PWAZkSuvaoKAvvRYkXA&usqp=CAU'
              alt=''
            />
            <img
              src='data:image/png;base64,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'
              alt=''
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterTemp;
