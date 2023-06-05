import React, { useEffect } from 'react';
import { Button, Col, Row, Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

import styles from './styles.module.scss';
import Container from 'components/Container';
import Breadcrumb from 'components/Breadcrumb';
import QuantityField from 'components/QuantityField';
import { removeCart } from 'redux/slices/cartSlice';
import { storage } from 'utils/storage';
import { history } from 'utils/history';
import { notifications } from 'utils/notifications';

const Cart = () => {
  const { cartList, totalPrice } = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const isLogin = storage.checkLogin();
    if (!isLogin) {
      notifications.error('You must log in first.');
      history.push('/login');
    }
  }, []);

  const breadCrumbList = [{ href: '/', title: 'Home' }, { title: 'Cart' }];

  const handleDeleteProduct = (id) => {
    dispatch(removeCart(id));
  };

  const columns = [
    {
      title: 'PRODUCT',
      dataIndex: 'product',
      key: 'product',
      width: 160,
      render: (data) => {
        return (
          <img
            src={data?.image}
            alt='img'
          />
        );
      },
    },
    {
      title: 'INFO',
      dataIndex: 'info',
      key: 'info',
      render: (data) => {
        return (
          <div className={styles.infoCell}>
            <Link
              className={styles.name}
              to={`/detail/${data?.id}`}
            >
              {data?.name}
            </Link>
            <p className={styles.info}>
              <span>Size:</span> 32
            </p>
            <p className={styles.info}>
              <span>Color:</span> black
            </p>
            <p className={styles.price}>${data?.price}</p>
          </div>
        );
      },
    },
    {
      title: 'QUANTITY',
      dataIndex: 'quantity',
      key: 'quantity',
      render: (data) => {
        return (
          <div className={styles.quantityCell}>
            <QuantityField
              product={data}
              large
            />
            <FontAwesomeIcon
              className={styles.trahsIcon}
              icon={faTrashCan}
              onClick={() => handleDeleteProduct(data?.id)}
            />
          </div>
        );
      },
    },
    {
      title: 'TOTAL',
      dataIndex: 'total',
      key: 'total',
      align: 'right',
      render: (data) => {
        return <p className={styles.subPrice}>${(data?.qty * data?.price).toLocaleString()}</p>;
      },
    },
  ];

  const data = cartList.map((item, index) => ({
    key: index,
    product: item,
    info: item,
    quantity: item,
    total: item,
  }));

  return (
    storage.checkLogin() && (
      <div className={styles.wrapper}>
        <Container>
          <Breadcrumb breadCrumbList={breadCrumbList} />
          <h3 className={styles.heading}>Your Cart</h3>

          <Row
            align={'top'}
            gutter={16}
          >
            <Col span={18}>
              <Table
                columns={columns}
                dataSource={data}
                rowKey={'key'}
                pagination={{ position: ['bottomRight'], defaultPageSize: 4 }}
              />
            </Col>
            <Col span={6}>
              <div className={styles.tableFooter}>
                <p className={styles.price}>
                  <span>Subtotal :</span>
                  <span>${totalPrice}</span>
                </p>
                <p className={styles.subInfo}>Taxes and shipping calculated at checkout</p>
                <Button
                  type='primary'
                  block
                  onClick={() => navigate('/')}
                >
                  Continue Shopping
                </Button>
                <Button
                  type='primary'
                  block
                  onClick={() => navigate('/checkout')}
                >
                  Check Out
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  );
};

export default Cart;
