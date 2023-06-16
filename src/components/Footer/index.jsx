import React from 'react';
import { Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

import styles from './styles.module.scss';
import { footerList } from 'data/footerList';
import Container from 'components/Container';

const Footer = () => {
  return (
    <div className={styles.footerWrapper}>
      <Container className={styles.footerContainer}>
        <Row gutter={[32, 50]}>
          <Col
            span={24}
            sm={12}
            md={8}
            lg={6}
          >
            <p className={styles.footerTitleList}> {footerList?.onlineShopping?.title}</p>
            <ul className={styles.footerLinkList}>
              {footerList?.onlineShopping?.list?.map((link) => {
                return (
                  <li key={link.id}>
                    <Link to={link.src}>{link.name}</Link>
                  </li>
                );
              })}
            </ul>
          </Col>

          <Col
            span={24}
            sm={12}
            md={8}
            lg={6}
          >
            <p className={styles.footerTitleList}> {footerList?.usefulLinks?.title}</p>
            <ul className={styles.footerLinkList}>
              {footerList?.usefulLinks?.list?.map((link) => {
                return (
                  <li key={link.id}>
                    <Link to={link.src}>{link.name}</Link>
                  </li>
                );
              })}
            </ul>
          </Col>

          <Col
            span={24}
            sm={12}
            md={8}
            lg={6}
          >
            <p className={styles.footerTitleList}>EXPERIENCE APP ON MOBILE</p>

            <div className={styles.footerApp}>
              <div className={styles.appItem}>
                <Link to='#'>
                  <img
                    src={require('assets/images/apps.png')}
                    alt='goole_play'
                  />
                </Link>
              </div>
            </div>

            <p className={styles.footerTitleList}>EXPERIENCE APP ON MOBILE</p>

            <div className={styles.footerScocial}>
              <div className={styles.scocialItem}>
                <Link to='#'>
                  <FontAwesomeIcon icon={faFacebookF} />
                </Link>
              </div>
              <div className={styles.scocialItem}>
                <Link to='#'>
                  <FontAwesomeIcon icon={faTwitter} />
                </Link>
              </div>
              <div className={styles.scocialItem}>
                <Link to='#'>
                  <FontAwesomeIcon icon={faYoutube} />
                </Link>
              </div>
              <div className={styles.scocialItem}>
                <Link to='#'>
                  <FontAwesomeIcon icon={faInstagram} />
                </Link>
              </div>
            </div>
          </Col>

          <Col
            span={24}
            sm={12}
            lg={6}
          >
            <div className={styles.itemPolicy}>
              <img
                src={require('assets/images/origin.png')}
                alt='origin'
              />
              <p>
                100% ORIGINAL <span>guarantee for all products</span>
              </p>
            </div>
            <div className={styles.itemPolicy}>
              <img
                src={require('assets/images/return_30.png')}
                alt='return_3'
              />
              <p>
                Return within 30days<span> of receiving your order</span>
              </p>
            </div>
            <div className={styles.itemPolicy}>
              <img
                src={require('assets/images/free_delivery.png')}
                alt='free_delivery'
              />
              <p>
                Get free delivery <span> for every order above Rs. 1199</span>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
