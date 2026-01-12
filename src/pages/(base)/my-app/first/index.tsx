import React from 'react';
import { Table } from 'antd';
import 'react-virtualized/styles.css';
const data = Array.from({ length: 1000000 }, (_, i) => ({
  id: i + 1,
  name: `User ${i + 1}`,
  email: `user${i + 1}@example.com`,
  status: i % 2 === 0 ? 'Active' : 'Inactive',
}));
const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
    width: 100,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    width: 200,
  },
  {
    title: 'Email',
    dataIndex: 'email',
    key: 'email',
    width: 300,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    width: 150,
  },
];
const VirtualizedTable = () => {

  return (
    <Table dataSource={data} columns={columns} />
  );
};
export default VirtualizedTable;
