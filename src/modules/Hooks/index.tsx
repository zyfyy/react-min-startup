import React from 'react';
import SubPage from '@/components/SubPage';

import Huse from './Huse';
import ReactUse from './ReactUse';

const index = () => {
  return (
    <SubPage
      title="Huse"
      routes={[
        {
          path: '/hooks/huse',
          title: 'Huse',
          component: <Huse />,
        },
        {
          path: '/hooks/react-use',
          title: 'React-use',
          component: <ReactUse />,
        },
      ]}
    />
  );
};

export default index;
