import React from 'react'
import SubPage from '@/components/SubPage';

import Huse from './Huse'

const index = () => {
  return (
    <SubPage title="Huse" routes={[
      {
        path: '/hooks/huse',
        title: 'Huse',
        component: (<Huse />)
      },
    ]} />
  )
}

export default index
