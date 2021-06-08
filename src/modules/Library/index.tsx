import React from 'react';
import SubPage from '../../components/SubPage';

import Formik from './Formik';
import { AntdC } from './Antd';
import Reselect from './Reselect';
import Saga from './Saga';

const index = () => {
  return (
    <SubPage
      title="Library"
      routes={[
        {
          path: '/library/formik',
          title: 'Formik',
          component: <Formik />,
        },
        {
          path: '/library/antd',
          title: 'Antd',
          component: <AntdC />,
        },
        {
          path: '/library/reselect',
          title: 'Reselect',
          component: <Reselect />,
        },
        {
          path: '/library/saga',
          title: 'Saga',
          component: <Saga />,
        },
      ]}
    />
  );
};

export default index;
