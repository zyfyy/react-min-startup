import React, { Component } from 'react';

import SubPage, { SubPageRouteType } from '../../components/SubPage';

import Hook from './Hook';
import Hoc from './Hoc';
import Ref from './Ref';
import Context from './Context';
import Memo from './Memo';

const topicRoutes: SubPageRouteType[] = [
  {
    path: '/topics/hook',
    title: 'Hook',
    component: (<Hook />)
  },
  {
    path: '/topics/hoc',
    title: 'Hoc',
    component: (<Hoc />)
  },
  {
    path: '/topics/ref',
    title: 'Ref',
    component: (<Ref />)
  },
  {
    path: '/topics/context',
    title: 'Context',
    component: (<Context />)
  },
  {
    path: '/topics/Memo',
    title: 'Memo',
    component: (<Memo />)
  },
]

export default class Topics extends Component {
  render() {
    return (
      <SubPage routes={topicRoutes} title="Topics" />
    );
  }
}
