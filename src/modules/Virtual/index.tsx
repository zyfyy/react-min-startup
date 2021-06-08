import React from 'react';
import Page from '@/components/SubPage';

import Normal from './Normal';
import Virtualized from './Virtualized';
import Window from './Window';

const index = () => {
  return (
    <>
      <Page
        title="Virtual"
        routes={[
          {
            title: 'normal',
            path: '/virtual/normal',
            component: <Normal />,
          },
          {
            title: 'window',
            path: '/virtual/window',
            component: <Window />,
          },
          {
            title: 'vitualized',
            path: '/virtual/vitualized',
            component: <Virtualized />,
          },
        ]}
      />
    </>
  );
};

export default index;
