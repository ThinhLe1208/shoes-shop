import React from 'react';
import { Collapse, Table } from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment';

import styles from './styles.module.scss';

const { Panel } = Collapse;

const UserTable = ({ userProfile }) => {
  const columns = [
    {
      title: 'PRODUCT',
      dataIndex: 'product',
      key: 'product',
      align: 'center',
      width: 160,
      render: (data) => {
        return <img src={data?.image} alt='img' />;
      },
    },
    {
      title: 'NAME',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
      render: (data) => {
        return (
          <Link className={styles.name} to={`/detail/${data?.id}`} style={{ textAlign: 'start' }}>
            {data?.name}
          </Link>
        );
      },
    },
    {
      title: 'PRICE',
      dataIndex: 'price',
      key: 'price',
      align: 'center',
      render: (data) => {
        return <div>${data.price}</div>;
      },
    },
    {
      title: 'DESCRIPTTION',
      dataIndex: 'description',
      key: 'description',
      align: 'center',
      render: (data) => {
        return <p>{data.description}</p>;
      },
    },
  ];

  const renderordersHistoryList = (ordersHistory) => {
    if (Array.isArray(ordersHistory)) {
      return ordersHistory.map((order, index) => {
        const data = order?.orderDetail?.map((item, index) => ({
          key: index,
          product: item,
          name: item,
          price: item,
          description: item,
        }));
        return (
          <Panel header={moment(order.date).format('MMMM Do YYYY, h:mm:ss a')} key={index}>
            <Table columns={columns} dataSource={data} rowKey={'key'} pagination={false} />
          </Panel>
        );
      });
    }
  };

  return (
    <div className={styles.wrapper}>
      <Collapse defaultActiveKey={[]} expandIconPosition='end'>
        {renderordersHistoryList(userProfile?.ordersHistory)}
      </Collapse>
    </div>
  );
};

export default UserTable;
