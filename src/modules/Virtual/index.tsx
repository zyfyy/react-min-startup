import React from 'react'
import Page from '@/components/SubPage';
import Normal from './Normal';
import Virtualized from './Virtualized';

const index = () => {
  return (
    <>
      <Page title="Virtual" routes={[
        {
          title: 'normal',
          path: '/virtual/normal',
          component: (<Normal />),
        },
        {
          title: 'window',
          path: '/virtual/window',
          component: (<div>ss</div>),
        },
        {
          title: 'vitualized',
          path: '/virtual/vitualized',
          component: (<Virtualized />),
        },
      ]}/>
    </>
  )
}

export default index
