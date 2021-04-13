import React from 'react';
import { Button, Switch, Row, Col } from 'antd';

import { useMethods, useMethodsExtension } from '@huse/methods';

type UserType = {
  role: 'user' | 'admin',
  enabled: boolean,
  history: string[],
}

const Huse = () => {
  const userMethods = {
    asAdmin(user: UserType) {
      user.role = 'admin';
      user.history.push('change to admin');
    },
    asUser(user: UserType) {
      user.role = 'user';
      user.history.push('change to user');
    },
    enable(user: UserType) {
      user.enabled = true;
      user.history.push('disabled');
    },
    disable(user: UserType) {
      user.enabled = false;
      user.history.push('enabled');
    },
  };
  const [user, methods] = useMethods<typeof userMethods>(userMethods, {
    role: 'user',
    enabled: true,
    history: [],
  });
  return (
    <>
      <Row>
        <Col span={2}>
          Admin:{' '}
          <Switch
            checked={user.role === 'admin'}
            onChange={user.role === 'admin' ? methods.asUser : methods.asAdmin}
          />
        </Col>
        <Col span={2}>
          Enabled:{' '}
          <Switch
            checked={user.enabled}
            onChange={user.enabled ? methods.disable : methods.enable}
          />
        </Col>
      </Row>
      <h3 style={{ marginTop: 30 }}>Mutation history:</h3>
      <ul>
        {user.history.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </>
  );
};

export default Huse;
