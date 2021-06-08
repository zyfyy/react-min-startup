import React from 'react';
import { Button, DatePicker, version } from 'antd';
import 'antd/dist/antd.css';

export const AntdC = () => {
  return (
    <div>
      <h3>antd version: {version}</h3>
      <DatePicker />
      <Button type="primary" style={{ marginLeft: 8 }}>
        Primary Button
      </Button>
    </div>
  );
};
